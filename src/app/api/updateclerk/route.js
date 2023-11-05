import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const data = await request.json();
        const { userId, firstName, lastName } = data;
        const params = { firstName: firstName, lastName: lastName };
        const updatedUser = await clerkClient.users.updateUser(userId, params);

        return NextResponse.json({ updatedUser });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
