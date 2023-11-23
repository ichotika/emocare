"use client";
import { useState, useEffect } from "react";
import EmpEduProgress from "../employees/EmpEduProgress";
import EduCategoryProgress from "./EduCategoryProgress";

function EducationProgress({ currentUser, pageTitle, currentTab }) {
    const [alleduPercent, setAllEduPercent] = useState("");
    const [resourceEdu, setResourceEdu] = useState("");
    const [deprEdu, setDeprEdu] = useState("");
    const [anxietyEdu, setAnxietyEdu] = useState("");
    const [burnoutEdu, setBurnoutEdu] = useState("");

    useEffect(() => {
        const getEdu = async () => {
            const edu = await fetchEdu();

            // total number of resources completed by current user in each category and overall
            const userEdu = await fetchEduRes();

            // Percent for overall education resources
            setAllEduPercent(
                (userEdu.filter((user) => user.userId === currentUser).length /
                    edu.length) *
                    100
            );
            // Percent for resource category
            setResourceEdu(
                (userEdu.filter(
                    (user) =>
                        user.userId === currentUser &&
                        user.category === "Resource"
                ).length /
                    edu.filter((e) => e.category === "Resource").length) *
                    100
            );
            // Percent for depression category
            setDeprEdu(
                (userEdu.filter(
                    (user) =>
                        user.userId === currentUser &&
                        user.category === "Depression"
                ).length /
                    edu.filter((e) => e.category === "Depression").length) *
                    100
            );
            // Percent for anxiety category
            setAnxietyEdu(
                (userEdu.filter(
                    (user) =>
                        user.userId === currentUser &&
                        user.category === "Anxiety"
                ).length /
                    edu.filter((e) => e.category === "Anxiety").length) *
                    100
            );
            // Percent for burnout category
            setBurnoutEdu(
                (userEdu.filter(
                    (user) =>
                        user.userId === currentUser &&
                        user.category === "Burnout"
                ).length /
                    edu.filter((e) => e.category === "Burnout").length) *
                    100
            );
        };
        getEdu();
    });

    // fetching education modules
    async function fetchEdu() {
        const res = await fetch("http://localhost:3000/api/education");
        const data = await res.json();
        return data.education;
    }

    // fetching responses for progress
    async function fetchEduRes() {
        const res = await fetch(
            "http://localhost:3000/api/education/responses"
        );
        const data = await res.json();
        return data.eduresponse;
    }

    return (
        <>
            <div className="rounded-lg bg-white py-2">
                {pageTitle === "employee" ? (
                    <EmpEduProgress
                        alleduPercent={alleduPercent}
                        resourceEdu={resourceEdu}
                        deprEdu={deprEdu}
                        anxietyEdu={anxietyEdu}
                        burnoutEdu={burnoutEdu}
                    />
                ) : (
                    <EduCategoryProgress
                        currentTab={currentTab}
                        alleduPercent={alleduPercent}
                        resourceEdu={resourceEdu}
                        deprEdu={deprEdu}
                        anxietyEdu={anxietyEdu}
                        burnoutEdu={burnoutEdu}
                    />
                )}
            </div>
        </>
    );
}

export default EducationProgress;
