"use client";

function AssessmentRecord({
    date,
    anonymous,
    deprLevel,
    anxietyLevel,
    burnoutLevel,
}) {
    const createdDate = new Date(date)
    const createdMonth = createdDate.toLocaleString('default', {month: 'long'})
    return (
        <div>
            <div className="flex p-2" style={{ border: "1px solid #DDE1E6" }}>
                <p className="w-1/4">{createdMonth}</p>
                <p className="w-1/4 text-center">{deprLevel}</p>
                <p className="w-1/4 text-center">{anxietyLevel}</p>
                <p className="w-1/4 text-center">{burnoutLevel}</p>
            </div>
        </div>
    );
}

export default AssessmentRecord;
