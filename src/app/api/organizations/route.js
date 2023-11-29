import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";


export async function GET() {
    try {
        // await connectMongoDB();
        // console.log("Connected to MongoDB");
        // let res = mongoose.connection.db.collection("organizations");
        // let orgList = await res.find({}).toArray();
        // console.log("orgList from MongoDB",orgList);

        const users = await clerkClient.users.getUserList({
            orderBy: "-created_at",
            limit: 300,
        });
        const orgListWithDuplicates = users.map(user => user.unsafeMetadata.organization).filter(orgName => orgName!==undefined);
        const orgList = [...new Set(orgListWithDuplicates)].map(orgName => { return {orgName}});
        console.log("orgList from Clerk",orgList);
        return NextResponse.json({ orgList });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        return NextResponse("Error connecting to MongoDB: ", error);
    }
}
