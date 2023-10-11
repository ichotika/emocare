"use client"
import { useState } from 'react'

const Questionnaire = () => {
    const [selected, setSelected] = useState('null');
    const handleRadioChange = (event) => {
        // console.log(event.target.value);
        setSelected(event.target.value);
    }

    const options = [
        {label: "Not At All", value: "1"},
        {label: "Several Days", value: "2"},
        {label: "More than half the day", value: "3"},
        {label: "Nearly everyday", value: "4"}
    ]

    return (
        <>
            <form action="">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr style={{ backgroundColor: "aliceBlue" }}>
                            <th>No</th>
                            <th colSpan="4">Questions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td colSpan="4">Little pleasure and in doing things</td>
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
                                        checked={selected=option.value}
                                        onChange={handleRadioChange}
                                    />
                                </td>
                            )
                            )}

                        </tr>
                        {/* <tr>
                        <td>2</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q2" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q2" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q2" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q2" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q3" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q3" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q3" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q3" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q4" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q4" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q4" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q4" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q5" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q5" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q5" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q5" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q6" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q6" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q6" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q6" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q7" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q7" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q7" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q7" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q8" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q8" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q8" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q8" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>90</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q9" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q9" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q9" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q9" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q10" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q10" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q10" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q10" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q11" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q11" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q11" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q11" value="4" />
                        </td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td colspan="4">Little pleasure and in doing things</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>
                            <label htmlFor="">Not At All</label>
                            <input type="radio" name="q12" value="1" />
                        </td>
                        <td>
                            <label htmlFor="">Several Days</label>
                            <input type="radio" name="q12" value="2" />
                        </td>
                        <td>
                            <label htmlFor="">More than half the day</label>
                            <input type="radio" name="q12" value="3" />
                        </td>
                        <td>
                            <label htmlFor="">Nearly everyday</label>
                            <input type="radio" name="q12" value="4" />
                        </td>
                    </tr> */}
                    </tbody>
                </table>

                <button>Submit</button>
            </form>
            <p>TOTAL IS  </p>
        </>
    );
}

export default Questionnaire;