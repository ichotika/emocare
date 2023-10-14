import Header from "@/components/organizations/Header";
import AssessmentHistory from "@/components/employees/AssessmentHistory";
import HalfDoughnutChart from "@/components/employees/HalfDoughnutChart";
import DoughnutChart from "@/components/employees/DoughnutChart";
import PersonalityType from "@/components/employees/PersonalityType";
import MoodSelector from "@/components/employees/MoodSelector";

export default function page() {
  return (
    <div style={{backgroundColor: '#F5F5F5'}}>
        <header>
            <h1>Employee Dashboard</h1>
        </header>
        <div style={{display: 'flex', gap: '1rem'}}>
          <HalfDoughnutChart headtitle={'Depression'} levelText={'Moderate'} levelNum={'12'} />
          <HalfDoughnutChart headtitle={'Anxiety'} levelText={'Mild'} levelNum={'5'} />
          <HalfDoughnutChart headtitle={'Burnout'} levelText={'High'} levelNum={'17'} />
        </div>

        <div className="p-5">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Your Assessment History</h2>
            <a href="#">View all</a>
          </div>
          <AssessmentHistory />
        </div>

        <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Education</h2>
            <a href="#">View all</a>
          </div>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <DoughnutChart categoryTitle={'All'} percentCompleted={'35%'} />
            <DoughnutChart categoryTitle={'Resource'} percentCompleted={'87%'} />
            <DoughnutChart categoryTitle={'Knowledge'} percentCompleted={'50%'} />
            <DoughnutChart categoryTitle={'Maintenance'} percentCompleted={'65%'} />
          </div>
        </div>
    </div>
  );
}
