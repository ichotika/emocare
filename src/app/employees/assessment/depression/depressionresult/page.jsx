"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const assessHeader = ({
    headerText1 : "Depression Assessment",
    headerText2 : "Patient Health Questionnaire-9 (PHQ-9)",
    description : "" ,
    isHidden: true,
    fontSize: "xl:text-b-2xl"
})

const DepressionResultPage = () => {
    return (  
        <>
            <div className="contents-wrapper">
                <AssessmentHeader {...assessHeader} />
                <AssessmentResult/>
            </div>
        </>
    );
}
 
export default DepressionResultPage;