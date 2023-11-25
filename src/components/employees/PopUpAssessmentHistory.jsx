import AssessmentHistory from "./AssessmentHistory";
import NoAssessResult from "./NoAssessResult";

function PopUpAssessmentHistory({ isVisible, onClose, assessment }) {
    if (!isVisible) {
        return null;
    }
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={() => onClose()}
        >
            <div className="h-[80%] w-[70%] rounded-lg bg-white">
                <div className="m-2 flex justify-between rounded bg-white p-2">
                    <p className="font-bold">Your Assessment History</p>
                    <button className="text-xl" onClick={() => onClose()}>
                        X
                    </button>
                </div>
                <div className="h-[100%] p-4">
                    {assessment.length > 0 ? (
                        <AssessmentHistory assessment={assessment} total={6} />
                    ) : (
                        <NoAssessResult />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PopUpAssessmentHistory;
