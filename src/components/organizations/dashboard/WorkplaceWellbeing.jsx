import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function WorkplaceWellbeing({ assessmentData, employee }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // fix : distinct ppl take accessment vs all

  const targetYear = 2023;
  const targetMonth = 9; // Month 10

  const assessmentsInMonthYear = assessmentData.filter(assessment => {
  const assessmentTimestamp = new Date(assessment.timestamp);
  return (
    assessmentTimestamp.getMonth() === targetMonth &&
    assessmentTimestamp.getFullYear() === targetYear
  );
});

const distinctUserIds = [...new Set(assessmentsInMonthYear.map(assessment => assessment.userid))];


const wellBeingRate = distinctUserIds.length/employee.length*100


  const data = {
    labels: ["Satisfaction", "Remaining"],
    datasets: [
      {
        label: "Satisfaction",
        data: [wellBeingRate, 100 - wellBeingRate], 
        backgroundColor: ["#ED672C", "#FDF4E8"],
        borderColor: ["white"],
        circumference: 220,
        rotation: 250,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    cutout: 120, 
  };

  const gaugeText = {
    id: "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;

      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.fillStyle = "grey";
      ctx.font = "bold 25px serif";
      ctx.textAlign = "center";
      ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter, yCenter - 10);
      ctx.fillText(`Protected`, xCenter, yCenter+20);
    },
  };

  return (
    <div style={{width:"384px", 
    '@media (min-width: 768px)': {
      height: '150px',
    },

    }} className="h-200 rounded-lg border border-gray-200 bg-white p-6 shadow flex flex-grow basis-2/5 w-64
    flex-col">
   

      <h2 className="text-xl mb-5">Workplace Wellbeing</h2>
      <Doughnut className="flex-grow"
        width={200}
        height={200}
        data={data}
        options={options}
        plugins={[gaugeText]}
      >
      </Doughnut>
    </div>



  );
}
