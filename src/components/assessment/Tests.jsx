import AssessmentCard from "./AssessmentCard";
import DepressionPic from "@/public/assets/Wireframes/depressionPic.jpg"
import AnxietyPic from "@/public/assets/Wireframes/anxietyPic.jpg"
import BurnoutPic from "@/public/assets/Wireframes/burnoutPic.jpg"
import PersonalityPic from "@/public/assets/Wireframes/personalityPic.jpg"

const Tests = () => {
    const assessments = [
        {
            title: "Depression Assessment",
            questions: 10,
            duration: 3,
            description:
                "Patient Health Questionnaire-9 (PHQ-9) is an assessment to evaluate your depression level.",
            link: "/employees/assessment/depression",
            src: DepressionPic,
            type: "depression"
        },
        {
            title: "Anxiety Assessment",
            questions: 7,
            duration: 2,
            description:
                "Generalized Anxiety Disorder Assessment (GAD-7) is an assessment to evaluate your anxiety level",
            link: "/employees/assessment/anxiety",
            src: AnxietyPic,
            type: "anxiety"
        },
        {
            title: "Burnout Assessment",
            questions: 15,
            duration: 5,
            description:
                "This assessment helps you look at the way you feel about your job and your experiences at work, so that you can get a feel for whether you are at risk of burnout.",
            link: "/employees/assessment/burnout",
            src: BurnoutPic,
            type: "burnout"
        },
    ];

    return (
        <>
            <div className="cards-container grid grid-cols-3 gap-x-6 xl:gap-y-6 xl:grid-cols-2 sm:grid-cols-1">
                {assessments.map((assessment, index) => (
                    <AssessmentCard key={index} {...assessment} />
                ))}
            </div>
        </>
    );
};




const PersonalityTest = () => {
    const personalities = [
        {
            title: "Personality Test",
            questions: 33,
            duration: 10,
            description:
                "This is a personality test that will give you a result equivalent to the Myers-Briggs Type Indicator.",
            link: "/employees/assessment/personality",
            src: PersonalityPic
        }
    ];

    return (
        <>
            <div className="cards-container grid grid-cols-3 gap-x-6 xl:gap-y-6 xl:grid-cols-2 sm:grid-cols-1">
                {personalities.map((personality, index) => (
                    <AssessmentCard key={index} {...personality} />
                ))}
            </div>
        </>
    );
}

export {Tests};
export {PersonalityTest};