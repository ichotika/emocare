"use client";
import EduDetail from "@/components/educations/EduDetail";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { client } from "@/libs/contentful";

const fetchContent = async (dataId) => {
    try {
        const res = await client.getEntries({
            content_type: "education",
        });
        const educationContent = res.items.filter(
            (item) => item.fields.topicId === dataId
        );
        return educationContent;
    } catch (error) {
        console.error("Failed to fetch content:", error);
    }
};

export default function Home() {
    // fetching the edu module id
    const searchParam = useSearchParams();
    const dataId = searchParam.get("topicId");

    const [eduMod, setEduMod] = useState([]);
    const [eduContent, setEducontent] = useState([]);
    const createEduResponse = async (eduResponse) => {
        try {
            const res = await fetch(
                "http://localhost:3000/api/education/responses",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(eduResponse),
                }
            );

            if (res.ok) {
                const resData = await res.json();
            }
        } catch (error) {
            console.log(error);
        }
    };

    // fetching current user Id from clerk
    const { user } = useUser();
    const currentUser = user ? user.id : "no user";

    useEffect(() => {
        const getEdu = async () => {
            const list = await fetchEdu();
            setEduMod(list);
        };
        getEdu();
    }, []);
    useEffect(() => {
        const getContent = async () => {
            const content = await fetchContent(dataId);
            setEducontent(content);
        };

        getContent();
    }, [dataId]);
    async function fetchEdu() {
        const res = await fetch("http://localhost:3000/api/education");
        const data = await res.json();
        return data.education;
    }

    return (
        <>
            <EduDetail
                recList={eduMod.filter((rec) => rec.topicId !== dataId)}
                eduModule={eduContent}
                userId={currentUser}
                newEduResponse={createEduResponse}
                // eduContent[0].fields.topicId
            />
        </>
    );
}
