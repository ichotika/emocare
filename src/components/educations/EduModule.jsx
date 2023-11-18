import { useState, useEffect } from "react";
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
                (e) => e.userId === userId && e.topicId === eduModule[0].fields.topicId
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
        <>
            <div className="border-s-2 pl-4 border-[#6e6e74] sm:border-transparent">{documentToReactComponents(richContent)}</div>
            {status !== "Completed" ? (
                <>
                    <div className="flex justify-end sm:justify-center">
                        <button
                            className="rounded-lg bg-p-blue-1 font-semibold w-[400px] p-2 m-4 text-white"
                            type="submit"
                            onClick={() => {
                                let res = {
                                    topicId: eduModule[0].fields.topicId,
                                    userId: userId,
                                    topic: eduModule[0].fields.topic,
                                    category: eduModule[0].fields.category,
                                    status: "Completed",
                                };
                                newEduResponse(res);
                            }}
                        >
                            <Link href={"/employees/education"}>
                                Mark as Complete
                            </Link>
                        </button>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default EduModule;
