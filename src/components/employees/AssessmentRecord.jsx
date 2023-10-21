"use client";

function AssessmentRecord({
    date,
    anonymous,
    deprLevel,
    anxietyLevel,
    burnoutLevel,
}) {
    return (
        <div>
            <div className="flex p-2" style={{ border: "1px solid #DDE1E6" }}>
                <p className="w-1/5">{date}</p>
                <p className="w-1/5 text-center">{anonymous}</p>
                <p className="w-1/5 text-center">{deprLevel}</p>
                <p className="w-1/5 text-center">{anxietyLevel}</p>
                <p className="w-1/5 text-center">{burnoutLevel}</p>
            </div>
        </div>
    );
}

export default AssessmentRecord;
