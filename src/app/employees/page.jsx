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

export default function Home() {
    const [assessmentData, setAssessmentData] = useState([]);
    const [recentPersonalityType, setRecentPersonalityType] = useState([]);
    const [anxietyData, setAnxietyData] = useState("");
    const [burnoutData, setBurnoutData] = useState("");
    const [deprData, setDeprData] = useState("");
    const [popup, setPopup] = useState(false);
    const [currentUserId, setUserId] = useState("");

    // current logged in user
    const { user } = useUser();
    const currentUserId = user ? user.id : null;
    const currentDate = new Date().getMonth();

    useEffect(() => {
        const getAssessmentData = async () => {
            // Mental assesment data

            const assessData = await fetchAssessment();
            const userData = await (currentUserId
                ? assessData.filter((user) => user.userId === currentUserId)
                : []);
            const sortedUserData = await userData.sort(
                (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
            );
            setAssessmentData(sortedUserData);
            setUserId(user?.id);
            // checking if there are any assessments for the current month
            const dateCheck =
                sortedUserData.length > 0
                    ? sortedUserData.filter(
                          (user) =>
                              new Date(user.timestamp).getMonth() ===
                              currentDate
                      )
                    : [];

            // fetching data for each category
            setDeprData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "Depression")
                    : 0
            );
            setAnxietyData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "Anxiety")
                    : 0
            );
            setBurnoutData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.assessmentType === "Burn out")
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
    }, [currentDate, currentUserId]);

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

        <div className="bg-slate-200">
            <Header headertext={"Employee"} user={currentUserId} />
            <div>
                <h1 className="font-bold p-2 mx-2">Employee Dashboard</h1>
            </div>
            <div className="sm:flex sm:flex-col grid grid-cols-3">
                <div className="m-4 flex sm:flex-col col-span-2 gap-4">
                    {deprData.length > 0 ? (
                        <HalfDoughnutChart
                            headtitle={"Depression"}
                            levelText={deprData[0].level}
                            levelNum={deprData[0].score}
                            levelPercent={(deprData[0].score * 100) / 27}
                        />
                    ) : (
                        <>
                            <NoResultChart
                                mainTitle={"Anxiety"}
                                link="/employees/assessment/anxiety"
                            />
                        </>
                    )}
                    {anxietyData.length > 0 ? (
                        <HalfDoughnutChart
                            headtitle={"Anxiety"}
                            levelText={anxietyData[0].level}
                            levelNum={anxietyData[0].score}
                            levelPercent={(anxietyData[0].score * 100) / 21}
                        />
                    ) : (
                        <NoResultChart
                            mainTitle={"Anxiety"}
                            link="/employees/assessment/anxiety"
                        />
                    )}
                    {burnoutData.length > 0 ? (
                        <HalfDoughnutChart
                            headtitle={"Burnout"}
                            levelText={burnoutData[0].level}
                            levelNum={burnoutData[0].score}
                            levelPercent={(burnoutData[0].score * 100) / 75}
                        />
                    ) : (
                        <NoResultChart
                            mainTitle={"Burnout"}
                            link="/employees/assessment/burnout"
                        />
                    )}
                </div>

                <div className="m-2 row-span-2">
                    <PersonalityType mypersonality={recentPersonalityType} />
                </div>

                <div className="m-4 col-span-2 rounded-lg bg-white p-2">
                    <div className="flex justify-between">
                        <h2 className="pb-2 font-bold">
                            Your Assessment History
                        </h2>
                        <button onClick={() => setPopup(true)}>View all</button>
                    </div>
                    {assessmentData.length > 0 ? (
                        <AssessmentHistory assessment={assessmentData} />
                    ) : (
                        <NoAssessResult />
                    )}
                </div>

            </div>

            <div className="m-4 rounded-lg bg-white p-2">
                <div className="flex justify-between pb-4">
                    <h2 className="font-bold">Education</h2>
                    <Link href={`/employees/education`}>View all</Link>
                </div>
                <EducationProgress currentUser={currentUserId} />
            </div>
            
            <PopUpAssessmentHistory
                isVisible={popup}
                onClose={() => setPopup(false)}
                assessment={assessmentData}
            />
        </div>
    );
}
