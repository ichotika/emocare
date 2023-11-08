"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import RadioQ from "./RadioQ";

const createResponse = async (responseObj, router) => {
    try {
        const response = await fetch("/api/personality/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(responseObj),
        });

        if (response.ok) {
            const responseData = await response.json();
            alert(
                "Your personality type are " + responseData.data.personalityType
            );
            router.push("/employees");
        }
    } catch (error) {
        console.log(error);
    }
};
function PersonalityForm() {
    const [questionaires, setQuestionaires] = useState([]);
    const { user } = useUser();
    const router = useRouter();
    useEffect(() => {
        const fetchQuestionaire = async () => {
            const res = await fetch("/api/personality/questionaire");
            const data = await res.json();
            setQuestionaires(data);
        };
        fetchQuestionaire();
    }, []);

    return (
        <div>
            <Formik
                initialValues={{
                    q1: "",
                    q2: "",
                    q3: "",
                    q4: "",
                    q5: "",
                    q6: "",
                    q7: "",
                    q8: "",
                    q9: "",
                    q10: "",
                    q11: "",
                    q12: "",
                    q13: "",
                    q14: "",
                    q15: "",
                    q16: "",
                    q17: "",
                    q18: "",
                    q19: "",
                    q20: "",
                    q21: "",
                    q22: "",
                    q23: "",
                    q24: "",
                    q25: "",
                    q26: "",
                    q27: "",
                    q28: "",
                    q29: "",
                    q30: "",
                    q31: "",
                    q32: "",
                }}
                onSubmit={async (values) => {
                    let responseObj = {
                        userId: user.id,
                        Q1: Number(values.q1),
                        Q2: Number(values.q2),
                        Q3: Number(values.q3),
                        Q4: Number(values.q4),
                        Q5: Number(values.q5),
                        Q6: Number(values.q6),
                        Q7: Number(values.q7),
                        Q8: Number(values.q8),
                        Q9: Number(values.q9),
                        Q10: Number(values.q10),
                        Q11: Number(values.q11),
                        Q12: Number(values.q12),
                        Q13: Number(values.q13),
                        Q14: Number(values.q14),
                        Q15: Number(values.q15),
                        Q16: Number(values.q16),
                        Q17: Number(values.q17),
                        Q18: Number(values.q18),
                        Q19: Number(values.q19),
                        Q20: Number(values.q20),
                        Q21: Number(values.q21),
                        Q22: Number(values.q22),
                        Q23: Number(values.q23),
                        Q24: Number(values.q24),
                        Q25: Number(values.q25),
                        Q26: Number(values.q26),
                        Q27: Number(values.q27),
                        Q28: Number(values.q28),
                        Q29: Number(values.q29),
                        Q30: Number(values.q30),
                        Q31: Number(values.q31),
                        Q32: Number(values.q32),
                    };
                    createResponse(responseObj, router);
                }}
            >
                {({ values }) => (
                    <Form>
                        {questionaires
                            ?.sort((a, b) => {
                                const numA = parseInt(
                                    a.Question.replace("Q", "")
                                );
                                const numB = parseInt(
                                    b.Question.replace("Q", "")
                                );
                                return numA - numB;
                            })
                            .map((question) => (
                                <RadioQ
                                    key={question.Question}
                                    question={question}
                                />
                            ))}

                        <button
                            className="mb-4 mt-4 rounded-xl bg-yellow-200 p-3"
                            type="submit"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PersonalityForm;
