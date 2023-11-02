import connectMongoDB from "@/libs/mongodb";
import AnxietyResponse from "@/models/AnxietyResponse";
import { NextResponse } from "next/server";
import mongoose from 'mongoose'

// Get a user's this month DepressionResponse data from MongoDB.
export async function GET() {
    try {
        await connectMongoDB();

        const { userId } = AnxietyResponse.userId;
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

        if (!userId) {
            return NextResponse.json(
                { error: "UserID is required." },
                { status: 400 }
            )
        }

        const userAnxietyResponse = await AnxietyResponse.findOne({
            userId: userId,
            createdAt: {
                $gte: startOfMonth,
                $lte: endOfMonth
            }
        })

        console.log("thisMonthAnxietyResponse", userAnxietyResponse);
        return NextResponse.json(userAnxietyResponse);

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
        const newAnxietyResponse = await request.json();
        const { userId, assessment_id, assessment_type, assess_date, score, level, level_description } = newAnxietyResponse;

        // search for existing data with emailID and assessData
        const existingData = await AnxietyResponse.findOne({ userId, assess_date });


        if (existingData) {

            // check if there is the same month existing assessment data.
            if (existingData.assess_date.getMonth() === assess_date.getMonth()) {

                await AnxietyResponse.findOneAndUpdate(
                    { emailID, assess_date },
                    {
                        $set: {
                            assess_date,
                            level,
                            score,
                            level_description
                        }
                    }
                );
                return NextResponse.json({ message: "Anxiety Assessment data updated" });
            } else {
                await AnxietyResponse.create(newAnxietyResponse);
                return NextResponse.json({ message: "New document included in Anxiety data added." })
            }
        }

        // create a new document if no existing data.
        await newAnxietyResponse.save();
        return NextResponse.json(
            { message: "New document included in Anxiety data added." },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting Anxiety assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}