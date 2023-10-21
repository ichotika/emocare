import WelcomePanel from "@/components/organizations/dashboard/WelcomePanel";
import OverallCard from "@/components/organizations/dashboard/OverallCard";
import OverallSatisfactionChart from "@/components/organizations/dashboard/OverallSatisfactionChart";
import MonthlyAssessment from "@/components/organizations/dashboard/MonthlyAssessment";
import AssessmentTrendsChart from "@/components/organizations/dashboard/AssessmentTrendsChart";
import Feedbacks from "@/components/organizations/dashboard/Feedbacks";
import ConditionAnalysis from "@/components/organizations/dashboard/ConditionAnalysis";
import Silder from "@/components/organizations/dashboard/Silder";


export default function Home() {
  const gaugeValue = 70;
  const gaugeMaxValue = 100;

  return (
    <>
      <WelcomePanel />
      <OverallCard/>
      <div className="flex">
        <OverallSatisfactionChart value={gaugeValue} maxValue={gaugeMaxValue}/>
        <MonthlyAssessment/>
      </div>
      <div className="flex">
        <AssessmentTrendsChart/>
        <Feedbacks/>
      </div> 
      <div className="mobile">
        <ConditionAnalysis/>
      </div>
      <Silder/>
    </>
  );
}
