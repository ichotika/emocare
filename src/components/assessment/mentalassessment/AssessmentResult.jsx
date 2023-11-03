'use client'
import { useState, useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { Doughnut } from "react-chartjs-2";
import HalfDoughnutChart from '@/components/employees/HalfDoughnutChart';

const AssessmentResult = () => {

    const { user } = useUser();
    // console.log(user);
    const router = useRouter();
    const pathname = usePathname();
    // console.log(pathname);
    const splitURL = pathname.split('/');
    // console.log(splitURL);
    const assessType = splitURL[splitURL.length - 2];
    // console.log(assessType);

    const [assessmentData, setAssessmentData] = useState([]);

    useEffect(() => {
        if (user) {
            const getAssessmentResult = async () => {
                const response = await fetch(`/api/questionnaires/${assessType}/response?search=${user.id}`);
                const data = await response.json();
                // console.log("this is the assessment data", data);
                setAssessmentData(data[0]);
                // console.log("set Assessment",assessmentData);
            };
            getAssessmentResult();
            // console.log("this is the assessment Data", typeof(assessmentData));
            // console.log(assessmentData);
        }
    }, [user])

    return (
        <>
        <div className="flex">

            {assessmentData && Object.keys(assessmentData).length > 0 && (<HalfDoughnutChart
                headtitle={assessType}
                levelText={assessmentData.level}
                levelNum={assessmentData.score}
                levelPercent={(assessmentData.score * 100) /27}
            />)}

            <h2>Your {assessType} score is {assessmentData.score} , {assessmentData.level} </h2>
        </div>
        </>
    );
}

export default AssessmentResult;