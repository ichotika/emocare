import connectMongoDB from "@/libs/mongodb";
import DepressionResponse from "@/models/DepressionResponse";
import { NextResponse } from "next/server";

// Get a user's this month DepressionResponse data from MongoDB.
export async function GET(request) {
    try {
        await connectMongoDB();

        const { searchParams } = new URL(request.url);
        // console.log("this is the url =>", req.url);

        // console.log("this is the userId =>",searchParams.get("search"));
        const userId = searchParams.get("search");

        if (!userId) {
            console.error("You can't access this page.");
        }

        // get a one specific user data
        const findLatestUserData = await DepressionResponse.find({ userId })
            .sort({ createdAt: -1 })
            .limit(1)
            .exec();

        if (findLatestUserData.length > 0) {
            // const latestData = findLatestUserData[0];
            // const { score, level, level_description } = latestData;
            return NextResponse.json(findLatestUserData);
        } else {
            return NextResponse.json("There is no result for Depression Test");
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// POST the answer in MONGODB.
export async function POST(request) {
    await connectMongoDB();
    try {
        const newDepressionResponse = await request.json();
        const {
            userId,
            assessment_id,
            assessment_type,
            assess_date,
            score,
            level,
            level_description,
        } = newDepressionResponse;

        // search for existing data with emailID and assessData
        const existingData = await DepressionResponse.findOne({ userId });

        if (existingData) {
            const newAssessMonth = new Date(
                newDepressionResponse.assess_date
            ).getMonth();
            // console.log("newAssessMonth", newAssessMonth);
            const existingAssessMonth = new Date(
                existingData.assess_date
            ).getMonth();

            // console.log("existing data",newAssessDay.getMonth());

            // check if there is the same month existing assessment data.
            if (newAssessMonth === existingAssessMonth) {
                await DepressionResponse.findOneAndUpdate(
                    { userId },
                    {
                        $set: {
                            assess_date,
                            level,
                            score,
                            level_description,
                        },
                    }
                );
                return NextResponse.json({
                    message: "Depression Assessment data updated",
                });
            } else {
                await DepressionResponse.create(newDepressionResponse);

                return NextResponse.json({
                    message: "New document included in depression data added.",
                });
            }
        }

        // create a new document if no existing data.
        await DepressionResponse.create(newDepressionResponse);

        return NextResponse.json(
            { message: "New document included in depression data added." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting depression assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
