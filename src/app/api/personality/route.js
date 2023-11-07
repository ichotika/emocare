import connectMongoDB from "@/libs/mongodb";
import PersonalityResponses from "@/models/PersonalityResponses";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const personality = await PersonalityResponses.find();
        return NextResponse.json({ personality });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
