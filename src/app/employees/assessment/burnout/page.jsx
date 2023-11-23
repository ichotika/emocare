"use client";
import BurnoutQuestionnaire from "@/components/assessment/mentalassessment/BurnoutQuestionnaire";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const assessHeader = {
    headerText1: "Burnout Assessment",
    headerText2: "Burnout Self-Test",
    description: "Answer questions as you actually are (rather than how you think you should be), and don’t worry if some questions seem to score in the “wrong direction.” When you are finished, use the mark sheet to work out your score. Then read the guidance that follows. ",
}

const BurnoutQuestionnaires = () => {
    return (
        <>            
            <div className="flex flex-col grow justify-between gap-y-6">
                <AssessmentHeader {...assessHeader}></AssessmentHeader>
                <BurnoutQuestionnaire></BurnoutQuestionnaire>
            </div>
        </>
    );
}

export default BurnoutQuestionnaires;