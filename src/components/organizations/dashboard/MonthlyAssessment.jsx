"use client";
import React from "react";
import AssessmentDonutChart from "./AssessmentDonutChart";
import AssessmentStackChart from "./AssessmentStackChart";

export default function MonthlyAssessment({ assessmentData }) {
    const targetYear = 2023;
    const targetMonth = 10; // Month 11

    const depressionAssessments = [];
    const burnoutAssessments = [];
    const anxietyAssessments = [];

    const assessmentsInMonthYear = assessmentData.filter((assessment) => {
        const assessmentTimestamp = new Date(assessment.createdAt);
        return (
            assessmentTimestamp.getMonth() === targetMonth &&
            assessmentTimestamp.getFullYear() === targetYear
        );
    });

    assessmentsInMonthYear.forEach((assessment) => {
        const assessmentType = assessment.assessmentType;
        switch (assessmentType) {
            case "depression":
                depressionAssessments.push(assessment);
                break;
            case "burnout":
                burnoutAssessments.push(assessment);
                break;
            case "Anxiety":
                anxietyAssessments.push(assessment);
                break;
        }
    });

    const assessmentsInMonthYearCount = assessmentsInMonthYear.length;
    const depressionCount = depressionAssessments.length;
    const burnoutCount = burnoutAssessments.length;
    const anxietyCount = anxietyAssessments.length;

    return (
        <div className="basis-4/5 rounded-lg border border-gray-200 bg-white p-6 shadow xl:max-h-full xl:basis-full">
            <div className="flex flex-wrap gap-x-10 gap-y-6">
                <div className="flex grow items-center gap-[100px] xl:flex-col">
                    <div className="flex gap-3">
                        <AssessmentDonutChart
                            assessmentsInMonthYearCount={
                                assessmentsInMonthYearCount
                            }
                            depressionCount={depressionCount}
                            burnoutCount={burnoutCount}
                            anxietyCount={anxietyCount}
                            assessmentData={assessmentData}
                        />
                    </div>
                    <div className="grow-[1] basis-1/2">
                        <AssessmentStackChart
                            depressionAssessments={depressionAssessments}
                            burnoutAssessments={burnoutAssessments}
                            anxietyAssessments={anxietyAssessments}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
