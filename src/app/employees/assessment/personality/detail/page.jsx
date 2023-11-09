"use client";
import { useSearchParams } from "next/navigation";
import PersonalityDetail from "@/components/employees/PersonalityDetail";
import { client } from "@/libs/contentful";
import { useEffect, useState } from "react";

const fetchPersonality = async (type) => {
    try{
        const res = await client.getEntries({
            content_type: "personality",
        });
        const personalityContent = res.items.filter((per) => per.fields.type === type);
        return personalityContent;
    } catch(error){
        console.error("Failed to fetch content:", error)
    }
}

export default function Home() {

    const [perContent, setPerContent] = useState('')

    // fetching the personality type from link
    const searchParam = useSearchParams();
    const type = searchParam.get("type");

    useEffect(() => {
        const fetchContent = async () => {
            const content = await fetchPersonality(type);
            console.log("personality content:", content)
            setPerContent(content);
        };

        fetchContent();
    })

    const typeList = perContent.length > 0 ? perContent : [];
    return (
        <div className="bg-slate-200">
            {typeList.length > 0 ? (
                <PersonalityDetail personality={typeList[0].fields} />
            ) : (
                ""
            )}
        </div>
    );
}
