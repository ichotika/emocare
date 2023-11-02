"use client";
import { useEffect, useState } from "react";
import Recommendations from "./Recommendation";
import EduModule from "./EduModule";

function EduDetail({ recList, eduModule, userId, newEduResponse }) {
    const [eduRes, setEduRes] = useState([]);

    useEffect(() => {
        const getEdu = async () => {
            const response = fetchEduRes();
            const res = await response;
            setEduRes(res);
        };
        getEdu();
    }, []);

    async function fetchEduRes() {
        const res = await fetch(
            "http://localhost:3000/api/education/responses"
        );
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <div className="m-4 p-4 bg-slate-100">
            <div className="m-2 p-4 font-bold text-lg rounded-lg bg-slate-200">
                <h1>{eduModule.length > 0 ? eduModule[0].topic : ""}</h1>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1 border-e-2 border-current">
                    <h2 className="pl-4 font-bold">Recommendations</h2>
                    {recList.length > 0
                        ? recList.map((detail, index) => (
                            <div className="m-4" key={index}>
                                <Recommendations
                                    category={detail.category}
                                    topic={detail.topic}
                                    topicId={detail.topicId}
                                />
                            </div>
                        ))
                        : "No data"}
                </div>

                <div className="col-span-3">
                    {eduModule.length > 0 ? (
                        <EduModule
                            eduModule={eduModule}
                            eduRes={eduRes}
                            userId={userId}
                            newEduResponse={newEduResponse}
                        />
                    ) : (
                        "No data"
                    )}
                </div>
            </div>
        </div>
    );
}

export default EduDetail;
