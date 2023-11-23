"use client";

function AssessmentRecord({
    date,
    deprLevel,
    anxietyLevel,
    burnoutLevel,
    deprScore,
    anxScore,
    burnoutScore,
}) {
    const createdDate = new Date(date);
    const createdMonth = createdDate.toLocaleString("default", {
        month: "long",
    });
    return (
        <div className="flex border-b-2 border-p-blue-6 pl-2">
            <p className="w-1/4 border-r-2 border-p-blue-6 py-3">
                {createdMonth}
            </p>
            {deprScore === "good" ? (
                <p className="w-1/4 border-b-4 border-o-success-1 bg-o-success-2 py-3 text-center">
                    {deprLevel}
                </p>
            ) : deprScore === "moderate" ? (
                <p className="w-1/4 border-b-4 border-o-joy-1 bg-o-joy-2 py-3 text-center">
                    {deprLevel}
                </p>
            ) : deprScore === "critical" ? (
                <p className="w-1/4 border-b-4 border-o-error-1 bg-o-error-2 py-3 text-center">
                    {deprLevel}
                </p>
            ) : (
                <p className="w-1/4 border-r-2 border-p-blue-6 py-3 text-center">
                    {deprLevel}
                </p>
            )}
            {anxScore === "good" ? (
                <p className="w-1/4 border-b-4 border-o-success-1 bg-o-success-2 py-3 text-center">
                    {anxietyLevel}
                </p>
            ) : anxScore === "moderate" ? (
                <p className="w-1/4 border-b-4 border-o-joy-1 bg-o-joy-2 py-3 text-center">
                    {anxietyLevel}
                </p>
            ) : anxScore === "critical" ? (
                <p className="w-1/4 border-b-4 border-o-error-1 bg-o-error-2 py-3 text-center">
                    {anxietyLevel}
                </p>
            ) : (
                <p className="w-1/4 border-r-2 border-p-blue-6 py-3 text-center">
                    {anxietyLevel}
                </p>
            )}
            {burnoutScore === "good" ? (
                <p className="w-1/4 border-b-4 border-o-success-1 bg-o-success-2 py-3 text-center">
                    {burnoutLevel}
                </p>
            ) : burnoutScore === "moderate" ? (
                <p className="w-1/4 border-b-4 border-o-joy-1 bg-o-joy-2 py-3 text-center">
                    {burnoutLevel}
                </p>
            ) : burnoutScore === "critical" ? (
                <p className="w-1/4 border-b-4 border-o-error-1 bg-o-error-2 py-3 text-center">
                    {burnoutLevel}
                </p>
            ) : (
                <p className="w-1/4 border-r-2 border-p-blue-6 py-3 text-center">
                    {burnoutLevel}
                </p>
            )}
        </div>
    );
}

export default AssessmentRecord;
