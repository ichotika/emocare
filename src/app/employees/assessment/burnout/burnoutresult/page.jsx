"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const assessHeader = ({
    headerText1 : "Burnout Assessment",
    headerText2 : "Burnout Self-Test",
    description : "" ,
    isHidden: true,
    fontSize: "xl:text-b-2xl"
})

const BurnoutResultPage = () => {
    return (  
        <>
            <div className="contents-wrapper">
                <AssessmentHeader {...assessHeader} />
                <AssessmentResult/>
            </div>
        </>
    );
}
 
export default BurnoutResultPage;