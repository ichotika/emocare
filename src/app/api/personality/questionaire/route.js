import connectMongoDB from "@/libs/mongodb";
import Personalitylist from "@/models/PersonalityList";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    const personalityData = await Personalitylist.find({});

    return NextResponse.json(personalityData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
