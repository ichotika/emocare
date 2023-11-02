import AssessmentRecord from "./AssessmentRecord";

function AssessmentHistory({ assessment }) {
    return (
        <div className="h-[80%] overflow-auto">
            <div
                className="flex p-2 font-semibold"
                style={{
                    backgroundColor: "#F2F4F8",
                    border: "1px solid #DDE1E6",
                }}
            >
                <div className="w-1/4">Date</div>
                <div className="w-1/4 text-center">Depression</div>
                <div className="w-1/4 text-center">Anxiety</div>
                <div className="w-1/4 text-center">Burnout</div>
            </div>
            <>
                {assessment.map((assess, index) => (
                    <div key={index}>
                        <AssessmentRecord
                            date={assess.assessDate}
                            deprLevel={assess.depressionLevel}
                            anxietyLevel={assess.anxietyLevel}
                            burnoutLevel={assess.burnoutLevel}
                        />
                    </div>
                ))}
            </>
        </div>
    );
}

export default AssessmentHistory;
