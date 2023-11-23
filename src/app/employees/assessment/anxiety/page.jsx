"use client";
import AnxietyQuestionnaire from "@/components/assessment/mentalassessment/AnxietyQuestionnaire";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const assessHeader = {
    headerText1: "Anxiety Assessment",
    headerText2: "Generalized Anxiety Disorder Assessment (GAD-7)",
    description: "Over the last 2 weeks, how often have you been bothered by any of the following problems? ",
}

const AnxietyQuestionnaires = () => {
    return (
        <>
            <div className="flex flex-col grow justify-between gap-y-6">
                <AssessmentHeader {...assessHeader}></AssessmentHeader>
                <AnxietyQuestionnaire></AnxietyQuestionnaire>
            </div>
        </>
    );
}

export default AnxietyQuestionnaires;