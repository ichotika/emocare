"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import AssessmentHeader from "@/components/employees/AssessmentHeader";
import Link from "next/link";
import MainBtn from "@/components/base/MainBtn";

const assessHeader = ({
    headerText1 : "Depression Assessment",
    headerText2 : "Patient Health Questionnaire-9 (PHQ-9)",
    description : "" 
})

const DepressionResultPage = () => {
    return (  
        <>
            <div className="contents-wrapper">
                <AssessmentHeader {...assessHeader} />
                <AssessmentResult/>
                <Link className="bg-blue-700 text-white rounded-lg p-2" href={"/employees/assessment"}>Take other assessment</Link>
            </div>
        </>
    );
}
 
export default DepressionResultPage;