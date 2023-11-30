"use client";
import Questionnaire from "@/components/assessment/mentalassessment/DepressionQuestionnaire";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

import { useState, useEffect } from "react"

const assessHeader = {
    headerText1: "Depression Assessment",
    headerText2: "Patient Health Questionnaire-9 (PHQ-9)",
    description: "Over the last 2 weeks, how often have you been bothered by any of the following problems? ",
    isHidden: true,
    fontSize: "xl:text-b-2xl"
}

const DepressionQuestionnairesPage = () => {
    return (
        <>
            <div className="flex flex-col grow justify-between gap-6">
                <AssessmentHeader {...assessHeader}></AssessmentHeader>
                <Questionnaire></Questionnaire>
            </div>

        </>
    );
}

export default DepressionQuestionnairesPage;