import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        console.log("Connected to MongoDB");
        let res = mongoose.connection.db.collection("temp-employee");
        let employee = await res.find({}).toArray();
        return NextResponse.json({ employee });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

