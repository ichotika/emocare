import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Feedback from "@/models/Feedback";
import { currentUser, auth } from "@clerk/nextjs";

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();

    try {
        await connectMongoDB();
        const feedbacks = await Feedback.find({
            organization_name: user.unsafeMetadata.organization,
        });
        // console.log(feedbacks);
        return NextResponse.json({ feedbacks }, { status: 200 });
    } catch (error) {
        console.error("Error fetching your organization's feedback: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// title is designation in Clerk user
// description is content in POST request
export async function POST(request) {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();

    console.log(user);
    if (user.unsafeMetadata.role !== "employee") {
        return new NextResponse("Unauthorized. User not an employee", {
            status: 401,
        });
    }

    await connectMongoDB();
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        const { category, comment } = data;
        const newFeedback = new Feedback({
            clerk_id: user.id,
            organization_name: user.unsafeMetadata.organization,
            department: user.unsafeMetadata.department,
            title: user.unsafeMetadata.designation,
            category: category,
            description: comment,
        });

        await newFeedback.save();
        const dataResponse = newFeedback.toObject();

        return NextResponse.json(
            { message: "Feedback successfully submitted", data: dataResponse },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating assessment: ", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
