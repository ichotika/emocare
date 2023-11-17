"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 3.9% 50% 11.5% 11.5% 11.5% 11.5%;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    letter-spacing: 0.07px;
    font-weight: 700;
    color: black;
    padding: 1rem 0;
`;

const AnxietyQuestionnaire = () => {
    const { user } = useUser();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const options = [
        { label: "Not At All", value: 0 },
        { label: "Several Days", value: 1 },
        { label: "More than half the day", value: 2 },
        { label: "Nearly everyday", value: 3 },
    ];

    const [value, setValue] = useState({
        q1: -1,
        q2: -1,
        q3: -1,
        q4: -1,
        q5: -1,
        q6: -1,
        q7: -1,
    });

    const handleRadioChange = (event) => {
        setValue({ ...value, [event.target.name]: Number(event.target.value) });
    };

    const totalScore = Object.values(value).reduce((score, total) => {
        if (total !== null) {
            return score + total;
        }

        return "You are missing some questions";
    }, 0);

    const anxietyLevel = [
        {
            alevel: "Non-minimal",
            description: "No follow-up is warranted at this time.",
        },
        {
            alevel: "Mild",
            description:
                "Repeat administration of the GAD-7 every 4 weeks to monitor symptoms. Follow up to determine if current symptoms warrant a referral to a mental health professional.",
        },
        {
            alevel: "Moderate",
            description:
                "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended.",
        },
        {
            alevel: "Severe",
            description:
                "Further assessment (including diagnostic interview and mental status examination) and/or referral to a mental health professional is recommended.",
        },
        {
            alevel: "Error",
            description: "Error"
        }
    ];

    // const [level, setLevel] = useState("")

    const getAnxietyLevel = (totalScore) => {
        const result = {
            alevel: "",
            description: "",
        };

        switch (true) {
            case totalScore <= 4:
                result.alevel = anxietyLevel[0].alevel;
                result.description = anxietyLevel[0].description;
                break;

            case totalScore <= 9:
                result.alevel = anxietyLevel[1].alevel;
                result.description = anxietyLevel[1].description;
                break;

            case totalScore <= 14:
                result.alevel = anxietyLevel[2].alevel;
                result.description = anxietyLevel[2].description;
                break;

            case totalScore >= 21:
                result.alevel = anxietyLevel[3].alevel;
                result.description = anxietyLevel[3].description;
                break;

            default:
                result.alevel = anxietyLevel[4].alevel;
                result.description = anxietyLevel[4].description;
        }
        return result;
    };

    // post data to assessHistory collection in MongoDB.
    const onSubmit = async (data) => {
        // event.preventDefault();
        let i = [];

        async function response() {
            await fetch("/api/assessment", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessmentType: "Anxiety",
                    score: totalScore,
                    level: getAnxietyLevel(totalScore).alevel,
                    levelDescription: getAnxietyLevel(totalScore).description,
                    createdAt: new Date(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    router.push("/employees/assessment/anxiety/anxietyresult");
                })
                .catch((error) => {
                    console.error("Failed to submit data", error);
                });
        }

        for (const eachValue in value) {
            // console.log(eachValue);
            if (value[eachValue] === -1) {
                // console.log(eachValue, value[eachValue]);
                // alert("Please input every button.")
                i.push(eachValue);
            }
        }

        if (i.length === 0) {
            // fetching
            // console.log(response());
            response();
        } else {
            console.error("input has not done", errors);
        }
    };

    const [anxietyQustionnaire, setAnxietyQuestionnaire] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        const fetchAnxietyQuestionnaire = async () => {
            const res = await fetch(
                "http://localhost:3000/api/questionnaires/anxiety"
            );
            const data = await res.json();
            // console.log("Anxiety questionnaire", data);
            setAnxietyQuestionnaire(data);
        };
        fetchAnxietyQuestionnaire();
    }, []);
    // console.log(anxietyQustionnaire.anxietyAssessment)

    return (
        <div className="flex">
            <div>
                <form
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-16"
                >
                    <div className="main-container flex flex-col gap-y-6">
                        <div className="rounded-lg xl:rounded-none">
                            <TableHeader className="bg-p-blue-5 border-g-gray-2 border border-collapse xl:bg-p-blue-5 xl:border-g-white-1 xl:border-x">
                                <div className="px-3">No.</div>
                                <div className="px-3" >Questions</div>
                                {options.map(
                                    (option) => (
                                        <div
                                            className="text-center justify-center px-3"
                                            key={option.label}>{option.label}</div>
                                    )
                                )}
                            </TableHeader>
                            <div className="rounded-b-lg">
                                {anxietyQustionnaire?.anxietyAssessment?.map(
                                    (question, index, array) => (
                                        <div 
                                            className={`text-b-sm leading-5 grid grid-cols-[3.9%_50%_11.5%_11.5%_11.5%_11.5%] border border-collapse border-g-gray-2 xl:block ${index === array.length - 1 ? "rounded-b-lg" : ""}`} 
                                            key={question.No}>
                                                
                                            <div className="py-4 px-3 self-center justify-self-center">{question.No}</div>
                                            <div className="py-4 px-3">
                                                {question.question}
                                            </div>
                                            {options.map((option) => (
                                                <div
                                                    key={
                                                        question.No +
                                                        option.value
                                                    }
                                                    className="text-center py-4 px-3 self-center"
                                                >
                                                    <input
                                                        className="border-p-blue-1 bg-p-blue-1 content-center"
                                                        type="radio"
                                                        {...register(
                                                            `q${question.No}`,
                                                            { required: true }
                                                        )}
                                                        id={`q${question.No}_${option.value}`}
                                                        value={Number(
                                                            option.value
                                                        )}
                                                        onChange={
                                                            handleRadioChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor={`q${question.No}_${option.value}`}
                                                        className="hidden xl:block"
                                                    >
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                            {errors[`q${question.No}`] && (
                                                <div
                                                    className="text-o-error-1 col-start-3 col-span-4 px-3 pb-3 text-center"
                                                >
                                                    This item is mandatory
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <p className="self-center">
                            Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc.
                        </p>
                    </div>
                    <div className="buttons flex justify-end gap-x-3 xl:justify-center xl:gap-x-[13px]">
                        <button className=":py-2.5 rounded-lg border-2 border-g-gray-2 px-20 leading-6 xl:border-p-blue-1 xl:px-9 xl:py-4 xl:leading-4 xl:text-p-blue-1">
                            Save
                        </button>
                        <button
                            // onClick={handleSubmit(onSubmit)}
                            className="rounded-lg bg-p-blue-1 px-[18px] py-2.5 leading-6 text-g-white-1 xl:px-3 xl:py-4 xl:leading-4"
                        >
                            Submit Anonymously
                        </button>
                    </div>

                </form>


            </div>
        </div>
    )
};

export default AnxietyQuestionnaire;
