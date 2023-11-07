import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Feedback from "@/models/Feedback";


export async function GET (request) {
    return NextResponse.json({message: "This route is up and operational"});
}

export async function POST (request){
    const payload= await request.text();
    console.log(payload);
    return NextResponse.json({payload});
}