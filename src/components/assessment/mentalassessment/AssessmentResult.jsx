"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import Link from "next/link";
import Image from "next/image";

import alertLogo from "@/public/assets/organization/badConditionIcon.svg";

const scoreRange = [
    [
        {
            range: "0-4",
            level: "None-minimal",
            action: "Patient may not need depression treatment.",
        },
        {
            range: "5-9",
            level: "Mild",
            action: "Use clinical judgment about treatment, based on patients duration of symptoms and functional impairment.",
        },
        {
            range: "10-14",
            level: "Moderate",
            action: "Use clinical judgment about treatment, based on patients duration of symptoms and functional impairment.",
        },
        {
            range: "15-19",
            level: "Moderate Severe",
            action: "Treat using antidepressants, psychotherapy or a combination of treatment.",
        },
        {
            range: "20-27",
            level: "Severe",
            action: "Treat using antidepressants with or without psychotherapy.",
        },
    ],
    [
        {
            range: "0-4",
            level: "None-minimal",
            action: "No follow-up is warranted at this time.",
        },
        {
            range: "5-9",
            level: "Mild",
            action: "Repeat administration of the GAD-7 every 4 weeks to monitor symptoms. Follow up to determine if current symptoms warrant a referral to a mental health professional.",
        },
        {
            range: "10-14",
            level: "Moderate",
            action: "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended.",
        },
        {
            range: "15-21",
            level: "Severe",
            action: "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended.",
        },
    ],
    [
        {
            range: "15-18",
            level: "No Sign",
            action: "No sign of burnout here.",
        },
        {
            range: "19-32",
            level: "Little Sign",
            action: "Little sign of burnout here, unless some factors are particularly severe.",
        },
        {
            range: "33-49",
            level: "Be careful",
            action: "Be careful - you may be at risk of burnout, particularly if several scores are high.",
        },
        {
            range: "50-59",
            level: "Severe risk",
            action: "You are at severe risk of burnout - do something about this urgently.",
        },
        {
            range: "60-75",
            level: "Very severe risk",
            action: "You are at very severe risk of burnout - do something about this urgently.",
        },
    ],
];
// console.log(scoreRange[0][scoreRange[0].length-1].level,scoreRange[0][scoreRange[0].length-2].level)

