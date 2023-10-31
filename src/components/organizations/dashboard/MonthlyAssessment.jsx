"use client";
import React from "react";
import AssessmentPieChart from "./AssessmentPieChart";
import AssessmentStackChart from "./AssessmentStackChart";

export default function MonthlyAssessment({assessmentData}) {
    const targetYear = 2023;
    const targetMonth = 9; // Month 10

    const depressionAssessments = [];
    const burnoutAssessments = [];
    const anxietyAssessments = [];

    const assessmentsInMonthYear = assessmentData.filter(assessment => {
    const assessmentTimestamp = new Date(assessment.timestamp);
    return (
      assessmentTimestamp.getMonth() === targetMonth &&
      assessmentTimestamp.getFullYear() === targetYear
    );
  });
  

  assessmentsInMonthYear.forEach(assessment => {
    const assessmentType = assessment.assessment_type;
    switch (assessmentType) {
      case "Depression":
        depressionAssessments.push(assessment);
        break;
      case "Burn out":
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
        <div className="flex-grow basis-4/5 rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <div className="flex max-w-full flex-wrap gap-x-10 gap-y-6">
                <h2 className="block w-full">Monthly Assessment</h2>
                <div className="flex grow">
                    <div className="flex grow-[2] basis-2/3 gap-3">
                        <AssessmentPieChart 
                        assessmentsInMonthYearCount = {assessmentsInMonthYearCount}
                        depressionCount = {depressionCount}
                        burnoutCount = {burnoutCount}
                        anxietyCount = {anxietyCount}
                        assessmentData={assessmentData}/>
                    </div>
                    <div className="grow-[1] basis-1/3">
                        <AssessmentStackChart 
                        depressionAssessments = {depressionAssessments}
                        burnoutAssessments = {burnoutAssessments}
                        anxietyAssessments = {anxietyAssessments}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
