import connectMongoDB from "@/libs/mongodb";
import TemporarilySaved from "@/models/TemporarilySaved";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function GET() {
    try {
        // console.log("connecting to the database");
        await connectMongoDB();
        // get userId with auth();
        const { userId } = auth();
        // console.log({userId});

        if (userId) {

            //find documents which match the userId.
            const assessment = await TemporarilySaved.find({ userId: userId });
            // console.log("This is the user's all AssessmentResults==>", assessment);

            return NextResponse.json(
                { assessment },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "you are not authorized user. Please login first." },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error("Error fetching assessment results: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    await connectMongoDB();
    // console.log("connected MongoDB.");
    try {
        const { userId } = auth();
        // console.log("get userId from line43 ==>",userId);
        if (userId) {
            const {
                userId,
                assessmentType,
                savedData,
                createdAt,
            } = await request.json();

            // filter the data using userId and assessType
            const existingSavedData = await TemporarilySaved.findOne({ userId, assessmentType });

            if (existingSavedData) {
                // Updata the savedData if existing data is found.
                existingSavedData.savedData = savedData;
                existingSavedData.createdAt = createdAt;
                await existingSavedData.save();
            } else {
                // create new Data if no existingData
                const newSavedData = new TemporarilySaved({
                    userId,
                    assessmentType,
                    savedData,
                    createdAt,
                });
                await newSavedData.save();
            }


            return NextResponse.json(
                { message: "Assessment Created" },
                { status: 201 }
            );
        } else {
            return NextResponse.json(
                { error: "you are not authorized user. Please login first." },
                { status: 401 }
            )
        }
    } catch (error) {
        console.error("Error creating assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        await connectMongoDB();
        const { userId } = auth();

        if (userId) {
            const { dataId } = request.query; // リクエストからデータIDを取得

            // データベースから指定されたデータを削除する処理
            const result = await TemporarilySaved.findOneAndDelete({
                userId: userId,
                _id: dataId, // または該当のデータの一意の識別子を指定
            });

            if (result) {
                return NextResponse.json(
                    { message: "Data deleted successfully" },
                    { status: 204 }
                );
            } else {
                return NextResponse.json(
                    { error: "Data not found" },
                    { status: 404 }
                );
            }
        } else {
            return NextResponse.json(
                { error: "You are not authorized. Please log in first." },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error("Error occurred while deleting data", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}