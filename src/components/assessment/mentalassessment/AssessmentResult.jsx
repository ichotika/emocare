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
    // console.log("this is the latestassessrecord", latestAssessRecord);

    return (
        <>
            {/* <div className=""> */}
            <div className="w-full flex flex-col gap-10 xl:gap-6">
                {/* <div className="grid w-full grid-cols-[40%_60%] gap-x-10 self-stretch rounded-lg bg-g-white-1 px-6 shadow"> */}
                <div className="grid grid-cols-[40%_54%] relative gap-10 xl:gap-5 box-border grow xl:flex xl:flex-col rounded-lg xl:rounded-none bg-g-white-1 xl:bg-p-blue-6 p-6 xl:p-0 xl:pt-6 shadow xl:px-0 xl:shadow-none text-left">
                    {latestAssessRecord && assessType === "depression" && (
                        <>
                            <div className="flex justify-center items-end grow">
                                <HalfDoughnutChart
                                    levelText={latestAssessRecord.level}
                                    levelNum={latestAssessRecord.score}
                                    levelPercent={(latestAssessRecord.score * 100) / 27}
                                    assessType={assessType}
                                    scaling={true}
                                    className="justify-self-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-6 pr-10 xl:pr-0 xl:gap-0">
                                <h2 className="text-b-3xl font-bold font-manrope leading-[48px] xl:text-b-lg">{`Your ${assessType} score is ${latestAssessRecord.score}, ${latestAssessRecord.level} `}</h2>
                                <p className="text-b-lg xl:text-b-sm">
                                    {latestAssessRecord.levelDescription}
                                </p>
                            </div>
                        </>
                    )}
                    {latestAssessRecord && assessType === "anxiety" && (
                        <>
                            <div className="flex justify-center items-end grow">
                                <HalfDoughnutChart
                                    headtitle=""
                                    levelText={latestAssessRecord.level}
                                    levelNum={latestAssessRecord.score}
                                    levelPercent={(latestAssessRecord.score * 100) / 21}
                                    assessType={assessType}
                                    scaling={true}
                                    className="justify-self-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-6 pr-10 xl:pr-0 xl:gap-0">
                                <h2 className="text-b-3xl font-bold font-manrope leading-[48px] xl:text-b-lg">{`Your ${assessType} score is ${latestAssessRecord.score}, ${latestAssessRecord.level} `}</h2>
                                <p className="text-b-lg xl:text-b-sm">
                                    {latestAssessRecord.levelDescription}
                                </p>
                            </div>
                        </>
                    )}
                    {latestAssessRecord && assessType === "burnout" && (
                        <>
                            <div className="flex justify-center items-end grow">
                                <HalfDoughnutChart
                                    headtitle=""
                                    levelText={latestAssessRecord.level}
                                    levelNum={latestAssessRecord.score}
                                    levelPercent={(latestAssessRecord.score * 100) / 75}
                                    assessType={assessType}
                                    scaling={true}
                                    className="justify-self-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-6 pr-10 xl:pr-0 xl:gap-0">
                                <h2 className="text-b-3xl font-bold font-manrope leading-[48px] xl:text-b-lg">{`Your ${assessType} score is ${latestAssessRecord.score} ,${latestAssessRecord.level} `}</h2>
                                <p className="text-b-lg xl:text-b-sm">
                                    {latestAssessRecord.levelDescription}
                                </p>
                            </div>
                        </>
                    )}
                </div>

                {/* table */}
                {/* <div className="table-container"> */}
                <div className="overflow-x-scroll w-full box-border overflow-y-hidden rounded-lg xl:rounded-none border xl:border-g-white-1 border-g-gray-2">
                    <table className="border-0 w-full xl:min-w-[1024px] table-auto">
                        <thead className="border-0  bg-p-blue-5 xl:rounded-none xl:border-y xl:border-g-white-1 xl:bg-p-blue-5">
                            <tr className="">
                                <th
                                    className="border-0 border-b rounded-lg border-g-gray-2 xl:border-g-white-1 px-3 py-4 text-center text-b-sm leading-5 w-[14%]"
                                >
                                    Score
                                </th>
                                <th
                                    className="border-0 border-b rounded-lg border-g-gray-2 xl:border-g-white-1 px-3 py-4 text-center text-b-sm leading-5 w-[16%]"
                                >{`${assessType[0].toUpperCase() + assessType.slice(1)} severity`}</th>
                                <th
                                    className="border-0 border-b border-g-gray-2 xl:border-g-white-1 px-3 py-4 text-center text-b-sm leading-5 w-[70%]"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {assessType === "depression" &&
                                scoreRange[0].map((obj, index, array) => (
                                    <tr
                                        key={index}
                                        className={`border-g-gray-2 xl:border-g-white-1  bg-g-white-1
                                                ${index === array.length - 1
                                                ? "border-0"
                                                : "border-0 border-b "}`}
                                    >
                                        <td
                                            className="p-3 text-center  text-b-sm font-normal leading-5"
                                        >
                                            {obj.range}
                                        </td>
                                        <td
                                            className="p-3 text-center text-b-sm font-normal leading-5"
                                        >
                                            {obj.level}
                                        </td>
                                        <td
                                            className="p-3 text-left text-b-sm font-normal leading-5"
                                        >
                                            {obj.action}
                                        </td>
                                    </tr>
                                ))}
                            {assessType === "anxiety" &&
                                scoreRange[1].map((obj, index, array) => (
                                    <tr
                                        key={index}
                                        className={`border-g-gray-2 xl:border-g-white-1  bg-g-white-1
                                                ${index === array.length - 1
                                                ? "border-0"
                                                : "border-0 border-b "}`}
                                    >
                                        <td
                                            className="p-3 text-center  text-b-sm font-normal leading-5"
                                        >
                                            {obj.range}
                                        </td>
                                        <td
                                            className="p-3 text-center text-b-sm font-normal leading-5"
                                        >
                                            {obj.level}
                                        </td>
                                        <td
                                            className="p-3 text-left text-b-sm font-normal leading-5"
                                        >
                                            {obj.action}
                                        </td>
                                    </tr>
                                ))}
                            {assessType === "burnout" &&
                                scoreRange[2].map((obj, index, array) => (
                                    <tr
                                        key={index}
                                        className={`border-g-gray-2 xl:border-g-white-1  bg-g-white-1
                                                ${index === array.length - 1
                                                ? "border-0"
                                                : "border-0 border-b "}`}
                                    >
                                        <td
                                            className="p-3 text-center  text-b-sm font-normal leading-5"
                                        >
                                            {obj.range}
                                        </td>
                                        <td
                                            className="p-3 text-center text-b-sm font-normal leading-5"
                                        >
                                            {obj.level}
                                        </td>
                                        <td
                                            className="p-3 text-left text-b-sm font-normal leading-5"
                                        >
                                            {obj.action}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                {/* </div> */}

                {latestAssessRecord &&
                    latestAssessRecord.level ===
                    (scoreRange[0][scoreRange[0].length - 1]?.level ||
                        scoreRange[0][scoreRange[0].length - 2]?.level ||
                        scoreRange[1][scoreRange[1].length - 1]?.level ||
                        scoreRange[2][scoreRange[2].length - 1]?.level ||
                        scoreRange[2][scoreRange[2].length - 2]?.level) ? (
                    <div className="flex gap-4 xl:p-1.5 border-l-[3px] border-l-o-error-1 bg-[#FED6D7]">
                        <div className="py-[14px] flex self-center">
                            <Image
                                src={alertLogo}
                                alt="alert Logo"
                                className="ml-4"
                                width={24}
                                height={24}
                            ></Image>
                            <p className="font-bold">Warning</p>
                        </div>
                        <p className="self-center xl:pl-6 xl:text-b-sm">It seems
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
            </div >
            {/* </div> */}

            <div div className="mt-20 xl:mt-5 flex text-center justify-end sm:justify-center " >
                <Link
                    className="rounded-lg block bg-blue-700 w-96 sm:w-full xl:font-bold font-semibold p-2 xl:px-3 xl:py-4 text-white"
                    href={"/employees/assessment"}
                >
                    Take other assessment
                </Link>
            </div >
        </>
    );
};

export default AssessmentResult;
