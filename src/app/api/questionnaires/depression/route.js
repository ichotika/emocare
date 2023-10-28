import connectMongoDB from "@/libs/mongodb";
import depressionAssessment from "@/models/depressionAssessment";
import AssessHistory from "@/models/AssessHistory";
import { NextResponse } from "next/server";


// Get a Depression Assessment from MongoDB.
export async function GET() {

  try {
    await connectMongoDB();

    const depressionAssessmentData = await depressionAssessment.find({});

    return NextResponse.json(depressionAssessmentData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


// POST the answer in MONGODB.
export async function POST(request) {

  await connectMongoDB();

  try {
    const newDepressionData = await request.json();

    const { emailID, assessDate, depressionLevel, depressionPercent } = newDepressionData;

    // search for existing data with emailID and assessData
    const existingData = await AssessHistory.findOne({ emailID, assessDate });


    if (existingData) {

      // check if there is the same month existing assessment data.
      if (existingData.assessDate.getMonth() === assessDate.getMonth()) {

        await AssessHistory.findOneAndUpdate(
          { emailID, assessDate },
          {
            $set: {
              assessDate,
              depressionLevel,
              depressionPercent
            }
          }
        );

        return NextResponse.json({ message: "Depression Assessment data updated" });
      } else {
        await AssessHistory.create(newDepressionData);
        return NextResponse.json({ message: "New document included in depression data added." })
      }
    }

    // create a new document if no existing data.
    await AssessHistory.create(newDepressionData);
    return NextResponse.json({ message: "New document included in depression data added." })

  } catch (error) {
    console.error("Error submitting depression assessment: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}