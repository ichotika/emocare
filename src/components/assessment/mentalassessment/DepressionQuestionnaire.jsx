"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useWindowDimensions from "@/components/base/WindsizeChanger";

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 3.9% 50% 11.5% 11.5% 11.5% 11.5%;
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

const Questionnaire = () => {
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
        q8: -1,
        q9: -1,
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

    const depressionLevel = [
        {
            dlevel: "Non-minimal",
            description: "Patient may not need depression treatment.",
        },
        {
            dlevel: "Mild",
            description:
                "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment.",
        },
        {
            dlevel: "Moderate",
            description:
                "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment.",
        },
        {
            dlevel: "Moderate severe",
            description:
                "Treat using antidepressants, psychotherapy or a combination of treatment.",
        },
        {
            dlevel: "Severe",
            description:
                "Treat using antidepressants, psychotherapy or a combination of treatment.",
        },
        {
            dlevel: "Error",
            description: "Error",
        },
    ];

    // console.log(depressionLevel[0].description);

    // const [level, setLevel] = useState("")

    const getDepressionLevel = (totalScore) => {
        const result = {
            dlevel: "",
            description: "",
        };

        switch (true) {
            case totalScore <= 4:
                result.dlevel = depressionLevel[0].dlevel;
                result.description = depressionLevel[0].description;
                break;

            case totalScore <= 9:
                result.dlevel = depressionLevel[1].dlevel;
                result.description = depressionLevel[1].description;
                break;

            case totalScore <= 14:
                result.dlevel = depressionLevel[2].dlevel;
                result.description = depressionLevel[2].description;
                break;

            case totalScore <= 19:
                result.dlevel = depressionLevel[3].dlevel;
                result.description = depressionLevel[3].description;
                break;

            case totalScore <= 27:
                result.dlevel = depressionLevel[4].dlevel;
                result.description = depressionLevel[4].description;
                break;

            default:
                result.dlevel = depressionLevel[5].dlevel;
                result.description = depressionLevel[5].description;
                break;
        }

        // console.log("this is result",result);
        return result;
    };

    // post data to assessHistory collection in MongoDB.
    const onSubmit = async (data) => {
        // console.log("this is the data from line 119", data);
        // console.log("my user id => ", user.id);
        let i = [];
        async function response() {
            await fetch("/api/assessment", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessmentType: "depression",
                    score: totalScore,
                    level: getDepressionLevel(totalScore).dlevel,
                    levelDescription:
                        getDepressionLevel(totalScore).description,
                    createdAt: new Date(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    // console.log("deta sent");
                    router.push(
                        "/employees/assessment/depression/depressionresult"
                    );
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
            // for (let index = 0; index < i.length; index++) {
            //     alert("please enter value for " + i[index]);
            // }
        }
    };

    const [depressionQustionnaire, setDepressionQuestionnaire] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        const fetchDepressionQuestionnaire = async () => {
            const res = await fetch("/api/questionnaires/depression");
            const data = await res.json();
            // console.log("depression questionnaire", data);
            setDepressionQuestionnaire(data);
        };
        fetchDepressionQuestionnaire();
    }, []);
    // console.log(depressionQustionnaire.depressionAssessment)

    return (
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-16 xl:gap-y-8"
            >
                <div className="main-container flex flex-col gap-y-6">
                    <div className="w-full">
                        <TableHeader
                            className="
                            border-collapse 
                            rounded-t-lg 
                            border
                            border-g-gray-2 
                            bg-p-blue-5 
                            xl:rounded-none 
                            xl:border-x-0 
                            xl:border-y 
                            xl:border-g-white-1 
                            xl:bg-p-blue-5"
                        >
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
                        <div className="rounded-b-lg bg-g-white-1 xl:rounded-b-none xl:bg-p-blue-6">
                            {depressionQustionnaire?.depressionAssessment?.map(
                                (question, index, array) => (
                                    <div
                                        className={`xl:boder-0 grid border-collapse grid-cols-[3.9%_50%_11.5%_11.5%_11.5%_11.5%] xl:grid-cols-[10.7%_89.3%] border border-g-gray-2 text-b-sm leading-5 xl:border-x-0 xl:border-y xl:border-g-white-1 xl:pb-2 ${index === array.length - 1
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
                                                    checked={value[`q${question.No}`] === option.value}
                                                    onChange={handleRadioChange}
                                                />

                                            </div>
                                        ))}
                                        {errors[`q${question.No}`] && (
                                            <div className="col-span-4 col-start-3 px-3 pb-3 text-center text-o-error-1 ">
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

export default Questionnaire;
