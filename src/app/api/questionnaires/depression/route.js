import connectMongoDB from "@/libs/mongodb";
import DepressionAssessment from "@/models/depressionAssessment";
import { NextResponse } from "next/server";

// Get a Depression questionnaire from MongoDB.
export async function GET() {
    try {
        await connectMongoDB();

        const depressionAssessment = await DepressionAssessment.find();

        return NextResponse.json({ depressionAssessment });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
