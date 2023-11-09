"use client";
import DoughnutChart from "../employees/DoughnutChart";
import { useState, useEffect } from "react";
import NoResultEducation from "./NoResultEducation";

function EducationProgress({ currentUser }) {
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
            <div className="flex flex-row sm:flex-col gap-6 rounded-lg bg-white">
                {alleduPercent > 0 ? <DoughnutChart
                        healthPercent={alleduPercent}
                        categoryTitle={"All"}
                        percentCompleted={alleduPercent}
                    /> : <NoResultEducation categoryTitle={"All"} />}
                {resourceEdu > 0 ? <DoughnutChart
                    healthPercent={resourceEdu}
                    categoryTitle={"Resources"}
                    percentCompleted={resourceEdu}
                /> : <NoResultEducation categoryTitle={"Resource"} /> }
                {deprEdu > 0 ? <DoughnutChart
                    healthPercent={deprEdu}
                    categoryTitle={"Depression"}
                    percentCompleted={deprEdu}
                /> : <NoResultEducation categoryTitle={"Depression"} />}
                {anxietyEdu > 0 ? <DoughnutChart
                    healthPercent={anxietyEdu}
                    categoryTitle={"Anxiety"}
                    percentCompleted={anxietyEdu}
                /> : <NoResultEducation categoryTitle={"Anxiety"} />}
                {burnoutEdu > 0 ? <DoughnutChart
                    healthPercent={burnoutEdu}
                    categoryTitle={"Burnout"}
                    percentCompleted={burnoutEdu}
                /> : <NoResultEducation categoryTitle={"Burnout"} />}
            </div>
        </>
    );
}

export default EducationProgress;
