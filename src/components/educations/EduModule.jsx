import { Formik, Form } from "formik";
import { useState, useEffect } from "react";

function EduModule({ eduModule, eduRes, userId, newEduResponse }) {
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
            console.log("res:", userEdu);
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
            <p>{userId}</p>
            <p>{status}</p>
            {status !== "Completed" ? (
                <button
                    className="rounded-lg bg-black p-2 text-white"
                    type="submit"
                    onClick={() => {
                        console.log("clicked");
                        let res = {
                            topicId: eduModule[0].topicId,
                            userId: userId,
                            topic: eduModule[0].topic,
                            category: eduModule[0].category,
                            status: "Completed",
                        };
                        console.log("result:", res);
                        newEduResponse(res);
                    }}
                >
                    Mark as Complete
                </button>
            ) : null}
        </div>
    );
}

export default EduModule;
