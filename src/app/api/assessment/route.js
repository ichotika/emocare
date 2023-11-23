import connectMongoDB from "@/libs/mongodb";
import AssessHistory from "@/models/AssessHistory";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function GET() {
    try {
        // console.log("connecting to the database");
        await connectMongoDB();
        // get userId with auth();
        const { userId } = auth();
        // console.log({userId});

        if (userId) {

            //find documents which match the userId.
            const assessment = await AssessHistory.find({ userId: userId });
            // console.log("This is the user's all AssessmentResults==>", assessment);

            return NextResponse.json(
                { assessment },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "you are not authorized user. Please login first." },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error("Error fetching assessment results: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    await connectMongoDB();
    // console.log("connected MongoDB.");
    try {
        const { userId } = auth();
        // console.log("get userId from line43 ==>",userId);
        if (userId) {
            const {
                userId,
                assessmentType,
                score,
                level,
                levelDescription,
                createdAt,
            } = await request.json();

            const assesshistory = new AssessHistory({
                userId,
                assessmentType,
                score,
                level,
                levelDescription,
                createdAt,
            });

            await assesshistory.save();
            // console.log("New posted assessment data successfuly saved. ==>", assesshistory);

            return NextResponse.json(
                { message: "Assessment Created" },
                { status: 201 }
            );
        } else {
            return NextResponse.json(
                { error: "you are not authorized user. Please login first." },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error("Error creating assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}