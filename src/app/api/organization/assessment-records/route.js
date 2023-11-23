import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectMongoDB();
        console.log("Connected to MongoDB");
        let res = mongoose.connection.db.collection("assesshistory");
        let assessmentArr = await res.find({}).toArray();
        return NextResponse.json({ assessmentArr });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}
