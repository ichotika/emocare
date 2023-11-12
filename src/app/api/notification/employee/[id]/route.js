import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request) {
  await connectMongoDB();

  try {
    const { userid, timestamp, isRead, assessmentType } = await request.json();

    const collection = mongoose.connection.db.collection("temp-notification-employee");
    await collection.insertOne({
      userid,
      timestamp,
      isRead,
      assessmentType,
    });

    return NextResponse.json({ message: "Notification Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating notification: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

