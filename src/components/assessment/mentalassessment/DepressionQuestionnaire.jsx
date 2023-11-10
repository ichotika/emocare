"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Questionnaire = () => {
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

            case totalScore >= 15:
                result.dlevel = depressionLevel[3].dlevel;
                result.description = depressionLevel[3].description;
                break;

            default:
                return depressionLevel[4].dlevel;
        }
        return result;
    };

    console.log(user?.id)

    // post data to assessHistory collection in MongoDB.
    const handleSubmit = async (event) => {
        event.preventDefault();
        let i = [];
        async function response() {
            let payload = JSON.stringify({
                userId: user?.id,
                // assessment_id: 1,
                assessmentType: "depression",
                // assess_date: new Date(),
                score: totalScore,
                level: getDepressionLevel(totalScore).dlevel,
                levelDescription:
                    getDepressionLevel(totalScore).description,
            })
            console.log("payload => ", payload);
            await fetch(`/api/assessment?search=${user?.id}`, {

                method: "POST",
                body: JSON.stringify({
                    userId: user?.id,
                    // assessment_id: 1,
                    assessmentType: "depression",
                    // assess_date: new Date(),
                    score: totalScore,
                    level: getDepressionLevel(totalScore).dlevel,
                    levelDescription:
                        getDepressionLevel(totalScore).description,
                    timestamp: new Date(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    router.push("/employees/assessment/depression/depressionresult");
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
            <div></div>

            <form method="POST" onSubmit={handleSubmit}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th colSpan="4">Questions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {depressionQustionnaire?.depressionAssessment?.map(
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
            {/* 

            <p>Your total mental score is {totalScore}</p>
            <p>Your mental health level is Your mental health level is {getDepressionLevel(totalScore).dlevel}</p>
            <p>Your mental health level is Your mental health level is "{getDepressionLevel(totalScore).description}"</p> */}
        </div>
    );
};

export default Questionnaire;
