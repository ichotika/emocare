"use client";
import { useEffect, useState } from "react";
import Recommendations from "./Recommendation";
import EduModule from "./EduModule";
import EduModHeader from "./EduModHeader";


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
        <div className="m-4 p-4">
            <>
                {eduModule.length > 0 ? <EduModHeader header={eduModule[0].fields.topic} topicId={eduModule[0].fields.topicId} /> : ""}
            </>
            <div className="grid grid-cols-4 sm:flex sm:flex-col-reverse gap-2">
                <div className="col-span-1 sm:bg-white sm:rounded-lg py-4">
                    <h2 className="pl-4 font-bold">Recommendations</h2>
                    {recList.length > 0
                        ? recList.map((detail, index) => (
                              <div className="m-4 sm:shadow sm:p-2 sm:rounded-lg" key={index}>
                                  <Recommendations
                                      category={detail.category}
                                      topic={detail.topic}
                                      topicId={detail.topicId}
                                  />
                              </div>
                          ))
                        : ""}
                </div>

                <div className="col-span-3 pb-4">
                    {eduModule.length > 0 ? (
                        <EduModule
                            eduModule={eduModule}
                            eduRes={eduRes}
                            userId={userId}
                            newEduResponse={newEduResponse}
                            richContent={eduModule[0].fields.richContent}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default EduDetail;
