"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 3.9% 38.6% 11.5% 11.5% 11.5% 11.5% 11.5%;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.07px;
    font-weight: 700;
    color: black;
    padding: 1rem 0;
`;

const BurnoutQuestionnaire = () => {
    const { user } = useUser();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const options = [
        { label: "Not At All", value: 1 },
        { label: "Rarely", value: 2 },
        { label: "Sometimes", value: 3 },
        { label: "Often", value: 4 },
        { label: "Very Often", value: 5 },
    ];

    const [value, setValue] = useState({
        q1: -1,
        q2: -1,
        q3: -1,
        q4: -1,
        q5: -1,
        q6: -1,
        q7: -1,
        q8: -1,
        q9: -1,
        q10: -1,
        q11: -1,
        q12: -1,
        q13: -1,
        q14: -1,
        q15: -1,
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

    const burnoutLevel = [
        {
            blevel: "No-sign",
            description: "No sign of burnout here."
        },
        {
            blevel: "Little sign",
            description:
                "Little sign of burnout here, unless some factors are particularly severe.",
        },
        {
            blevel: "Be careful",
            description:
                "Be careful - you may be at risk of burnout, particularly if several scores are high.",
        },
        {
            blevel: "Severe risk",
            description:
                "You are at severe risk of burnout - do something about this urgently.",
        },
        {
            blevel: "Very severe risk",
            description:
                "You are at very severe risk of burnout - do something about this urgently.",
        },
        {
            blevel: "Error",
            description: "Error"
        }
    ];

    // const [level, setLevel] = useState("")

    const getBurnoutLevel = (totalScore) => {
        const result = {
            blevel: "",
            description: "",
        };

        switch (true) {
            case totalScore <= 18:
                result.blevel = burnoutLevel[0].blevel;
                result.description = burnoutLevel[0].description;
                break;

            case totalScore <= 32:
                result.blevel = burnoutLevel[1].blevel;
                result.description = burnoutLevel[1].description;
                break;

            case totalScore <= 49:
                result.blevel = burnoutLevel[2].blevel;
                result.description = burnoutLevel[2].description;
                break;

            case totalScore <= 59:
                result.blevel = burnoutLevel[3].blevel;
                result.description = burnoutLevel[3].description;
                break;

            case totalScore >= 75:
                result.blevel = burnoutLevel[4].blevel;
                result.description = burnoutLevel[4].description;
                break;

            default:
                result.blevel = burnoutLevel[5].blevel;
                result.description = burnoutLevel[5].description;
                break;
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
                    assessmentType: "burnout",
                    score: totalScore,
                    level: getBurnoutLevel(totalScore).blevel,
                    levelDescription: getBurnoutLevel(totalScore).description,
                    createdAt: new Date(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    router.push("/employees/assessment/burnout/burnoutresult");
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

    const [burnoutQustionnaire, setBurnoutQuestionnaire] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        const fetchBurnoutQuestionnaire = async () => {
            const res = await fetch(
                "http://localhost:3000/api/questionnaires/burnout"
            );
            const data = await res.json();
            // console.log("burnout questionnaire", data);
            setBurnoutQuestionnaire(data);
        };
        fetchBurnoutQuestionnaire();
    }, []);
    // console.log(burnoutQustionnaire);

    return (
        <div className="flex">
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-16"
            >
                <div className="main-container flex flex-col gap-y-6">
                    <div className="">
                        <TableHeader className="border-collapse rounded-t-lg border border-g-gray-2 bg-p-blue-5 xl:rounded-none xl:border-x-0 xl:border-y xl:border-g-white-1 xl:bg-p-blue-5">
                            <div className="px-3 xl:px-1">No.</div>
                            <div className="px-3 xl:pl-5">Questions</div>
                            {options.map((option) => (
                                <div
                                    className="justify-center px-3 text-center xl:hidden"
                                    key={option.label}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </TableHeader>
                        <div className="rounded-b-lg xl:rounded-b-none">
                            {burnoutQustionnaire?.map(
                                (question, index, array) => (
                                    <div
                                        className={`xl:boder-0 grid border-collapse grid-cols-[3.9%_38.6%_11.5%_11.5%_11.5%_11.5%_11.5%] border border-g-gray-2 text-b-sm leading-5 xl:flex xl:flex-nowrap xl:flex-col xl:border-x-0 xl:border-y xl:border-g-white-1 xl:pb-2 ${
                                            index === array.length - 1
                                                ? "rounded-b-lg xl:rounded-none"
                                                : ""
                                        }`}
                                        key={question.No}
                                    >
                                    <div className="col-span-2 flex">
                                            <div className="self-center justify-self-center px-4 py-4 xl:self-start">
                                                {question.No}
                                            </div>
                                            <div className="px-4 py-3.5 xl:px-3">
                                                {question.question}
                                            </div>
                                        </div>
                                        {options.map((option) => (
                                            <div
                                                key={question.No + option.value}
                                                className="self-center px-3 py-4 pl-[49px] text-center font-bold xl:flex xl:self-start xl:py-2"
                                            >
                                                <input
                                                    className="content-center border-p-blue-1 bg-p-blue-1"
                                                    type="radio"
                                                    {...register(
                                                        `q${question.No}`,
                                                        { required: true }
                                                    )}
                                                    id={`q${question.No}_${option.value}`}
                                                    value={Number(option.value)}
                                                    onChange={handleRadioChange}
                                                />
                                                <label
                                                    htmlFor={`q${question.No}_${option.value}`}
                                                    className="hidden py-3.5 xl:block xl:px-2.5"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                        {errors[`q${question.No}`] && (
                                            <div className="col-span-5 col-start-3 px-3 pb-3 text-center text-o-error-1 ">
                                                This item is mandatory
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <p className="self-center xl:hidden">
                        Developed by Drs. Robert L. Spitzer, Janet B.W.
                        Williams, Kurt Kroenke and colleagues, with an
                        educational grant from Pfizer Inc.
                    </p>
                </div>
                <div className="buttons flex justify-end gap-x-3 xl:justify-center xl:gap-x-[13px]">
                    <button className=":py-2.5 rounded-lg border-2 border-g-gray-2 px-20 leading-6 xl:border-p-blue-1 xl:px-9 xl:py-4 xl:leading-4 xl:text-p-blue-1">
                        Save
                    </button>
                    <button
                        className="rounded-lg bg-p-blue-1 px-[18px] py-2.5 leading-6 text-g-white-1 xl:px-3 xl:py-4 xl:leading-4"
                    >
                        Submit Anonymously
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BurnoutQuestionnaire;
