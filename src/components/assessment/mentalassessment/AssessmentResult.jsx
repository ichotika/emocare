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

    const [assessmentDataArry, setAssessmentDataArry] = useState([]);

    useEffect(() => {
        if (user) {
            const getAssessmentResult = async () => {
                // console.log("getAssessmentResult function is working")
                const response = await fetch(`/api/assessment?search=${user.id}`);
                const data = await response.json();
                // console.log("this is the assessment data array", data.assessment);

                const filteredArry = data.assessment.filter(item => 
                    item.assessmentType === assessType
                )
                // console.log(filteredArry);

                setAssessmentDataArry(filteredArry);

            };
            getAssessmentResult();
        }
    }, [user])
    // console.log("get assessmentRecord only depression type", assessmentDataArry.length > 0 ? assessmentDataArry : "loading");

    const latestAssessRecord = assessmentDataArry[assessmentDataArry.length -1];
    // console.log("this is the latestassessrecord", latestAssessRecord)


    return (
        <>
        <div className="flex">
            {/* {assessmentDataArry && Object.keys(assessmentDataArry).length > 0 && (<HalfDoughnutChart */}
            {latestAssessRecord && (<HalfDoughnutChart
                headtitle={assessType}
                levelText={latestAssessRecord.level}
                levelNum={latestAssessRecord.score}
                levelPercent={(latestAssessRecord.score * 100) /27}
            />)}

            {latestAssessRecord && 
            <h2>Your {assessType} score is {latestAssessRecord.score} , {latestAssessRecord.level} </h2>
            }
        </div>
        </>
    );
}

export default AssessmentResult;