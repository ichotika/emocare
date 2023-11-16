import { Tests } from "@/components/assessment/Tests";
// import Link from "next/link";
import Header from "@/components/employees/Header";
import { PersonalityTest } from "@/components/assessment/Tests";

const Assessment = () => {
    return (
        <>
            <div className="mentalhealthContainer mb-8">
                <Header
                    headertext={"Mental Health Assessment"}
                    isHidden={true}
                />
                <Tests></Tests>
            </div>

            <div className="personalityContainer">
                <h5 className="pb-5 pl-5 pt-10 text-4xl font-bold">
                    Personality Test
                </h5>
                <PersonalityTest></PersonalityTest>
            </div>
        </>
    );
};

export default Assessment;
