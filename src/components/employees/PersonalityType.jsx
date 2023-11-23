import { useEffect, useState } from "react";
import NoPersonalityResult from "./NoPersonalityResult";
import PersonalityDesc from "./PersonalityDesc";
import { client } from "@/libs/contentful";

const fetchPersonality = async (type) => {
    try {
        const res = await client.getEntries({
            content_type: "personality",
        });
        const personalityContent = res.items.filter(
            (per) => per.fields.type === type
        );
        return personalityContent;
    } catch (error) {
        console.error("Failed to fetch content:", error);
    }
};

function PersonalityType({ mypersonality }) {
    const [perContent, setPerContent] = useState("");

    useEffect(() => {
        const fetchContent = async () => {
            const content = await fetchPersonality(mypersonality);
            setPerContent(content);
        };

        fetchContent();
    }, [mypersonality]);

    const personality = perContent.length > 0 ? perContent : [];

    return (
        <>
            {personality.length > 0 ? (
                <PersonalityDesc personalityDesc={personality[0].fields} />
            ) : (
                <NoPersonalityResult
                    personalityLink={"/employees/assessment/personality"}
                />
            )}
        </>
    );
}

export default PersonalityType;
