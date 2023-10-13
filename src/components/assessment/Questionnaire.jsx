"use client"
import { useState, useEffect } from 'react'

const Questionnaire = () => {
    const [selected, setSelected] = useState('null');
    const handleRadioChange = (event, questionNo) => {
        // console.log(event.target.value);
        setSelected(event.target.value);
    }


    useEffect(()=> {
        const fetchQuestionnaire = async() => {
            const res = await fetch("http://locatlhost:3000/api/depressionquestionnaire/questionnaire");
            const data = await res.json();
            
        }
    })

    const questions = [
        { No: "1", question: "Little pleasure and in doing things" },
        { No: "2", question: "Another pleasure and in doing things" },
        { No: "3", question: "Yet pleasure and in doing things" },
        { No: "4", question: "Little pleasure and in doing things" },
        { No: "5", question: "Little pleasure and in doing things" },
        { No: "6", question: "Little pleasure and in doing things" },
        { No: "7", question: "Little pleasure and in doing things" },
        { No: "8", question: "Little pleasure and in doing things" },
        { No: "9", question: "Little pleasure and in doing things" },
        { No: "10", question: "Little pleasure and in doing things" },
        { No: "11", question: "Little pleasure and in doing things" },
        { No: "12", question: "Little pleasure and in doing things" },
        { No: "13", question: "Little pleasure and in doing things" },
    ]

    const options = [
        { label: "Not At All", value: "1" },
        { label: "Several Days", value: "2" },
        { label: "More than half the day", value: "3" },
        { label: "Nearly everyday", value: "4" }
    ]

    return (
        <>
            <form action="POST">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th colSpan="4">Questions</th>
                        </tr>
                        {questions.map((question) => (
                            <tr key={question.No}>
                                <td>
                                    {question.No}
                                </td>
                                <td colSpan="4">
                                    {question.question}
                                </td>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            {options.map((option) => (
                                <td key={option.value}>
                                    <label htmlFor={`q1_${option.value}`}>{option.label}</label>
                                    <input
                                        type="radio"
                                        name="q1"
                                        id={`q1_${option.value}`}
                                        value={option.value}
                                        checked={selected === option.value}
                                        onChange={handleRadioChange}
                                    />
                                </td>
                            )
                            )}
                        </tr>
                    </tbody>
                ))}
                </table>
                <button>Submit</button>
            </form>
            <p>Yout total mental score is {selected}</p>
        </>
    );
}

export default Questionnaire;