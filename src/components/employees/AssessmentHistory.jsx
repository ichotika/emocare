import AssessmentRecord from "./AssessmentRecord";

function AssessmentHistory({ assessment }) {
    return (
        <div>
            <div
                className="flex p-2 font-semibold"
                style={{
                    backgroundColor: "#F2F4F8",
                    border: "1px solid #DDE1E6",
                }}
            >
                <div className="w-1/5">Date</div>
                <div className="w-1/5 text-center">Anonymity</div>
                <div className="w-1/5 text-center">Depression</div>
                <div className="w-1/5 text-center">Anxiety</div>
                <div className="w-1/5 text-center">Burnout</div>
            </div>
            <>
                {assessment.map((assess) => (
                    <div key={assess.aid}>
                        <AssessmentRecord
                            date={assess.assessDate}
                            anonymous={assess.anonymous}
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
