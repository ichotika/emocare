"use client";
import { useState, useEffect } from "react";
// import Header from "@/components/organizations/Header";
import AssessmentHistory from "@/components/employees/AssessmentHistory";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import DoughnutChart from "@/components/employees/DoughnutChart";
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

    const [notification, setNotification] = useState("");

    // current logged in user
    const { user } = useUser();
    const currentUserEmail = user ? user.emailAddresses[0].emailAddress : null;
    const currentUserId = user ? user.id : null;
    const currentDate = new Date().getMonth();

    console.log("cur", currentUserId)

    useEffect(() => {
        const getAssessmentData = async () => {
            // Mental assesment data
            console.log("asess data", user?.id, currentUserId)
            const assessData = await fetchAssessment();
            const userData = await (currentUserEmail
                ? assessData.filter((user) => user.emailID === currentUserEmail)
                : []);
            const sortedUserData = await userData.sort(
                (a, b) => new Date(b.assessDate) - new Date(a.assessDate)
            );
            setAssessmentData(sortedUserData);

            // checking if there are any assessments for the current month
            const dateCheck =
                sortedUserData.length > 0
                    ? sortedUserData.filter(
                          (user) =>
                              new Date(user.assessDate).getMonth() ===
                              currentDate
                      )
                    : [];

            // fetching data for each category
            setDeprData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) =>
                          d.hasOwnProperty("depressionLevel")
                      )
                    : 0
            );
            setAnxietyData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.hasOwnProperty("anxietyLevel"))
                    : 0
            );
            setBurnoutData(
                dateCheck.length > 0
                    ? dateCheck.filter((d) => d.hasOwnProperty("burnoutLevel"))
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


            const notiData = await fetchNoti();
            console.log("notiDatttaa",notiData,  user?.id, currentUserId)
            const filteredNoti = await (currentUserId
                ? notiData.filter(
                    noti => noti.userid === user?.id && noti.isRead === false)
                : []);

            // await notiData.filter(
            //     noti => noti.userid === user?.id && noti.isRead === false
            // );
           
            setNotification(filteredNoti);


            // const userData = await (currentUserEmail
            //     ? assessData.filter((user) => user.emailID === currentUserEmail)
            //     : []);

        };
        getAssessmentData();
    }, [currentDate, currentUserEmail, currentUserId]);

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
    const fetchNoti = async (id) => {
        const res = await fetch("/api/notification/employee");
        const data = await res.json();
        return data.notiEmp;
    };

    // useEffect(() => {
    //     const getNoti = async () => {
    //         const notiData = await fetchNoti();
    //         console.log("notiDatttaa",notiData)
    //         const filteredNoti = await (currentUserId
    //             ? notiData.filter(
    //                 noti => noti.userid === user?.id && noti.isRead === false)
    //             : []);

    //         // await notiData.filter(
    //         //     noti => noti.userid === user?.id && noti.isRead === false
    //         // );
    //         console.log("testttttt",currentUserId)
    //         console.log("filteredNoti",filteredNoti)
    //         setNotification(filteredNoti);
    //     }
    //     getNoti()
    // } , [])

    
    // const assessData = await fetchAssessment();
    //         const userData = await (currentUserId
    //             ? assessData.filter((user) => user.userId === currentUserId)
    //             : []);
    //         const sortedUserData = await userData.sort(
    //             (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    //         );
    //         setAssessmentData(sortedUserData);
  

    return (
        <div>
            <Header  headertext={"employee"} notification={notification} />
    
        <div className="grid grid-cols-4 gap-1 bg-slate-200">
            
            <div className="col-span-4">
                <h1>Employee Dashboard</h1>
            </div>
            <div className="col-span-3">
                <div className="m-2 grid grid-cols-3 gap-4">
                    {deprData.length > 0 ? (
                        <HalfDoughnutChart
                            headtitle={"Depression"}
                            levelText={deprData[0].depressionLevel}
                            levelNum={deprData[0].depressionPercent}
                            levelPercent={
                                (deprData[0].depressionPercent * 100) / 27
                            }
                        />
                    ) : (
                        <>
                            <NoResultChart
                                mainTitle={"Depression"}
                                link="/employees/assessment/depression"
                            />
                        </>
                    )}
                    {anxietyData.length > 0 ? (
                        <HalfDoughnutChart
                            headtitle={"Anxiety"}
                            levelText={anxietyData[0].anxietyLevel}
                            levelNum={anxietyData[0].anxietyPercent}
                            levelPercent={
                                (anxietyData[0].anxietyPercent * 100) / 21
                            }
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
                            levelText={burnoutData[0].burnoutLevel}
                            levelNum={burnoutData[0].burnoutPercent}
                            levelPercent={
                                (burnoutData[0].burnoutPercent * 100) / 75
                            }
                        />
                    ) : (
                        <NoResultChart
                            mainTitle={"Burnout"}
                            link="/employees/assessment/burnout"
                        />
                    )}
                </div>

                <div className="m-2 rounded-lg bg-white p-2">
                    <div className="flex justify-between">
                        <h2 className="pb-2 font-bold">
                            Your Assessment History
                        </h2>
                        <button onClick={() => setPopup(true)}>View all</button>
                    </div>
                    {assessmentData.length > 0 ? (
                        <AssessmentHistory
                            assessment={assessmentData.slice(0, 6)}
                        />
                    ) : (
                        <NoAssessResult />
                    )}
                </div>

                <div className="m-2 rounded-lg bg-white p-2">
                    <div className="flex justify-between pb-4">
                        <h2 className="font-bold">Education</h2>
                        <Link href={`/employees/education`}>View all</Link>
                    </div>
                    <EducationProgress currentUser={currentUserId} />
                </div>
            </div>
            <div>
                <PersonalityType mypersonality={recentPersonalityType} />
            </div>
            <PopUpAssessmentHistory
                isVisible={popup}
                onClose={() => setPopup(false)}
                assessment={assessmentData}
            />
        </div>
        </div>
    );
}
