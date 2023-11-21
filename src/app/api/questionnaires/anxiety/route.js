import connectMongoDB from "@/libs/mongodb";
import AnxietyAssessment from "@/models/AnxietyAssessment";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        connectMongoDB();

        const anxietyAssessment = await AnxietyAssessment.find();
        return NextResponse.json({ anxietyAssessment });
    } catch (error) {
        console.error("Error fetching Anxiety Assessment resource");
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
