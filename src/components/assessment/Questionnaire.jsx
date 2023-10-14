"use client"
import { useState, useEffect } from 'react'

const Questionnaire = () => {

    const questions = [
        { No: "1", question: "Q1" },
        { No: "2", question: "Q2" },
        { No: "3", question: "Q3" },
        { No: "4", question: "Q4" },
        { No: "5", question: "Q5" },
        { No: "6", question: "Q6" },
        { No: "7", question: "Little 8pleasure and in doing things" },
        { No: "8", question: "Little p9leasure and n doing things" },
        { No: "9", question: "Litte ple0asure and in doing things" },
        { No: "10", question: "Litle ple8asure and in doing things" },
        { No: "11", question: "ittle plea54sure and in doing things" },
        { No: "12", question: "Little pleas32ure and in doing thing" },
        { No: "13", question: "Little pleasur231e and in doing ings" },
    ]

    const options = [
        { label: "Not At All", value: 1 },
        { label: "Several Days", value: 2 },
        { label: "More than half the day", value: 3 },
        { label: "Nearly everyday", value: 4 }
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
        // console.log(typeof score);
        // console.log(typeof total);
        
        if (total !== null){
            return score + total;
        }

        return "You are missing some questions"
    },0
    );
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
                <button>Submit</button>
            </form>

            {/* // // 合計値を表示
            各質問の回答の値を取得し、合計値を計算
            const totalScore = Object.values(value).reduce((acc, answer) => {
            // 回答が "null" 以外の場合に値を加算
            if (answer !== "null") {
            return acc + parseInt(answer, 10);
            }
            return acc;
            }, 0); */}

            <p>Your total mental score is {totalScore}</p>


            {/* <p>Your total mental score is {setValue}</p> */}
        </>
    );
}

export default Questionnaire;