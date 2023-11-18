import connectMongoDB from "@/libs/mongodb";
import BurnoutAssessment from "@/models/BurnoutAssessment";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();

        const burnoutAssessment = await BurnoutAssessment.find();

        return NextResponse.json(burnoutAssessment);
    } catch (error) {
        // console.error("Error fetching Burnout Assessment");
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
