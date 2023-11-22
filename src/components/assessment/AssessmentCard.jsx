"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AssessmentCard = ({ title, questions, duration, description, link, src, type }) => {

    const router = useRouter();

    const { user } = useUser();
    // console.log(user);

    const assessType = type;
    // console.log("coming from type property of test component", assessType);

    const currentYear = new Date().getYear();
    const currentMonth = new Date().getMonth() + 1;

    const [latestAssessResult, setLatestAssessResult] = useState([]);

    // get current month data.
    useEffect(() => {
        const getLatestAssessmentResult = async () => {
            try {
                if (user) {
                    // console.log("getAssessmentResult function is working")

                    const response = await fetch(`/api/assessment?search=${user.id}`);
                    const data = await response.json();
                    // console.log("this is the assessment data array", data.assessment[0].createdAt);

                    const currentMonthData = data.assessment
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .filter((assessmentData) => {
                            return new Date (assessmentData.createdAt).getMonth() + 1 === currentMonth && new Date(assessmentData.createdAt).getYear() === currentYear
                        })
                    setLatestAssessResult(currentMonthData)
                };
            } catch (error) {
                console.error("Error fetching assessment data:", error);
            }
        }
        getLatestAssessmentResult();
    }, [user]);

    const hasResult = latestAssessResult.length > 0 && latestAssessResult.some((item)=> item.assessmentType.toLowerCase() === assessType)

    // const hasAssessType = !latestAssessResult.map((item)=> item.assessmentType === assessType)
    // console.log("this is the latestAssessResult => ",latestAssessResult);
    // console.log(latestAssessResult.some((item)=> item.assessmentType === assessType))
    // console.log(latestAssessResult.length > 0 && latestAssessResult.some((item)=> item.assessmentType === assessType));



    return (
        <div className="card-container flex flex-col grow">
            <div className="card flex flex-col grow bg-white border-1 rounded-2xl shadow-sm">
                <Image src={src} alt="take a depression assessment"
                    className="flex flex-col w-full h-fit rounded-t-2xl"></Image>
                <div className="description flex grow">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col px-4 py-6">
                            <p className="text-2xl font-bold">{title}</p>
                            <p className="qustions mt-4 leading-6"><span className="font-bold">Questions: </span>{questions}</p>
                            <p className="duration mb-6 leading-6"><span className="font-bold">Duration:</span> {duration} minutes</p>
                            <p className="description leading-6">{description}</p>
                        </div>
                        <div className="flex flex-col justify-center p-4">
                            <button 
                                className={`${hasResult ? "bg-p-blue-5 text-p-blue-1" : "bg-blue-500 text-g-white-1"}  font-bold py-3 px-2 rounded-lg grow`}
                                disabled={hasResult}
                                onClick={() => router.push(`/employees/assessment/${assessType}`)}
                            >
                                    Take Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentCard;