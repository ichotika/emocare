"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import AssessmentHeader from "@/components/employees/AssessmentHeader";
import Link from "next/link";

const assessHeader = ({
    headerText1 : "Anxiety Assessment",
    headerText2 : "Generalized Anxiety Disorder Assessment (GAD-7)",
    description : "" 
})

const AnxietyResultPage = () => {
    return (  
        <>
            <div className="contents-wrapper">
                <AssessmentHeader {...assessHeader} />
                <AssessmentResult/>
            </div>
        </>
    );
}
 
export default AnxietyResultPage;