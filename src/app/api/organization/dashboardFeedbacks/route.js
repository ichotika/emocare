import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        console.log("Connected to MongoDB");
        let res = mongoose.connection.db.collection("feedbacks");
        let feedbacks = await res.find({}).toArray();
        return NextResponse.json({ feedbacks });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

