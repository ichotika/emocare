import AssessmentRecord from "./AssessmentRecord";
import styled from "styled-components";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-0);
`;

const TableHeader = styled.div`
    background-color: var(--color-grey-100);
    border-bottom: 1px solid var(--color-grey-200);
    color: var(--color-grey-600);
`;

const dayjs = require("dayjs");

function AssessmentHistory({ assessment }) {
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
            const assessTimestamp = dayjs(assess.createdAt).startOf("month");
            if (newTimestamp.isSame(assessTimestamp, "month")) {
                switch (assess.assessmentType) {
                    case "depression":
                        historyEntry.depressionLevel = assess.level;
                        historyEntry.scoreDeprLevel =
                            assess.score >= 0 && assess.score <= 4
                                ? "good"
                                : assess.score >= 5 && assess.score <= 14
                                ? "moderate"
                                : assess.score >= 15 && assess.score <= 27
                                ? "critical"
                                : "na";
                        break;
                    case "Anxiety":
                        historyEntry.anxietyLevel = assess.level;
                        historyEntry.scoreAnxLevel =
                            assess.score >= 0 && assess.score <= 4
                                ? "good"
                                : assess.score >= 5 && assess.score <= 9
                                ? "moderate"
                                : assess.score >= 10 && assess.score <= 21
                                ? "critical"
                                : "na";
                        break;
                    case "burnout":
                        historyEntry.burnoutLevel = assess.level;
                        historyEntry.scoreBurnoutLevel =
                            assess.score >= 15 && assess.score <= 18
                                ? "good"
                                : assess.score >= 19 && assess.score <= 49
                                ? "moderate"
                                : assess.score >= 50 && assess.score <= 75
                                ? "critical"
                                : "na";
                        break;
                    default:
                    // console.log("Unknown assessment type for:", assess);
                }
            }
        });

        newHistory.push(historyEntry);
    }

    return (
        <Table role="table" className="overflow-auto rounded-lg">
            <TableHeader role="row" className="flex p-2 font-semibold">
                <div className="w-1/4">Date</div>
                <div className="w-1/4 text-center">Depression</div>
                <div className="w-1/4 text-center">Anxiety</div>
                <div className="w-1/4 text-center">Burnout</div>
            </TableHeader>
            <>
                {newHistory.map((history, index) => (
                    <div key={index}>
                        <AssessmentRecord
                            date={history.timestamp}
                            deprLevel={history.depressionLevel}
                            anxietyLevel={history.anxietyLevel}
                            burnoutLevel={history.burnoutLevel}
                            deprScore={history.scoreDeprLevel}
                            anxScore={history.scoreAnxLevel}
                            burnoutScore={history.scoreBurnoutLevel}
                        />
                    </div>
                ))}
            </>
        </Table>
    );
}

export default AssessmentHistory;
