import connectMongoDB from "@/libs/mongodb";
import BurnoutResponse from "@/models/BurnoutResponse";
import { NextResponse } from "next/server";

// Get a user's this month BurnoutResponse data from MongoDB.
export async function GET(request) {
    try {
        await connectMongoDB();

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("search");

        if (!userId) {
            console.error("You can't access this page.");
        }

        const findLatestUserData = await BurnoutResponse.find({ userId })
            .sort({ createdAt: -1 })
            .limit(1)
            .exec();

        console.log(findLatestUserData);

        if (findLatestUserData.length > 0) {
            // const latestData = findLatestUserData[0];
            // const { score, level, level_description } = latestData;

            return NextResponse.json(findLatestUserData);
        } else {
            return NextResponse.json("There is no result for Burnout Test");
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
        const newBurnoutResponse = await request.json();
        const {
            userId,
            assessment_id,
            assessment_type,
            assess_date,
            score,
            level_description,
        } = newBurnoutResponse;

        // search for existing data with emailID and assessData
        const existingData = await BurnoutResponse.findOne({ userId });

        if (existingData) {
            const newAssessMonth = new Date(
                newBurnoutResponse.assess_date
            ).getMonth();
            // console.log("newAssessMonth", newAssessMonth);
            const existingAssessMonth = new Date(
                existingData.assess_date
            ).getMonth();

            // console.log("existing data",newAssessDay.getMonth());

            // check if there is the same month existing assessment data.
            if (newAssessMonth === existingAssessMonth) {
                await BurnoutResponse.findOneAndUpdate(
                    { userId },
                    {
                        $set: {
                            assess_date,
                            // level,
                            score,
                            level_description,
                        },
                    }
                );
                return NextResponse.json({
                    message: "Burnout Assessment data updated",
                });
            } else {
                await BurnoutResponse.create(newBurnoutResponse);

                return NextResponse.json({
                    message: "New document included in Burnout data added.",
                });
            }
        }

        // create a new document if no existing data.
        await BurnoutResponse.create(newBurnoutResponse);

        return NextResponse.json(
            { message: "New document included in Burnout data added." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting Burnout assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
