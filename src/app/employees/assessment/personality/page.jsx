import PersonalityForm from "@/components/assessment/personality/PersonalityForm";
import AssessmentHeader from "@/components/employees/AssessmentHeader";
export default function CreatePersonalityResponse() {
    // const router = useRouter();

    return (
        <>
            <AssessmentHeader
                headerText1={"Personality"}
                headerText2={"Open Extended Jungian Type Scales 1.2"}
                description={
                    "For each pair, you must choose where on the scale between them you think you are. For example, if the pair is “angry” versus “calm”, you should circle a 1 if you are always angry and never calm, a 3 if you are half and half, etc. On the page after that there are scoring instructions."
                }
                isHidden={true}
            />
            <PersonalityForm />
        </>
    );
}