const AssessmentResult = () => {
    const { user } = useUser();
    // console.log(user);
    const router = useRouter();
    const pathname = usePathname();
    // console.log(pathname);
    const splitURL = pathname.split("/");
    // console.log(splitURL);
    const assessType = splitURL[splitURL.length - 2];
    // console.log("coming from URL", assessType);

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
                    (item) =>
                        item.assessmentType.toLowerCase() ===
                        assessType.toLowerCase()
                );
                // console.log(filteredArry);

                setAssessmentDataArry(filteredArry);
            };
            getAssessmentResult();
        }
    }, [user, assessType]);
    // console.log("get assessmentRecord only depression type", assessmentDataArry.length > 0 ? assessmentDataArry : "loading");

    const latestAssessRecord =
        assessmentDataArry[assessmentDataArry.length - 1];
    // console.log("this is the latestassessrecord", latestAssessRecord.level);

    return (
        <>
            {/* <div className=""> */}
            <div className="w-full gap-10">
                <div className="grid w-full grid-cols-[40%_60%] gap-x-10 self-stretch rounded-lg bg-g-white-1 px-6 shadow">
                    {latestAssessRecord && assessType === "depression" && (
                        <HalfDoughnutChart
                            headtitle=""
                            levelText={latestAssessRecord.level}
                            levelNum={latestAssessRecord.score}
                            levelPercent={(latestAssessRecord.score * 100) / 27}
                            percentColor={"#FFC700"}
                            className="h-[50%] justify-self-center"
                        />
                    )}
                    {latestAssessRecord && assessType === "anxiety" && (
                        <HalfDoughnutChart
                            headtitle=""
                            levelText={latestAssessRecord.level}
                            levelNum={latestAssessRecord.score}
                            levelPercent={(latestAssessRecord.score * 100) / 21}
                            percentColor={"#0ECD9E"}
                        />
                    )}
                    {latestAssessRecord && assessType === "burnout" && (
                        <HalfDoughnutChart
                            headtitle=""
                            levelText={latestAssessRecord.level}
                            levelNum={latestAssessRecord.score}
                            levelPercent={(latestAssessRecord.score * 100) / 75}
                            percentColor={"#FF8C49"}
                        />
                    )}
                    {latestAssessRecord && (
                        <div className="flex flex-col justify-center gap-6 pr-10">
                            <h2 className="text-b-3xl font-bold leading-[48px]">{`Your ${assessType} score is ${latestAssessRecord.score} ,${latestAssessRecord.level} `}</h2>
                            <p className="text-b-lg">
                                {latestAssessRecord.levelDescription}
                            </p>
                        </div>
                    )}
                </div>
                <div className="block overflow-x-auto overflow-y-hidden rounded-lg">
                    <table className="w-[1024px] border-collapse border-spacing-0 rounded-lg">
                        <thead className="border-collapse rounded-lg border border-g-gray-2 bg-p-blue-5 xl:rounded-none xl:border-x-0 xl:border-y xl:border-g-white-1 xl:bg-p-blue-5 ">
                            <tr className="rounded-lg border-g-gray-2">
                                <th
                                    colSpan={1}
                                    className="rounded-tl-lg border border-r-0 border-g-gray-2 p-3 text-center text-b-sm leading-5"
                                >
                                    Score
                                </th>
                                <th
                                    colSpan={1}
                                    className="border border-x-0 border-g-gray-2 p-3  text-center text-b-sm leading-5"
                                >{`${assessType} severity`}</th>
                                <th
                                    colSpan={4}
                                    className="border border-l-0 border-g-gray-2 p-3  text-center text-b-sm leading-5"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="rounded-b-lg border border-g-gray-2">
                            {assessType === "depression" &&
                                scoreRange[0].map((obj, index) => (
                                    <tr
                                        key={index}
                                        className="border border-g-gray-2 bg-g-white-1"
                                    >
                                        <td
                                            colSpan={1}
                                            className="border border-r-0 border-g-gray-2 p-3 text-center  text-b-sm font-normal leading-5"
                                        >
                                            {obj.range}
                                        </td>
                                        <td
                                            colSpan={1}
                                            className="border border-x-0 border-g-gray-2 p-3 text-center text-b-sm font-normal leading-5"
                                        >
                                            {obj.level}
                                        </td>
                                        <td
                                            colSpan={4}
                                            className="border border-l-0 border-g-gray-2 p-3 text-left text-b-sm font-normal leading-5"
                                        >
                                            {obj.action}
                                        </td>
                                    </tr>
                                ))}
                            {assessType === "anxiety" &&
                                scoreRange[1].map((obj, index) => (
                                    <tr key="index">
                                        <th colSpan={1}>{obj.range}</th>
                                        <th colSpan={1}>{obj.level}</th>
                                        <th colSpan={4}>{obj.action}</th>
                                    </tr>
                                ))}
                            {assessType === "burnout" &&
                                scoreRange[2].map((obj, index) => (
                                    <tr key="index">
                                        <th colSpan={1}>{obj.range}</th>
                                        <th colSpan={1}>{obj.level}</th>
                                        <th colSpan={4}>{obj.action}</th>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                {latestAssessRecord &&
                    latestAssessRecord.level ===
                    (scoreRange[0][scoreRange[0].length - 1]?.level ||
                        scoreRange[0][scoreRange[0].length - 2]?.level ||
                        scoreRange[1][scoreRange[1].length - 1]?.level ||
                        scoreRange[2][scoreRange[2].length - 1]?.level ||
                        scoreRange[2][scoreRange[2].length - 2]?.level) ? (
                    <div className="flex gap-4 border-l-[3px] border-l-o-error-1 bg-o-error-2">
                        <Image
                            src={alertLogo}
                            alt="alert Logo"
                            className="ml-4"
                            width={24}
                            height={24}
                        ></Image>
                        <p className="py-[14px]">
                            <span className="font-bold">Warning. </span>It seems
                            you are struggling with mental health problem. Check
                            out our helpful resources{" "}
                            <Link
                                href={"/employees/education"}
                                className="font-bold underline"
                            >
                                here.
                            </Link>
                        </p>
                    </div>
                ) : null}
            </div>
            {/* </div> */}

            <div className="mt-20 flex justify-end">
                <Link
                    className="rounded-lg bg-blue-700 p-2 text-white"
                    href={"/employees/assessment"}
                >
                    Take other assessment
                </Link>
            </div>
        </>
    );
};

export default AssessmentResult;
