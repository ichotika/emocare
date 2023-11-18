"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Doughnut } from "react-chartjs-2";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import Link from "next/link";

const scoreRange = [
    [
        { range: "0-4", severity: "None-minimal", action: "Patient may not need depression treatment." },
        { range: "5-9", severity: "Mild", action: "Use clinical judgment about treatment, based on patients duration of symptoms	and functional impairment." },
        { range: "10-14", severity: "Moderate", action: "Use clinical judgment about treatment, based on patients duration of symptoms and functional impairment." },
        { range: "15-19", severity: "Moderate Severe", action: "Treat using antidepressants, psychotherapy or a combination of treatment." },
        { range: "20-27", severity: "Severe", action: "Treat using antidepressants with or without psychotherapy." }
    ],
    [
        { range: "0-4", severity: "None-minimal", action: "No follow-up is warranted at this time." },
        { range: "5-9", severity: "Mild", action: "Repeat administration of the GAD-7 every 4 weeks to monitor symptoms. Follow up to determine if current symptoms warrant a referral to a mental health professional." },
        { range: "10-14", severity: "Moderate", action: "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended." },
        { range: "20-27", severity: "Severe", action: "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended." }
    ],
    [
        { range: "15-18", severity: "No Sign", action: "No sign of burnout here." },
        { range: "19-32", severity: "Little Sign", action: "Little sign of burnout here, unless some factors are particularly severe." },
        { range: "33-49", severity: "Be careful", action: "Be careful - you may be at risk of burnout, particularly if several scores are high." },
        { range: "50-59", severity: "You are at severe risk of burnout - do something about this urgently." },
        { range: "60-75", severity: "Very severe risk", action: "You are at very severe risk of burnout - do something about this urgently." }
    ]
]

console.log(scoreRange[0][0].range)




const AssessmentResult = () => {
    const { user } = useUser();
    // console.log(user);
    const router = useRouter();
    const pathname = usePathname();
    // console.log(pathname);
    const splitURL = pathname.split("/");
    // console.log(splitURL);
    const assessType = splitURL[splitURL.length - 2];
    console.log(assessType);

    const [assessmentDataArry, setAssessmentDataArry] = useState([]);

    useEffect(() => {
        if (user) {
            const getAssessmentResult = async () => {
                // console.log("getAssessmentResult function is working")
                const response = await fetch(
                    `/api/assessment?search=${user.id}`
                );
                const data = await response.json();
                // console.log("this is the assessment data array", data.assessment);

                const filteredArry = await data.assessment.filter(
                    (item) => item.assessmentType === assessType
                );
                // console.log(filteredArry);

                setAssessmentDataArry(filteredArry);
            };
            getAssessmentResult();
        }
    }, [user]);
    // console.log("get assessmentRecord only depression type", assessmentDataArry.length > 0 ? assessmentDataArry : "loading");

    const latestAssessRecord =
        assessmentDataArry[assessmentDataArry.length - 1];
    // console.log("this is the latestassessrecord", latestAssessRecord);

    return (
        <>
            <div className="flex flex-col gap-">
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-[40%_60%] gap-x-10 rounded-lg bg-g-white-1 p-6 shadow">
                        {latestAssessRecord && assessType === "depression" && (
                            <HalfDoughnutChart
                                headtitle=""
                                levelText={latestAssessRecord.level}
                                levelNum={latestAssessRecord.score}
                                levelPercent={(latestAssessRecord.score * 100) / 27}
                                percentColor={"#FFC700"}
                            />
                        )}
                        {latestAssessRecord && assessType === "anxiety" && (
                            <HalfDoughnutChart
                                headtitle={assessType}
                                levelText={latestAssessRecord.level}
                                levelNum={latestAssessRecord.score}
                                levelPercent={(latestAssessRecord.score * 100) / 21}
                                percentColor={"#0ECD9E"}
                            />
                        )}
                        {latestAssessRecord && assessType === "burnout" && (
                            <HalfDoughnutChart
                                headtitle={assessType}
                                levelText={latestAssessRecord.level}
                                levelNum={latestAssessRecord.score}
                                levelPercent={(latestAssessRecord.score * 100) / 75}
                                percentColor={"#FF8C49"}
                            />
                        )}
                        {latestAssessRecord && (
                            <div className="flex flex-col justify-center gap-6">
                                <h2 className="text-b-3xl font-bold leading-[48px]">{`Your ${assessType} score is ${latestAssessRecord.score} ,${latestAssessRecord.level} `}</h2>
                                <p className="text-b-lg">
                                    {latestAssessRecord.levelDescription}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="flex">
                        <table className="w-full table-fixed ">
                            <thead>
                                <tr>
                                    <th colSpan={1} className="text-left text-b-sm leading-5 p-3">Score</th>
                                    <th colSpan={1} className="text-left text-b-sm leading-5 p-3">{`${assessType} Severity`}</th>
                                    <th colSpan={4} className="text-left text-b-sm leading-5 p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assessType === "depression" && (
                                    scoreRange[0].map(
                                        (obj, index) => (
                                            <tr>
                                                <th colSpan={1} className="text-left text-b-sm leading-5 p-3">{obj.range}</th>
                                                <th colSpan={1} className="text-left text-b-sm leading-5 p-3">{obj.severity}</th>
                                                <th colSpan={4} className="text-left text-b-sm leading-5 p-3">{obj.action}</th>
                                            </tr>
                                        )
                                    )
                                )}
                                {assessType === "anxiety" && (
                                    scoreRange[1].map(
                                        (obj, index) => (
                                            <tr>
                                                <th colSpan={1}>{obj.range}</th>
                                                <th colSpan={1}>{obj.severity}</th>
                                                <th colSpan={4}>{obj.action}</th>
                                            </tr>
                                        )
                                    )
                                )}
                                {assessType === "burnout" && (
                                    scoreRange[2].map(
                                        (obj, index) => (
                                            <tr>
                                                <th colSpan={1}>{obj.range}</th>
                                                <th colSpan={1}>{obj.severity}</th>
                                                <th colSpan={4}>{obj.action}</th>
                                            </tr>
                                        )
                                    )
                                )}
                            </tbody>
                        </table>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 flex justify-end">
                    <Link className="bg-blue-700 text-white rounded-lg p-2" href={"/employees/assessment"}>Take other assessment</Link>
                </div>
            </div>
        </>
    );
};

export default AssessmentResult;
