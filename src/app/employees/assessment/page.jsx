import { Tests } from "@/components/assessment/Tests";
// import Link from "next/link";
import Header from "@/components/employees/Header";
import { PersonalityTest } from "@/components/assessment/Tests";

const Assessment = () => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="mentalhealthContainer xl:pb-6">
                    <Header
                        headertext={"Mental Health Assessment"}
                        isHidden={true}
                        marginTB={"mt-0 mb-6"}
                    />
                    <Tests></Tests>
                </div>
                <div className="personalityContainer">
                    <h5 className="pb-6 text-4xl font-bold">
                        Personality Test
                    </h5>
                    <PersonalityTest></PersonalityTest>
                </div>
            </div>
        </>
    );
};

export default Assessment;
