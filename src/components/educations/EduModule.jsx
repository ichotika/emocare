import { useState, useEffect } from "react";
import ModT01 from "./ModT01";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function EduModule({ eduModule, eduRes, userId, newEduResponse, richContent }) {
    const [edu, setEdu] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        const getEdu = async () => {
            const response = fetchEduRes();
            const res = await response;
            setEdu(res);
            const userEdu = res.filter(
                (e) => e.userId === userId && e.topicId === eduModule[0].topicId
            );
            setStatus(userEdu.length > 0 ? userEdu[0].status : "Not Completed");
        };
        getEdu();
    }, [eduModule, userId]);

    async function fetchEduRes() {
        const res = await fetch(
            "http://localhost:3000/api/education/responses"
        );
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <div>
            {eduModule[0].topicId === "T01" ? <ModT01 /> : ""}
            {status !== "Completed" ? (
                <>
                    <div>{documentToReactComponents(richContent)}</div>
                    <div className="flex justify-end">
                        <button
                            className="rounded-lg bg-black p-2 text-white"
                            type="submit"
                            onClick={() => {
                                let res = {
                                    topicId: eduModule[0].topicId,
                                    userId: userId,
                                    topic: eduModule[0].topic,
                                    category: eduModule[0].category,
                                    status: "Completed",
                                };
                                newEduResponse(res);
                            }}
                        >
                            <Link href={"http://localhost:3000/education"}>
                                Mark as Complete
                            </Link>
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default EduModule;
