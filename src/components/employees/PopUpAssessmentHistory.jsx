import AssessmentHistory from "./AssessmentHistory";
import NoAssessResult from "./NoAssessResult";

function PopUpAssessmentHistory({ isVisible, onClose, assessment }) {
    if(!isVisible){
        return null;
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={() => onClose()}>
        <div className='w-[70%] h-[80%] bg-white rounded-lg'>
            <div className='bg-white m-2 p-2 rounded flex justify-between'>
                <p className='font-bold'>Your Assessment History</p>
                <button className='text-xl' onClick={() => onClose()}>X</button>
            </div>
            <div className="p-4 h-[100%]">
                {assessment.length > 0 ? (
                    <AssessmentHistory assessment={assessment} />
                ) : (
                    <NoAssessResult />
                )}
            </div>
        </div>
    </div>
  )
}

export default PopUpAssessmentHistory