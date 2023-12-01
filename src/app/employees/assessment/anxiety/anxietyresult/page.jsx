"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import AssessmentHeader from "@/components/employees/AssessmentHeader";

const assessHeader = ({
    headerText1 : "Anxiety Assessment",
    headerText2 : "Generalized Anxiety Disorder Assessment (GAD-7)",
    description : "" ,
    isHidden: true,
    fontSize: "xl:text-b-2xl"
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