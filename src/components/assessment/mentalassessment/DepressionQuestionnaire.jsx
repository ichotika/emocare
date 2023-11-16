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
        // console.log("this is from line 30 => ", event.target.value); 
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

    // post data to assessHistory collection in MongoDB.
    const handleSubmit = async (event) => {
        event.preventDefault();
        let uncheckedRadiosArry = [];

        // POST data handling
        async function postAssessment() {
            await fetch("/api/assessment", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessmentType: "depression",
                    score: totalScore,
                    level: getDepressionLevel(totalScore).dlevel,
                    levelDescription:
                        getDepressionLevel(totalScore).description,
                    createdAt: new Date()
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                // after POST, jump to the result page.
                .then(() => {
                    router.push("/employees/assessment/depression/depressionresult");
                })
                .catch((error) => {
                    console.error("Failed to submit data", error);
                });
        }

        // check and itterate if radio button is checked or not.
        for (const eachValue in value) {
            // console.log(eachValue);
            if (value[eachValue] === -1) {
                // console.log(eachValue, value[eachValue]);
                // alert("Please input every button.")
                uncheckedRadiosArry.push(eachValue);
            }
        }

        if (uncheckedRadiosArry.length === 0) {
            // Call the response function (POSTing) 
            // console.log(postAssessment());
            postAssessment();
        } else {
            // show alert message for all unchecked item
            for (let index = 0; index < uncheckedRadiosArry.length; index++) {
                alert("please enter value for " + uncheckedRadiosArry[index]);
            }
        }
    };

    // Save button handle. 
    const handleSave = async (event) => {
        event.preventDefault();

        //Loop through and pick up checked radio button
        const checkedRadioBtnObj = {};
        for (let eachValue in value) {
            if (value[eachValue] !== -1) {
                // store the data as an object. ex [{q1: 2}, {q2: 1}]
                const item = {};
                item[eachValue] = value[eachValue];
                checkedRadioBtnObj[item];
            }
        }
        // console.log("this is checkedRadioButArry from line 168 =>", checkedRadioBtnObj);

        // POST savedRadiodata in DB
        async function saveRadioData() {
            console.log("saved Data from line 175");
            const checkedData = checkedRadioBtnObj;
            await fetch("api/assessment/temporarilysaved", {
                method: "POST",
                body: JSON.stringify({
                    userId: user.id,
                    assessmentType: "depression",
                    savedData: checkedData,
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                // after POST, jump to the result page.
                .then(() => {
                    router.push("/employees/assessment");
                })
                .catch((error) => {
                    console.error("Failed to submit data", error);
                });
        }
        saveRadioData();
        // console.log(await saveRadioData());
    }


    // GET Questionnaire & Saved Assessment Data
    const [depressionQustionnaire, setDepressionQuestionnaire] = useState([]);
    const [savedData, setSavedData] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        // get questionnaire
        const fetchDepressionQuestionnaire = async () => {
            try {
                const res = await fetch(
                    "http://localhost:3000/api/questionnaires/depression",
                    { method: "GET" }
                );
                const data = await res.json();
                // console.log("depression questionnaire", data);
                setDepressionQuestionnaire(data);
            } catch (error) {
                console.error("Failed to fetch depression questionnaire", error)
            }
        };
        fetchDepressionQuestionnaire();

        // Get Temporarily Saved Data
        const fetchSavedData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/assessment/temporarilysaved",
                    { method: "GET" }
                );
                if (response.ok) {
                    const data = await response.json();
                    // console.log("this is the saved data =>", data);
                    setSavedData(data);
                }
            } catch (error) {
                console.error("Failed to fetch saved data", error);
            }
        }
        fetchSavedData();
    }, []);
    // console.log(depressionQustionnaire.depressionAssessment)
    // console.log("this is the saved data from line 214 => ", savedData)

    async function deleteSavedData() {
        try {
            const response = await fetch(
                "http://localhost:3000/api/assessment/temporarilysaved",
                { method: "DELETE" }
            );
            if (response.ok) {
                console.log("SavedData is deleted.");
            } else {
                console.error("Failed to delete data", error);
            }
        } catch (error) {
            console.error("Error occurred while deleting data", error);
        }
    }

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
                                                value={
                                                    savedData && savedData[`q${question.No}`]
                                                        ? savedData[`q${question.No}`]
                                                        : Number(option.value)
                                                }
                                                onChange={handleRadioChange}
                                                checked={
                                                    savedData && savedData[`q${question.No}`] === option.value
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </td>
                                    ))}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>

                <button
                    onClick={handleSave}
                    className="m-3 rounded-lg border-neutral-950 p-3">
                    Save
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        deleteSavedData();
                    }}
                    className="m-3 rounded-lg bg-blue-600 p-3 text-white"
                >
                    Submit Anonymously
                </button>
            </form>
            {/* 

            <p>Your total mental score is {totalScore}</p>
            <p>Your mental health level is Your mental health level is {getDepressionLevel(totalScore).dlevel}</p>
            <p>Your mental health level is Your mental health level is "{getDepressionLevel(totalScore).description}"</p> */}
        </div >
    );
}

export default Questionnaire;
