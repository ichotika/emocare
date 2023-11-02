"use client";
import EduDetail from "@/components/educations/EduDetail";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const [eduMod, setEduMod] = useState([]);

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
                console.log("result:", resData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // fetching current user Id from clerk
    const { user } = useUser();
    const currentUser = user ? user.id : "no user";
    console.log(currentUser);

    // fetching the edu module id
    const searchParam = useSearchParams();
    const dataId = searchParam.get("topicId");

    useEffect(() => {
        const getEdu = async () => {
            const list = await fetchEdu();
            setEduMod(list);
        };
        getEdu();
    }, []);

    async function fetchEdu() {
        const res = await fetch("http://localhost:3000/api/education");
        const data = await res.json();
        return data.education;
    }

    return (
        <>
            <EduDetail
                recList={eduMod.filter((rec) => rec.topicId !== dataId)}
                eduModule={eduMod.filter((edu) => edu.topicId === dataId)}
                userId={currentUser}
                newEduResponse={createEduResponse}
            />
        </>
    );
}