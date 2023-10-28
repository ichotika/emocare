import connectMongoDB from "@/libs/mongodb";
import AssessHistory from "@/models/AssessHistory";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectMongoDB();
        const assessment = await AssessHistory.find();
        console.log(assessment);
        return NextResponse.json({assessment});
    }catch(error){
        console.error("Error fetching assessment results: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(request){
    await connectMongoDB();
    try {
        const {
            aid,
            empName,
            emailID,
            assessDate,
            anonymous,
            depressionLevel,
            depressionPercent,
            anxietyLevel,
            anxietyPercent,
            burnoutLevel,
            burnoutPercent,
        } = await request.json();

        const assesshistory = new AssessHistory({
            aid,
            empName,
            emailID,
            assessDate,
            anonymous,
            depressionLevel,
            depressionPercent,
            anxietyLevel,
            anxietyPercent,
            burnoutLevel,
            burnoutPercent,
        });

        await assesshistory.save();

        return NextResponse.json({ message: "Assessment Created"}, {status: 201});
    } catch(error) {
        console.error("Error creating assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error"},
            {status: 500}
        );
    }
}