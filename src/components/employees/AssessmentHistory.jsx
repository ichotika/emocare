import AssessmentRecord from "./AssessmentRecord"

function AssessmentHistory() {
  return (
    <div>
      <div className="flex p-2 font-semibold" style={{backgroundColor: '#F2F4F8', border:'1px solid #DDE1E6'}}>
        <div className="w-1/5">Date</div>
        <div className="w-1/5 text-center">Anonymity</div>
        <div className="w-1/5 text-center">Depression</div>
        <div className="w-1/5 text-center">Anxiety</div>
        <div className="w-1/5 text-center">Burnout</div>
      </div>
      <AssessmentRecord date={'Oct 10, 2023'} anonymous={'Yes'} deprLevel={'Moderate'} anxietyLevel={'Mild'} burnoutLevel={'Mild'}/>
      <AssessmentRecord date={'Sep 10, 2023'} anonymous={'Yes'} deprLevel={'Moderate'} anxietyLevel={'Mild'} burnoutLevel={'Mild'}/>
      <AssessmentRecord date={'Aug 10, 2023'} anonymous={'Yes'} deprLevel={'Moderate'} anxietyLevel={'Mild'} burnoutLevel={'Mild'}/>
    </div>
  )
}

export default AssessmentHistory
