import AssessmentCard from "./AssessmentCard";
import Link from "next/link"

const Tests = () => {

    const assessments = [
        {
            title: "Depression Assessment",
            questions: 10,
            duration: 3,
            description: "Patient Health Questionnaire-9 (PHQ-9) is an assessment to evaluate your depression level.",
            link: "/assessment/depression"
        },
        {
            title: "Anxiety Assessment",
            questions: 7,
            duration: 2,
            description: "Generalized Anxiety Disorder Assessment (GAD-7) is an assessment to evaluate your anxiety level",
            link: "/assessment/anxiety"
        },
        {
            title: "Burnout Assessment",
            questions: 15,
            duration: 5,
            description: "This assessment helps you look at the way you feel about your job and your experiences at work, so that you can get a feel for whether you are at risk of burnout.",
            link: "/assessment/burnout"
        }
    ]

    return (
        <>

            <div className="flex">
                {assessments.map((assessment, index) => (
                    <AssessmentCard key={index} {...assessment} />
                )
                )}
            </div>
        </>
    )
}

export default Tests;