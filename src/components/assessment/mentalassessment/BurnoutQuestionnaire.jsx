"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const BurnoutQuestionnaire = () => {
    const { user } = useUser();
    const router = useRouter();

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
        { description: "No sign of burnout here." },
        {
            description:
                "Little sign of burnout here, unless some factors are particularly severe.",
        },
        {
            description:
                "Be careful - you may be at risk of burnout, particularly if several scores are high.",
        },
        {
            description:
                "You are at severe risk of burnout - do something about this urgently.",
        },
        {
            description:
                "You are at very severe risk of burnout - do something about this urgently.",
        },
    ];

    // const [level, setLevel] = useState("")

    const getBurnoutLevel = (totalScore) => {
        const result = {
            description: "",
        };

        switch (true) {
            case totalScore <= 18:
                result.description = burnoutLevel[0].description;
                break;

            case totalScore <= 32:
                result.description = burnoutLevel[1].description;
                break;

            case totalScore <= 49:
                result.description = burnoutLevel[2].description;
                break;

            case totalScore >= 59:
                result.description = burnoutLevel[3].description;
                break;

            default:
                return burnoutLevel[4].dlevel;
        }
        return result;
    };

    // post data to assessHistory collection in MongoDB.
    const handleSubmit = async (event) => {
        event.preventDefault();
        let i = [];

        async function response() {
            await fetch("/api/questionnaires/burnout/response", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessment_id: 2,
                    assessment_type: "burnout",
                    assess_date: new Date(),
                    score: totalScore,
                    level_description: getBurnoutLevel(totalScore).description,
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
            console.log(eachValue);
            if (value[eachValue] === -1) {
                console.log(eachValue, value[eachValue]);
                // alert("Please input every button.")
                i.push(eachValue);
            }
        }

        if (i.length === 0) {
            // fetching
            // console.log(response());

            response();
        } else {
            for (let index = 0; index < i.length; index++) {
                alert("please enter value for " + i[index]);
            }
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
    console.log(burnoutQustionnaire);

    return (
        <div className="flex">
            <div></div>

            <form method="POST" onSubmit={handleSubmit}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th colSpan="5">Questions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {burnoutQustionnaire?.map((question) => (
                            <tr key={question.No}>
                                <td>{question.No}</td>
                                <td colSpan="5">{question.question}</td>
                                {options.map((option) => (
                                    <td key={question.No + option.value}>
                                        <label
                                            htmlFor={`q${question.No}_${option.value}`}
                                        >
                                            {option.label}
                                        </label>
                                        <input
                                            type="radio"
                                            name={`q${question.No}`}
                                            id={`q${question.No}_${option.value}`}
                                            value={Number(option.value)}
                                            onChange={handleRadioChange}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="m-3 rounded-lg border-neutral-950 p-3">
                    Save
                </button>
                <button
                    onClick={handleSubmit}
                    className="m-3 rounded-lg bg-blue-600 p-3 text-white"
                >
                    Submit Anonymously
                </button>
            </form>
        </div>
    );
};

export default BurnoutQuestionnaire;
