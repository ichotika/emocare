import getClerkData from "@/utils/fetchClerkUsers";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const emplist = await getClerkData();
        return NextResponse.json({ emplist });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
