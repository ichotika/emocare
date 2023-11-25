"use client";
import { useState, useEffect } from "react";
import AssessmentHistory from "@/components/employees/AssessmentHistory";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import PersonalityType from "@/components/employees/PersonalityType";
import NoResultChart from "@/components/employees/NoResultChart";
import NoAssessResult from "@/components/employees/NoAssessResult";
import EducationProgress from "@/components/educations/EducationProgress";
import PopUpAssessmentHistory from "@/components/employees/PopUpAssessmentHistory";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Header from "@/components/employees/Header";
import Chatbot from "@/components/employees/Chatbot";
import AssessmentButton from "@/components/employees/AssessmentButton";

export default function Home() {
    const [assessmentData, setAssessmentData] = useState([]);
    const [recentPersonalityType, setRecentPersonalityType] = useState([]);
    const [anxietyData, setAnxietyData] = useState("");
    const [burnoutData, setBurnoutData] = useState("");
    const [deprData, setDeprData] = useState("");
    const [popup, setPopup] = useState(false);
    // current logged in user
    const { user } = useUser();
    const currentUserId = user ? user.id : null;
    const currentDate = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const userName = user ? user.fullName : null;

    useEffect(() => {
        const getAssessmentData = async () => {
            // Mental assesment data

            const assessData = await fetchAssessment();
            const userData = await (currentUserId
                ? assessData.filter((user) => user.userId === currentUserId)
                : []);
            const sortedUserData = await userData.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setAssessmentData(sortedUserData);
            // checking if there are any assessments for the current month
            const dateCheck =
                sortedUserData.length > 0
                    ? sortedUserData.filter(
                          (user) =>
                              new Date(user.createdAt).getMonth() ===
                                  currentDate &&
                              new Date(user.createdAt).getFullYear() ===
                                  currentYear
                      )
                    : [];

            // fetching data for each category
            setDeprData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "depression")
                    : 0
            );
            setAnxietyData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "Anxiety")
                    : 0
            );
            setBurnoutData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "burnout")
                    : 0
            );

            // Personality assessment data
            const personalityAssess = await fetchPersonality();
            const userPersonality = await (currentUserId
                ? personalityAssess.filter(
                      (user) => user.userId === currentUserId
                  )
                : []);
            const sortedPersonality = await (userPersonality.length > 0
                ? userPersonality.sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )
                : []);
            setRecentPersonalityType(
                sortedPersonality.length > 0
                    ? sortedPersonality[0].personalityType
                    : ""
            );
        };
        getAssessmentData();
    }, [currentUserId, currentDate, currentYear]);

    // fetch all assessment record
    const fetchAssessment = async () => {
        const res = await fetch("/api/assessment");
        const data = await res.json();
        return data.assessment;
    };

    // fetch personality
    const fetchPersonality = async () => {
        const res = await fetch("/api/personality");
        const data = await res.json();
        return data.personality;
    };

    // fetch noti

    return (
        <>
            {/* <Header headertext={"Employee"} isHidden={true} /> */}
            <div className="-mt-4 flex flex-col items-stretch pl-1 xl:items-center">
                <div className="flex w-full grow flex-col">
                    <p
                        style={{ marginBottom: "-10px" }}
                        className="text-b-lg font-bold"
                    >
                        WELCOME
                    </p>
                    <div>
                        {userName ? (
                            <Header
                                headertext={userName}
                                marginTB="mb-0 mt-0"
                                isHidden={true}
                            />
                        ) : (
                            <Header
                                headertext={"User"}
                                marginTB="mb-0 mt-0"
                                isHidden={true}
                            />
                        )}
                    </div>
                </div>
                <div className="grid-row grid-height mt-2 grid grid-cols-4 gap-6 xl:flex xl:flex-col">
                    <div className="flex h-[237px] w-[100%] grow flex-col items-center justify-between rounded-lg bg-g-white-1 p-2 shadow">
                        {deprData.length > 0 ? (
                            <>
                                <HalfDoughnutChart
                                    headtitle={"Depression"}
                                    levelText={deprData[0].level}
                                    levelNum={deprData[0].score}
                                    levelPercent={
                                        (deprData[0].score * 100) / 27
                                    }
                                    percentColor={"#FFC700"}
                                />
                                <AssessmentButton
                                    link="/employees/assessment/depression"
                                    btnDisabled={
                                        deprData.length > 0 ? true : false
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <NoResultChart
                                    mainTitle={"Depression"}
                                    link="/employees/assessment/depression"
                                />
                            </>
                        )}
                    </div>
                    <div className="flex h-[237px] w-[100%] grow flex-col items-center justify-between rounded-lg bg-g-white-1 p-2 shadow">
                        {anxietyData.length > 0 ? (
                            <>
                                <HalfDoughnutChart
                                    headtitle={"Anxiety"}
                                    levelText={anxietyData[0].level}
                                    levelNum={anxietyData[0].score}
                                    levelPercent={
                                        (anxietyData[0].score * 100) / 21
                                    }
                                    percentColor={"#0ECD9E"}
                                />
                                <AssessmentButton
                                    link="/employees/assessment/anxiety"
                                    btnDisabled={
                                        anxietyData.length > 0 ? true : false
                                    }
                                />
                            </>
                        ) : (
                            <NoResultChart
                                mainTitle={"Anxiety"}
                                link="/employees/assessment/anxiety"
                            />
                        )}
                    </div>
                    <div className="flex h-[237px] w-[100%] grow flex-col items-center justify-between rounded-lg bg-g-white-1 p-2 shadow">
                        {burnoutData.length > 0 ? (
                            <>
                                <HalfDoughnutChart
                                    headtitle={"Burnout"}
                                    levelText={burnoutData[0].level}
                                    levelNum={burnoutData[0].score}
                                    levelPercent={
                                        (burnoutData[0].score * 100) / 75
                                    }
                                    percentColor={"#FF8C49"}
                                />
                                <AssessmentButton
                                    link="/employees/assessment/burnout"
                                    btnDisabled={
                                        burnoutData.length > 0 ? true : false
                                    }
                                />
                            </>
                        ) : (
                            <NoResultChart
                                mainTitle={"Burnout"}
                                link="/employees/assessment/burnout"
                            />
                        )}
                    </div>

                    <div className="row-span-2">
                        <PersonalityType
                            mypersonality={recentPersonalityType}
                        />
                    </div>

                    <div className="col-span-3 rounded-lg bg-white p-2">
                        <div className="flex justify-between">
                            <p className="pb-2 text-b-lg font-bold">
                                Your Assessment History
                            </p>
                            <button onClick={() => setPopup(true)}>
                                View all
                            </button>
                        </div>
                        {assessmentData.length > 0 ? (
                            <AssessmentHistory assessment={assessmentData} />
                        ) : (
                            <NoAssessResult />
                        )}
                    </div>

                    <div className="col-span-3 max-h-[350px] rounded-lg bg-white p-2 xl:col-span-full">
                        <div className="flex justify-between pb-4">
                            <p className="text-b-lg font-bold">
                                Education Progress
                            </p>
                            <Link href={`/employees/education`}>View all</Link>
                        </div>
                        {/* <EducationProgress currentUser={currentUserId} /> */}

                        <EducationProgress
                            currentUser={currentUserId}
                            pageTitle={"employee"}
                        />
                    </div>

                    <div className="z-0 max-h-[350px] rounded-lg bg-white p-2 xl:hidden xl:w-0">
                        <Chatbot mypersonality={recentPersonalityType} />
                    </div>
                </div>

                <PopUpAssessmentHistory
                    isVisible={popup}
                    onClose={() => setPopup(false)}
                    assessment={assessmentData}
                />
            </div>
        </>
    );
}
