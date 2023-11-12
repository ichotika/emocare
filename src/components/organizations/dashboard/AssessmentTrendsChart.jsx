import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export default function AssessmentTrendsChart({ assessmentData }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const assessmentsByYear = {};

  assessmentData.forEach((assessment) => {
    const timestamp = new Date(assessment.timestamp);
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth();
    const key = `${year}-${month}`;

    if (!assessmentsByYear[year]) {
      assessmentsByYear[year] = new Array(12).fill(0);
    }

    assessmentsByYear[year][month]++;
  });

  
  const assessmentArrayByYear = Object.entries(assessmentsByYear).map(
    ([year, counts]) => ({
      year: Number(year),
      counts,
    })
  );

  
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const colors = ["#2469F6", "#0A285D", "#ACC8F3"]; 

  const data = {
    labels,
    datasets: assessmentArrayByYear.map((yearData, index) => ({
      label: yearData.year.toString(),
      data: yearData.counts,
      backgroundColor: colors[index % colors.length],
      borderColor: colors[index % colors.length],
      pointRadius: 0, 
      pointHitRadius: 0, 
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: 'end',
        display: true,
        labels: {
          usePointStyle: true, 
        },
      },
      datalabels: {
        display: false, 
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#F2F4F7", 
          display: true, 
        },
      },
    }
  };

  return (
    <div style={{width:"380px",  height:"350px"}} 
    className="basis-2/4 rounded-lg border border-gray-200 bg-white p-6 shadow ">
      <h2 className="text-xl mb-5 ">Assessment Trends</h2>
      <Line options={options} data={data} />
    </div>
  );
}
