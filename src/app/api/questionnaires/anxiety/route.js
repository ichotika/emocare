import connectMongoDB from "@/libs/mongodb";
import anxietyAssessment from "@/models/anxietyAssessment";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const burnoutAssessmentData = await anxietyAssessment.find({});
    return NextResponse.json(anxietyAssessmentData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}