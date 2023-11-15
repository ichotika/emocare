import connectMongoDB from "@/libs/mongodb";
import PersonalityResponses from "@/models/PersonalityResponses";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();
    try {
        const {
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
            Q22,
            Q23,
            Q24,
            Q25,
            Q26,
            Q27,
            Q28,
            Q29,
            Q30,
            Q31,
            Q32,
            userId,
        } = await request.json();
        const extroversionType =
            30 - Q3 - Q7 - Q11 + Q15 - Q19 + Q23 + Q27 - Q31 > 24 ? "E" : "I";
        const SensingType =
            12 + Q4 + Q8 + Q12 + Q16 + Q20 - Q24 - Q28 + Q32 > 24 ? "N" : "S";
        const ThinkingType =
            30 - Q2 + Q6 + Q10 - Q14 - Q18 + Q22 - Q26 - Q30 > 24 ? "T" : "F";
        const PerceivingType =
            18 + Q1 + Q5 - Q9 + Q13 - Q17 + Q21 - Q25 + Q29 > 24 ? "P" : "J";
        const personalityType =
            extroversionType + SensingType + ThinkingType + PerceivingType;
        const personalityResponse = new PersonalityResponses({
            userId,
            personalityType,
            Q1,
            Q2,
            Q3,
            Q4,
            Q5,
            Q6,
            Q7,
            Q8,
            Q9,
            Q10,
            Q11,
            Q12,
            Q13,
            Q14,
            Q15,
            Q16,
            Q17,
            Q18,
            Q19,
            Q20,
            Q21,
            Q22,
            Q23,
            Q24,
            Q25,
            Q26,
            Q27,
            Q28,
            Q29,
            Q30,
            Q31,
            Q32,
        });

        await personalityResponse.save();

        return NextResponse.json(
            {
                message: "Personality Response Saved",
                data: personalityResponse,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating personality response:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
