"use client"
import { useState, useEffect } from 'react'

const Questionnaire = () => {
    const questions = [
        { No: "1", question: "Little interest or pleasure in doing things" },
        { No: "2", question: "Feeling down, depressed, or hopeless " },
        { No: "3", question: "Trouble falling or staying asleep, or sleeping too much " },
        { No: "4", question: "Feeling tired or having little energy " },
        { No: "5", question: "Poor appetite or overeating " },
        { No: "6", question: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down" },
        { No: "7", question: "Trouble concentrating on things, such as reading the newspaper or watching television" },
        { No: "8", question: "Moving or speaking so slowly that other people could have noticed?  Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual " },
        { No: "9", question: "Thoughts that you would be better off dead or of hurting yourself in some way " }
    ]

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
        {dlevel: "Non-minimal", description: "Patient may not need depression treatment." },
        {dlevel: "Mild", description: "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment."},
        {dlevel: "Moderate", description: "Use clinical judgment about treatment, based on patient's duration of symptoms and functional impairment."},
        {dlevel: "Moderate severe", description: "Treat using antidepressants, psychotherapy or a combination of treatment."},
        {dlevel: "Severe", description: "Treat using antidepressants, psychotherapy or a combination of treatment."}
    ]

    // const [level, setLevel] = useState("")

    const getDepressionLevel = (totalScore) => {

        const result = {
            dlevel: "",
            description: ""
        }

        switch (true) {
            case totalScore <= 4:
            result.dlevel =  depressionLevel[0].dlevel;
            result.description = depressionLevel[0].description;
            break;
            case totalScore <= 9:
                result.dlevel =  depressionLevel[1].dlevel;
                result.description = depressionLevel[1].description;
            break
            case totalScore <= 14:
                result.dlevel =  depressionLevel[2].dlevel;
                result.description = depressionLevel[2].description;
            break;
            case totalScore <= 19:
                result.dlevel =  depressionLevel[3].dlevel;
                result.description = depressionLevel[3].description;
            break
            default:
            return depressionLevel[4].dlevel;
            break;
        }
        return result
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // Get the questionnaire from server.
    // useEffect(()=> {
    //     const fetchQuestionnaire = async() => {
    //         const res = await fetch("http://locatlhost:3000/api/depressionquestionnaire/questionnaire");
    //         const data = await res.json();
    //         setQuestionnaire(data);
    //     };
    //     fetchQuestionnaire();
    // }, []);



    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th colSpan="4">Questions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {questions.map((question) => (
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

                


                <button>Save</button>
                <button>Submit Anonymously</button>
            </form>


            <p>Your total mental score is {totalScore}</p>
            <p>Your mental health level is Your mental health level is {getDepressionLevel(totalScore).dlevel}</p>
            <p>Your mental health level is Your mental health level is "{getDepressionLevel(totalScore).description}"</p>
        </>
    );
}

export default Questionnaire;