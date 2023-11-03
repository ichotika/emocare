import connectMongoDB from "@/libs/mongodb";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const education = await Education.find();
        return NextResponse.json({ education });
    } catch (error) {
        console.error("Error fetching education resources");
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
