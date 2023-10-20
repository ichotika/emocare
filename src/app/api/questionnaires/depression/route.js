import connectMongoDB from "@/libs/mongodb";
import depressionAssessment from "@/models/depressionAssessment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const depressionAssessmentData = await depressionAssessment.find({});

    return NextResponse.json(depressionAssessmentData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}