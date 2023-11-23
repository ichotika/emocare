import connectMongoDB from "@/libs/mongodb";
import EducationResponse from "@/models/EducationResponse";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const eduresponse = await EducationResponse.find();
        return NextResponse.json({ eduresponse });
    } catch (error) {
        console.error("Error fetching responses:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    await connectMongoDB();
    try {
        const { category, topic, topicId, userId, status } =
            await request.json();

        const educationResponse = new EducationResponse({
            topicId,
            userId,
            topic,
            category,
            status,
        });

        await educationResponse.save();

        return NextResponse.json(
            { messae: "Education Response created" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating education response");
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
