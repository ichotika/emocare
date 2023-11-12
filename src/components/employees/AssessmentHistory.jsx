import AssessmentRecord from "./AssessmentRecord";
const dayjs = require("dayjs");
function AssessmentHistory({ assessment }) {
    console.log(assessment);
    const newHistory = [];
    for (let i = 0; i < 6; i++) {
        const newTimestamp = dayjs().subtract(i, "month").startOf("month");
        let historyEntry = {
            timestamp: newTimestamp.format(),
            depressionLevel: "Not taken",
            anxietyLevel: "Not taken",
            burnoutLevel: "Not taken",
        };

        assessment.forEach((assess) => {
            const assessTimestamp = dayjs(assess.timestamp).startOf("month");
            if (newTimestamp.isSame(assessTimestamp, "month")) {
                switch (assess.assessmentType) {
                    case "depression":
                        historyEntry.depressionLevel = assess.level;
                        break;
                    case "Anxiety":
                        historyEntry.anxietyLevel = assess.level;
                        break;
                    case "burnout":
                        historyEntry.burnoutLevel = assess.level;
                        break;
                    default:
                        console.log("Unknown assessment type for:", assess);
                }
            }
        });

        newHistory.push(historyEntry);
    }

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
                {newHistory.map((history, index) => (
                    <div key={index}>
                        <AssessmentRecord
                            date={history.timestamp}
                            deprLevel={history.depressionLevel}
                            anxietyLevel={history.anxietyLevel}
                            burnoutLevel={history.burnoutLevel}
                        />
                    </div>
                ))}
            </>
        </div>
    );
}

export default AssessmentHistory;
