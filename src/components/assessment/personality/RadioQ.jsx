import { Field, useFormikContext } from "formik";
import { useEffect } from "react";
import styled from "styled-components";
const TableRow = styled.div`
    display: grid;
    grid-template-columns: 8% 26% 8% 8% 8% 8% 8% 26%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    border-bottom: 2px solid #c7c8d1;
    border-left: 2px solid #c7c8d1;
    border-right: 2px solid #c7c8d1;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: black;
    padding: 0.75rem 0;
    ${(props) =>
        props.question === "Q32"
            ? `border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;`
            : `border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;`}
`;
function RadioQ({ question }) {
    const { setFieldValue } = useFormikContext();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown") {
                setFieldValue(question.Question.toLowerCase(), "3");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setFieldValue, question.Question]);
    return (
        <TableRow question={question.Question}>
            <div className="ms-4 text-b-sm font-normal" id={question.Question}>
                {question.Question}
            </div>
            <div className="flex items-center justify-start text-b-sm font-normal">
                {question.MinDefinition}
            </div>
            <label className="flex flex-col items-center justify-center">
                <Field
                    type="radio"
                    name={question.Question.toLowerCase()}
                    value="1"
                />
            </label>
            <label className="flex flex-col items-center justify-center">
                <Field
                    type="radio"
                    name={question.Question.toLowerCase()}
                    value="2"
                />
            </label>
            <label className="flex flex-col items-center justify-center">
                <Field
                    type="radio"
                    name={question.Question.toLowerCase()}
                    value="3"
                />
            </label>
            <label className="flex flex-col items-center justify-center">
                <Field
                    type="radio"
                    name={question.Question.toLowerCase()}
                    value="4"
                />
            </label>
            <label className="flex flex-col items-center justify-center">
                <Field
                    type="radio"
                    name={question.Question.toLowerCase()}
                    value="5"
                />
            </label>
            <div className="flex items-center justify-start text-b-sm font-normal">
                {question.MaxDefinition}
            </div>
        </TableRow>
    );
}

export default RadioQ;
