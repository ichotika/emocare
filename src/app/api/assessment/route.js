import connectMongoDB from "@/libs/mongodb";
import AssessHistory from "@/models/AssessHistory";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Get a user's this month & this year data from MongoDB.
export async function GET(request) {
    try {
        await connectMongoDB();
        // find the same userId data.
        // console.log("this is the url =>", request.url);

        const { searchParams } = new URL(request.url);
        // console.log("this is the userId =>",searchParams.get("search"));

        const userId = searchParams.get("search")

        if (!userId) {
            alert("Please log in.");
        }

        // connet with MongoDB directly.
        let existingAssessData = mongoose.connection.db.collection("assesshistory");

        //get every data of user's assess history.
        let existingAssessDataArry = await existingAssessData.find({userId}).sort({_id: -1}).toArray();

        const latestDepressionData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "Depression");
        const latestAnxietyData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "anxiety");
        const latestBurnoutData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "burnout");

        // console.log(typeof latestDepressionData);

        const latestAssessDataObj = {
            depression: latestDepressionData,
            anxiety: latestAnxietyData,
            burnout: latestBurnoutData
        };
        // console.log("this is the latest 3 assessment data", latestAssessDataObj);

        if (!latestAssessDataObj.depression && !latestAssessDataObj.anxiety && !latestAssessDataObj.burnout){
            return NextResponse.json({message: "No data to show." });
        } else {
            return NextResponse.json(latestAssessDataObj);
        }            
    } catch (error) {
        // console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}


// POST the answer in MONGODB.
export async function POST(request) {

    let existingAssessDataArry;

    await connectMongoDB();
    try {
        // console.log("successfuly connected api")
        let newAssessRecords = await request.json();
        let { userId, assessmentType, score, level, levelDescription, timestamp } = newAssessRecords;
        console.log(timestamp, typeof timestamp);
        // console.log("this is the new POST record", newAssessRecords);
    // } catch (error) {
    //     console.error("error01", error);
    // }

    // // connect the mongo db 

    

    // try {
        let existingAssessData = mongoose.connection.db.collection("assesshistory");
        existingAssessDataArry = await existingAssessData.find({userId}).toArray();
        // console.log("existingAssessDataArray => ", existingAssessDataArry)
    // } catch (error) {
    //     console.error("error02", error);
    // }
    
    // try{
        // let existingAssessDataArry = await existingAssessData.find({userId}).sort({_id: -1}).toArray();
        // console.log("existingAssessDataArray => ", existingAssessDataArry)
        const latestDepressionData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "Depression");
        const latestAnxietyData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "anxiety");
        const latestBurnoutData = existingAssessDataArry.find((latestData) => latestData.assessmentType === "burnout");
        // console.log("latestDepressiondata's TimeSTAMP!!!! => ", new Date(latestDepressionData.timestamp).getYear());

        const latestAssessObj = {
            depression: latestDepressionData,
            anxiety: latestAnxietyData,
            burnout: latestBurnoutData
        }
        

        console.log("this comes from line 99", Date.parse(latestAssessObj.depression.timestamp));       
        let myDate = new Date(latestAssessObj.depression.timestamp);
        console.log("thi is from line 101 to get month", myDate.getMonth());
        if (latestAssessObj.depression) {

            // console.log("latestesAssessObj.depression=>" ,latestAssessObj.depression);
            const getExistingDataMonth = new Date(latestAssessObj.depression.timestamp).getMonth();
            const getExistingDataYear = new Date(latestAssessObj.depression.timestamp).getYear();
            const getNewDataMonth = new Date(timestamp).getMonth();
            const getNewDataYear = new Date(timestamp).getYear();

            console.log("line 110 get month from newObject", getNewDataMonth)

            if (getExistingDataMonth === getNewDataMonth && getExistingDataYear === getNewDataYear ) {
                console.log("same month assessment is created")
            
                return NextResponse.json({ message: "Depression Assessment data updated" });
            } else {
                await AssessHistory.create(newAssessRecords);

                return NextResponse.json({ message: "New document included in depression data added." })
            }
        }

    } catch (error) {
        console.error("Error submitting depression assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error"+error },
            { status: 500 }
        );
    }
}

        // if (assessmentType === "depression") {
        //     await AssessHistory.create(newAssessRecords);
        //     if (latestAssessDataArry[0].length > 0) {
        //         const newDepressionDate = new Date();
        //         // console.log("newAssessDataMonth",  newDepressionDate.getYear());
        //         // console.log("newAssessDataMonth",  newDepressionDate.getMonth());

        //         const newDepressionMonth = newDepressionDate.getMonth();
        //         const newDepressionYear = newDepressionDate.getYear();

                

        //         console.log(new Date(latestDataObj[assessmentType].timestamp).getMonth());

                // const existingAssessMonth = new Date(latestAssessDataArray[0]).getMonth()

                // console.log("existing data",newAssessDay.getMonth());
    
                // check if there is the same month existing assessment data.
        //         if (newAssessMonth === existingAssessMonth) {
        //             await AssessHistory.findOneAndUpdate(
        //                 { userId },
        //                 {
        //                     $set: {
        //                         assess_date,
        //                         level,
        //                         score,
        //                         level_description
        //                     }
        //                 }
        //             );
        //             return NextResponse.json({ message: "Depression Assessment data updated" });
        //         } else {
        //             await AssessHistory.create(newAssessRecords);
    
        //             return NextResponse.json({ message: "New document included in depression data added." })
        //         }


        // }}


        // if (latestAssessDataArry[0]) {
        //     const newDepressionDate = new Date(assessDate).getMonth();
        //     console.log("newAssessMonth", newDepressionDate);
        //     const existingAssessMonth = new Date(existingData.assess_date).getMonth()
        //     // console.log("existing data",newAssessDay.getMonth());
        //     // check if there is the same month existing assessment data.
        //     if (newAssessMonth === existingAssessMonth) {
        //         await AssessHistory.findOneAndUpdate(
        //             { userId },
        //             {
        //                 $set: {
        //                     assess_date,
        //                     level,
        //                     score,
        //                     level_description
        //                 }
        //             }
        //         );
        //         return NextResponse.json({ message: "Depression Assessment data updated" });
        //     } else {
        //         await AssessHistory.create(newAssessRecords);

        //         return NextResponse.json({ message: "New document included in depression data added." })
        //     }
        // }

        // create a new document if no existing data.
        // await AssessHistory.create(newAssessRecords);

        // return NextResponse.json(
        //     { message: "New document included in depression data added." },
        //     { status: 201 }
        // );




        // let latestAssessDataArry = [];

        // // get a latest data for each assessment
        // const findLatestDepressionData = await AssessHistory
        //     .find({ userId })
        //     .find({ assessmentType : "Depression" })
        //     .sort({ createdAt: -1 })
        //     .limit(1)
        //     .lean()
        //     .exec()

        // const findLatestBurnoutData = await AssessHistory
        //     .find({ userId })
        //     .find({ assessmentType : "Burn out" })
        //     .sort({ createdAt: -1 })
        //     .limit(1)
        //     .lean()
        //     .exec()

        // const findLatestAnxietyData = await AssessHistory
        //     .find({ userId })
        //     .find({ assessmentType : "Anxiety" })
        //     .sort({ createdAt: -1 })
        //     .limit(1)
        //     .lean()
        //     .exec()

        // latestAssessDataArry.push(findLatestDepressionData);
        // latestAssessDataArry.push(findLatestBurnoutData);
        // latestAssessDataArry.push(findLatestAnxietyData);

        // const latestDataObj = {
        //     depression: findLatestDepressionData[0],
        //     burnout: findLatestBurnoutData[0],
        //     anxiety: findLatestAnxietyData[0],
        // }


        // search for existing data with userID and assessData.
        // const existingDeperssionData = await AssessHistory.find({ userId });

        // console.log("this is depression", assessmentType);

        // await AssessHistory.findOneAndUpdate(
        //     { userId },
        //     {
        //         $set: {
        //             assess_date,
        //             level,
        //             score,
        //             level_description
        //         }
        //     }
        // );