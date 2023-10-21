"use client";
import React from 'react';
import AssessmentPieChart from './AssessmentPieChart';
import AssessmentTaken from './AssessmentTaken';
import AssessmentStackChart from './AssessmentStackChart';


export default function MonthlyAssessment() {
  

  return (
    <div className="basis-2/4 flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow ">
      <div className='flex flex-grow'>
        
       <div>
        <h2>Monthly Assessment</h2>
          <AssessmentPieChart />
            
       </div>
       <div>
          
       </div>
       <div>
        <AssessmentStackChart />
       </div>
       </div>
    </div>
  )
}
