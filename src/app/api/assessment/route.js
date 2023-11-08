import connectMongoDB from "@/libs/mongodb";
import AssessHistory from "@/models/AssessHistory";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const assessment = await AssessHistory.find();
        return NextResponse.json({ assessment });
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
    try {
        const {
            userId,
            assessmentType,
            score,
            level,
            levelDescription,
            timestamps,
        } = await request.json();

        const assesshistory = new AssessHistory({
            userId,
            assessmentType,
            score,
            level,
            levelDescription,
            timestamps,
        });

        await assesshistory.save();

        return NextResponse.json(
            { message: "Assessment Created" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
