"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useWindowDimensions from "@/components/base/WindsizeChanger";

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 3.9% 38.6% 11.5% 11.5% 11.5% 11.5% 11.5%;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.07px;
    font-weight: 700;
    color: black;
    padding: 10px 0;

    @media(max-width: 1280px) {
        grid-template-columns: 10.7% 89.3%;
      }
`;

const BurnoutQuestionnaire = () => {
    const { user } = useUser();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const myWindow = useWindowDimensions();

    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        if (myWindow.width >= 1280) {
            setIsDesktop(true);
            // console.log("this is the window.innerWidth from line 28 ==>>", myWindow.width);
        } else {
            setIsDesktop(false);
            // console.log("this is the window.innerWidth from line 31 ==>>", myWindow.width)
        }
    }, [myWindow]);

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
            description: "No sign of burnout here.",
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
            description: "Error",
        },
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

            case totalScore <= 75:
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
                "/api/questionnaires/burnout"
            );
            const data = await res.json();
            // console.log("burnout questionnaire", data);
            setBurnoutQuestionnaire(data);
        };
        fetchBurnoutQuestionnaire();
    }, []);
    // console.log(burnoutQustionnaire);
    // Keydown listener
    useEffect(() => {
        const handleKeyDown = (event) => {
            // console.log(event.key);
            if (event.key === "ArrowDown") {
                setValue({
                    q1: 5,
                    q2: 5,
                    q3: 5,
                    q4: 5,
                    q5: 5,
                    q6: 5,
                    q7: 5,
                    q8: 5,
                    q9: 5,
                    q10: 5,
                    q11: 5,
                    q12: 5,
                    q13: 5,
                    q14: 5,
                    q15: 5,
                });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-16 xl:gap-y-8"
            >
                <div className="main-container flex flex-col gap-y-6">
                    <div className="w-full">
                        <TableHeader className="border-collapse rounded-t-lg border border-g-gray-2 bg-p-blue-5 xl:rounded-none xl:border-x-0 xl:border-y xl:border-g-white-1 xl:bg-p-blue-5">
                            <div className="px-3 py-4">No.</div>
                            <div className="px-3 py-4">Questions</div>
                            {options.map((option) => (
                                <div
                                    className="justify-center px-3 text-center xl:hidden"
                                    key={option.label}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </TableHeader>
                        <div className="rounded-b-lg xl:rounded-b-none bg-g-white-1 xl:bg-p-blue-6">
                            {burnoutQustionnaire?.map(
                                (question, index, array) => (
                                    <div
                                        className={`xl:boder-0 grid border-collapse grid-cols-[3.9%_38.6%_11.5%_11.5%_11.5%_11.5%_11.5%]
                                        xl:grid-cols-[10.7%_89.3%] border border-g-gray-2 text-b-sm leading-5 xl:border-x-0 xl:border-y xl:border-g-white-1 xl:pb-2 ${
                                            index === array.length - 1
                                                ? "rounded-b-lg xl:rounded-none"
                                                : ""
                                        }`}
                                        key={question.No}
                                    >
                                        
                                        {isDesktop ? (
                                            <>
                                                <div className="self-center justify-self-center p-3 xl:self-start"> {question.No}</div>
                                                <div className="self-center p-3">{question.question}</div>
                                            </>
                                            ) : (
                                 <>
                                            <div className="self-center justify-self-center p-3 xl:self-start">
                                                {question.No}
                                            </div>
                                            <div className="self-center p-3">
                                                {question.question}

                                        </div>
                                 </>
                                        )
                                        }

                                        {options.map((option) => (
                                            <div
                                                key={question.No + option.value}
                                                className="flex items-center justify-center self-center px-2.5 py-3.5 text-center font-bold xl:flex-row-reverse xl:col-start-2 xl:justify-end xl:px-3 xl:py-0"
                                            >
                                                <label
                                                    // htmlFor={`q${question.No}_${option.value}`}
                                                    htmlFor={`q${question.No}`}
                                                    className="hidden py-3.5 xl:block justify-self-start xl:px-2.5"
                                                >
                                                    {option.label}
                                                </label>
                                                <input
                                                    className={
                                                        value[`q${question.No}`] === option.value
                                                            ? "border-4 h-4 w-4 m-0.5 appearance-none rounded-full border-g-white-1 bg-p-blue-1 accent-p-blue-1 shadow-[0_0_0_1px_#0066FF]"
                                                            : "border-4 h-4 w-4 m-0.5 appearance-none rounded-full border-g-white-1 bg-g-white-1 accent-p-blue-1 shadow-[0_0_0_1px_#0066FF]"
                                                    }
                                                    type="radio"
                                                    {...register(
                                                        `q${question.No}`,
                                                        { required: true }
                                                    )}
                                                    // id={`q${question.No}_${option.value}`}
                                                    id={`q${question.No}`}
                                                    value={Number(option.value)}
                                                    checked={
                                                        value[
                                                            `q${question.No}`
                                                        ] === option.value
                                                    }
                                                    onChange={handleRadioChange}
                                                />
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
                    <p className="self-center text-b-xs xl:hidden">
                        Developed by Drs. Robert L. Spitzer, Janet B.W.
                        Williams, Kurt Kroenke and colleagues, with an
                        educational grant from Pfizer Inc.
                    </p>
                </div>
                <div className="buttons flex justify-end gap-x-3 xl:justify-center xl:gap-x-[13px]">
                    <button className=":py-2.5 rounded-lg border-2 border-g-gray-2 px-20 leading-6 xl:border-p-blue-1 xl:px-9 xl:py-4 xl:leading-4 xl:text-p-blue-1">
                        Save
                    </button>
                    <button className="rounded-lg bg-p-blue-1 px-[18px] py-2.5 leading-6 text-g-white-1 xl:px-3 xl:py-4 xl:leading-4">
                        Submit Anonymously
                    </button>
                </div>
            </form>
    );
};

export default BurnoutQuestionnaire;
