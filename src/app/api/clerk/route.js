import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request) {
    const payload= await request.json();
    console.log(payload);
}


export async function GET() {
    return NextResponse.json({ message: "Hello World!" });
}
