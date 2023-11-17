"use client";
import Instruction from "@/components/assessment/mentalassessment/Instruction";
import Questionnaire from "@/components/assessment/mentalassessment/DepressionQuestionnaire";
import Header from "@/components/employees/Header";

const DepressionQuestionnairesPage = () => {
    return (
        <>
            <Header></Header>

            <Instruction></Instruction>
            <Questionnaire></Questionnaire>
        </>
    );
}

export default DepressionQuestionnairesPage;