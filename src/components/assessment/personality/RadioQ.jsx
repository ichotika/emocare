import { Field } from "formik";

function RadioQ({ question }) {
  return (
    <>
      <div className="pb-1 pt-3" id={question.Question}>
        {question.Question}
      </div>
      <div className="grid grid-cols-3 gap-4 pb-3 pt-3 border-2 border-slate-700 m-auto justify-items-center">
        <div className="flex text-center p-3 m-auto">
          {question.MinDefinition}
        </div>
        <div
          role="group"
          aria-labelledby={`${question.Question}-gruop`}
          className="flex gap-2 p-3">
          <label className="flex flex-col justify-center items-center">
            <Field
              type="radio"
              name={question.Question.toLowerCase()}
              value="1"
            />
            1
          </label>
          <label className="flex flex-col justify-center items-center">
            <Field
              type="radio"
              name={question.Question.toLowerCase()}
              value="2"
            />
            2
          </label>
          <label className="flex flex-col justify-center items-center">
            <Field
              type="radio"
              name={question.Question.toLowerCase()}
              value="3"
            />
            3
          </label>
          <label className="flex flex-col justify-center items-center">
            <Field
              type="radio"
              name={question.Question.toLowerCase()}
              value="4"
            />
            4
          </label>
          <label className="flex flex-col justify-center items-center">
            <Field
              type="radio"
              name={question.Question.toLowerCase()}
              value="5"
            />
            5
          </label>
        </div>
        <div className="flex text-center  p-3 m-auto">
          {question.MaxDefinition}
        </div>
      </div>
    </>
  );
}

export default RadioQ;
