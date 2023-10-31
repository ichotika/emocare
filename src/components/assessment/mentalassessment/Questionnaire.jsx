"use client"
import { useState, useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
import EmployeeSidebar from '@/components/base/EmployeeSidebar';

const Questionnaire = () => {

    const { user } = useUser();

    const options = [
        { label: "Not At All", value: 0 },
        { label: "Several Days", value: 1 },
        { label: "More than half the day", value: 2 },
        { label: "Nearly everyday", value: 3 }
    ]

    const [value, setValue] = useState(
        {
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
            q13: 0
        }
    )

    const handleRadioChange = (event) => {
        setValue({ ...value, [event.target.name]: Number(event.target.value) })
    }

    const totalScore = Object.values(value).reduce((score, total) => {
        if (total !== null) {
            return score + total;
        }

        return "You are missing some questions"
    }, 0
    );

    const depressionLevel = [
        { dlevel: "Non-minimal", description: "Patient may not need depression treatment." },
        { dlevel: "Mild", description: "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment." },
        { dlevel: "Moderate", description: "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment." },
        { dlevel: "Moderate severe", description: "Treat using antidepressants, psychotherapy or a combination of treatment." },
        { dlevel: "Severe", description: "Treat using antidepressants, psychotherapy or a combination of treatment." }
    ]

    // const [level, setLevel] = useState("")

    const getDepressionLevel = (totalScore) => {

        const result = {
            dlevel: "",
            description: ""
        }

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
        return result
    }


    // post data to assessHistory collection in MongoDB. 
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/questionnaires/depression', {
            method: "POST",
            body: JSON.stringify({
                emailID: "kimi.saigooon@gmail.com",
                assessDate: new Date(),
                depressionLevel: getDepressionLevel(totalScore).dlevel,
                depressionPercent: totalScore
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            console.log("Data sunbmitted successfuly.")
        } else {
            console.error(`Failed to submit data`);
        }
    }

    const [depressionQustionnaire, setDepressionQuestionnaire] = useState([]);

    // Get the questionnaire from server.
    useEffect(() => {
        const fetchDepressionQuestionnaire = async () => {
            const res = await fetch("http://localhost:3000/api/questionnaires/depression");
            const data = await res.json();
            console.log("depression questionnaire", data);
            setDepressionQuestionnaire(data);
        };
        fetchDepressionQuestionnaire();
    }, []);




    return (
        <>
            <div className="flex">
                <EmployeeSidebar />
                <div>

                </div>

                <form method="POST" onSubmit={handleSubmit}>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th colSpan="4">Questions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {depressionQustionnaire.map((question) => (
                                <tr key={question.No}>
                                    <td>{question.No}</td>
                                    <td colSpan="4">{question.question}</td>
                                    {options.map((option) => (
                                        <td>
                                            <label
                                                htmlFor={`q${question.No}_${option.value}`}>{option.label}</label>
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

                    <button className="rounded-lg border-neutral-950 p-3 m-3">Save</button>
                    <button onClick={(handleSubmit)} className="bg-blue-600 rounded-lg p-3 text-white m-3">Submit Anonymously</button>
                </form>
                {/* 

            <p>Your total mental score is {totalScore}</p>
            <p>Your mental health level is Your mental health level is {getDepressionLevel(totalScore).dlevel}</p>
            <p>Your mental health level is Your mental health level is "{getDepressionLevel(totalScore).description}"</p> */}
            </div>
        </>
    );
}

export default Questionnaire;