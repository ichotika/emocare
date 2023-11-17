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
    justify-content: start;
    font-size: 12px;
    background-color: #f2f4f4;
    border: 2px solid #c7c8d1;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: black;
    padding: 1rem 0;
`;

const Questionnaire = () => {
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

            case totalScore >= 27:
                result.dlevel = depressionLevel[4].dlevel;
                result.description = depressionLevel[4].description;
                break;

            default:
                result.dlevel = depressionLevel[5].dlevel;
                result.description = depressionLevel[5].description;
                break;
        }
        return result;
    };

    // post data to assessHistory collection in MongoDB.
    const onSubmit = async (data) => {
        // console.log("this is the data from line 119", data);
        // console.log("my user id => ", user.id)
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
                    router.push(
                        "/employees/assessment/depression/depressionresult"
                    );
                })
                .catch((error) => {
                    alert("Failed to submit data", error);
                });
        }

        // for (const eachValue in value) {
        //     // console.log(eachValue);
        //     if (value[eachValue] === -1) {
        //         // console.log(eachValue, value[eachValue]);
        //         // alert("Please input every button.")
        //         i.push(eachValue);
        //     }
        // }

        // if (i.length === 0) {
        //     // fetching
        //     // console.log(response());

        //     response();
        // } else {
        //     for (let index = 0; index < i.length; index++) {
        //         alert("please enter value for " + i[index]);
        //     }
        // }
    };

    const [depressionQustionnaire, setDepressionQuestionnaire] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        const fetchDepressionQuestionnaire = async () => {
            const res = await fetch(
                "http://localhost:3000/api/questionnaires/depression"
            );
            const data = await res.json();
            // console.log("depression questionnaire", data);
            setDepressionQuestionnaire(data);
        };
        fetchDepressionQuestionnaire();
    }, []);
    // console.log(depressionQustionnaire.depressionAssessment)

    return (
        <div className="flex">
            <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-16"
            >
                <div className="main-container flex flex-col gap-y-6">
                    <div className="z-10 rounded-lg border border-g-gray-2">
                        {/* <TableHeader>
                            <div>No</div>
                            <div>Questions</div>
                            {options.map(
                                        (option) => (
                                            <div>{option.label}</div>
                                        )
                                    )}

                        </TableHeader> */}


                        <table className="w-full bg-g-white-1">
                            <thead className="py-3 bg-p-blue-5">
                                <tr>
                                    <th colSpan={1}>No</th>
                                    <th colSpan={12.5}>Questions</th>
                                    {options.map(
                                        (option) => (
                                            <th colSpan={2.8}>{option.label}</th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody className="py-3">
                                {depressionQustionnaire?.depressionAssessment?.map(
                                    (question) => (
                                        <tr key={question.No}>
                                            <td colSpan={1}>{question.No}</td>
                                            <td colSpan={12.5}>
                                                {question.question}
                                            </td>
                                            {options.map((option) => (
                                                <td
                                                    key={
                                                        question.No +
                                                        option.value
                                                    }
                                                    colSpan={2.8}
                                                >
                                                    <label
                                                        htmlFor={`q${question.No}_${option.value}`}
                                                        className="hidden"
                                                    >
                                                        {option.label}
                                                    </label>
                                                    <input
                                                        className="bg-p-blue-1 border-rose-500"
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
                                                </td>
                                            ))}
                                            {errors[`q${question.No}`] && (
                                                <td
                                                    colSpan="4"
                                                    className="text-o-error-1"
                                                >
                                                    This item is mandatory
                                                </td>
                                            )}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                    <p className="self-center">
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
                        onClick={handleSubmit}
                        className="rounded-lg bg-p-blue-1 px-[18px] py-2.5 leading-6 text-g-white-1 xl:px-3 xl:py-4 xl:leading-4"
                    >
                        Submit Anonymously
                    </button>
                </div>
            </form>
            {/* 

            <p>Your total mental score is {totalScore}</p>
            <p>Your mental health level is Your mental health level is {getDepressionLevel(totalScore).dlevel}</p>
            <p>Your mental health level is Your mental health level is "{getDepressionLevel(totalScore).description}"</p> */}
        </div>
    );
};

export default Questionnaire;
