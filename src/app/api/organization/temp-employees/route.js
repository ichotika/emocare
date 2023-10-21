import connectMongoDB from "@/libs/mongodb";
import TempEmployee from "@/models/TempEmployee";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectMongoDB();
        const emplist = await TempEmployee.find({});
        return NextResponse.json({ emplist });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
export async function PATCH(request) {
    const { userId, pending } = await request.json();

    try {
        await connectMongoDB();
        const result = await TempEmployee.updateOne(
            { userId: userId },
            { pending: pending }
        );

        // If no document was updated, send a 404 response
        if (result.nModified === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Updated successfully",
            userId: userId,
            pending: pending,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
