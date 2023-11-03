"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AnxietyQuestionnaire = () => {
    const { user } = useUser();
    const router = useRouter();

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

            case totalScore >= 15:
                result.alevel = anxietyLevel[3].alevel;
                result.description = anxietyLevel[3].description;
                break;

            default:
                return anxietyLevel[4].alevel;
        }
        return result;
    };

    // post data to assessHistory collection in MongoDB.
    const handleSubmit = async (event) => {
        event.preventDefault();
        let i = [];

        async function response() {
            await fetch("/api/questionnaires/anxiety/response", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessment_id: 1,
                    assessment_type: "Anxiety",
                    assess_date: new Date(),
                    score: totalScore,
                    level: getAnxietyLevel(totalScore).alevel,
                    level_description: getAnxietyLevel(totalScore).description,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    router.push("/assessment/anxiety/anxietyresult");
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
            <form method="POST" onSubmit={handleSubmit}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th colSpan="4">Questions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {anxietyQustionnaire?.anxietyAssessment?.map(
                            (question) => (
                                <tr key={question.No}>
                                    <td>{question.No}</td>
                                    <td colSpan="4">{question.question}</td>
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
                            )
                        )}
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

export default AnxietyQuestionnaire;
