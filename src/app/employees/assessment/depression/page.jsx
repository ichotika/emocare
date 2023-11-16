"use client";
import Instruction from "@/components/assessment/mentalassessment/Instruction";
import Questionnaire from "@/components/assessment/mentalassessment/DepressionQuestionnaire";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const DepressionQuestionnairesPage = () => {
    return (
        <>
            <AssessmentHeader header></AssessmentHeader>

            {/* <Instruction></Instruction> */}
            <Questionnaire></Questionnaire>
        </>
    );
}

export default DepressionQuestionnairesPage;