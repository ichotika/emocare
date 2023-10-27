"use client";
import { useState, useEffect } from "react";
import Header from "@/components/organizations/Header";
import AssessmentHistory from "@/components/employees/AssessmentHistory";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import DoughnutChart from "@/components/employees/DoughnutChart";
import PersonalityType from "@/components/employees/PersonalityType";
import MoodSelector from "@/components/employees/MoodSelector";
import NoResultChart from "@/components/employees/NoResultChart";
import NoAssessResult from "@/components/employees/NoAssessResult";
import NoPersonalityResult from "@/components/employees/NoPersonalityResult";
import EmployeeSidebar from "@/components/base/EmployeeSidebar";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [assessmentData, setAssessmentData] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getAssessmentData = async () => {
            const assessData = await fetchAssessment();
            setAssessmentData(assessData.assessment);
        };
        getAssessmentData();
    }, []);

    // fetch all assessment record
    const fetchAssessment = async () => {
        const res = await fetch("http://localhost:3000/api/assessment");
        const data = await res.json();

        return data;
    };

    return (
        <>
            <div className="flex min-h-full p-0">
                <div>
                    <EmployeeSidebar />
                </div>
                <div
                    className="grid grid-cols-4 gap-1"
                    style={{
                        backgroundColor: "#F5F5F5",
                        width: "100%",
                        height: "100%",
                    }}
                >

                    <div className="col-span-3">
                        <header>
                            <h1>Employee Dashboard</h1>
                        </header>
                        <div className="m-2 grid grid-cols-3 gap-4">
                            {assessmentData.length > 0 ? (
                                <HalfDoughnutChart
                                    headtitle={"Depression"}
                                    levelText={
                                        assessmentData[assessmentData.length - 1]
                                            .depressionLevel
                                    }
                                    levelNum={
                                        assessmentData[assessmentData.length - 1]
                                            .depressionPercent
                                    }
                                    levelPercent={
                                        (assessmentData[assessmentData.length - 1]
                                            .depressionPercent *
                                            100) /
                                        27
                                    }
                                />
                            ) : (
                                <NoResultChart mainTitle={"Depression"} />
                            )}
                            {assessmentData.length > 0 ? (
                                <HalfDoughnutChart
                                    headtitle={"Anxiety"}
                                    levelText={
                                        assessmentData[assessmentData.length - 1]
                                            .anxietyLevel
                                    }
                                    levelNum={
                                        assessmentData[assessmentData.length - 1]
                                            .anxietyPercent
                                    }
                                    levelPercent={
                                        (assessmentData[assessmentData.length - 1]
                                            .anxietyPercent *
                                            100) /
                                        21
                                    }
                                />
                            ) : (
                                <NoResultChart mainTitle={"Anxiety"} />
                            )}
                            {assessmentData.length > 0 ? (
                                <HalfDoughnutChart
                                    headtitle={"Burnout"}
                                    levelText={
                                        assessmentData[assessmentData.length - 1]
                                            .burnoutLevel
                                    }
                                    levelNum={
                                        assessmentData[assessmentData.length - 1]
                                            .burnoutPercent
                                    }
                                    levelPercent={
                                        (assessmentData[assessmentData.length - 1]
                                            .burnoutPercent *
                                            100) /
                                        75
                                    }
                                />
                            ) : (
                                <NoResultChart mainTitle={"Burnout"} />
                            )}
                        </div>

                        <div className="m-2 rounded-lg bg-white p-5">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <h2>Your Assessment History</h2>
                                <a href="#">View all</a>
                            </div>
                            {assessmentData.length > 0 ? (
                                <AssessmentHistory assessment={assessmentData} />
                            ) : (
                                <NoAssessResult />
                            )}
                        </div>

                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <h2>Education</h2>
                                <a href="#">View all</a>
                            </div>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <DoughnutChart
                                    healthPercent={35}
                                    categoryTitle={"All"}
                                    percentCompleted={"35%"}
                                />
                                <DoughnutChart
                                    healthPercent={87}
                                    categoryTitle={"Resource"}
                                    percentCompleted={"87%"}
                                />
                                <DoughnutChart
                                    healthPercent={50}
                                    categoryTitle={"Knowledge"}
                                    percentCompleted={"50%"}
                                />
                                <DoughnutChart
                                    healthPercent={65}
                                    categoryTitle={"Maintenance"}
                                    percentCompleted={"65%"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid-row-3 grid">
                        <div className="col-span-2 row-span-2">
                            {assessmentData.length > 0 ? (
                                <PersonalityType />
                            ) : (
                                <NoPersonalityResult />
                            )}
                        </div>
                        <div className="col-span-2">
                            <MoodSelector />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
