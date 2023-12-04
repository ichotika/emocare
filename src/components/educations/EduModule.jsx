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
            setStatus(userEdu.length > 0 ? false : true);
        };
        getEdu();
    }, [eduModule, userId]);

    async function fetchEduRes() {
        const res = await fetch(
            "/api/education/responses"
        );
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <>
            <div className="border-s-2 pl-4 border-[#6e6e74] sm:border-transparent">{documentToReactComponents(richContent)}</div>
            {status ? (
                <>
                    <div className="flex justify-end sm:justify-center">
                        <Link href={"/employees/education"}>
                            <button
                                className="rounded-lg bg-p-blue-1 hover:bg-p-blue-2 font-semibold w-[400px] p-2 m-4 text-white"
                                type="submit"
                                onClick={() => {
                                    let res = {
                                        topicId: eduModule[0].fields.topicId,
                                        userId: userId,
                                        topic: eduModule[0].fields.topic,
                                        category: eduModule[0].fields.category,
                                        status: "Completed",
                                    };
                                    setStatus(false);
                                    newEduResponse(res);
                                }}
                            >
                                Mark as Complete
                            </button>
                        </Link>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default EduModule;
