import connectMongoDB from "@/libs/mongodb";
import depressionAssessment from "@/models/burnoutAssessment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const burnoutAssessmentData = await burnoutAssessment.find({});

    return NextResponse.json(burnoutAssessmentData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}