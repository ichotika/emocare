"use client";
import React from "react";
import AssessmentPieChart from "./AssessmentPieChart";
import AssessmentStackChart from "./AssessmentStackChart";

export default function MonthlyAssessment() {
    return (
        <div className="flex-grow basis-4/5 rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <div className="flex max-w-full flex-wrap gap-x-10 gap-y-6">
                <h2 className="block w-full">Monthly Assessment</h2>
                <div className="flex grow">
                    <div className="flex grow-[2] basis-2/3 gap-3">
                        <AssessmentPieChart />
                    </div>
                    <div className="grow-[1] basis-1/3">
                        <AssessmentStackChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
