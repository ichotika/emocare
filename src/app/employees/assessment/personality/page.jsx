import { useRouter } from "next/navigation";
import PersonalityForm from "@/components/assessment/personality/PersonalityForm";
export default function CreatePersonalityResponse() {
    // const router = useRouter();

    const createResponse = async (responseObj) => {
        try {
            const response = await fetch("/api/personality/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(responseObj),
            });

            if (response.ok) {
                // router.push("/");
                const responseData = await response.json();
                alert(
                    "Your personality type are " +
                        responseData.data.personalityType
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <PersonalityForm createResponse={createResponse} />
        </>
    );
}
