import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        console.log("Connected to MongoDB");
        let res = mongoose.connection.db.collection("random-assessment-txn");
        let randAsessment = await res.find({}).toArray();
        return NextResponse.json({ randAsessment });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

