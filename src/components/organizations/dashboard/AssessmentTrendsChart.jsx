"use client";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function AssessmentTrendsChart() {
  ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Achieved',
        data: [100, 200, 300, 400, 500, 600, 700, 100, 200, 300, 400, 500, 600],
        backgroundColor: 'grey',
        // rgba(255, 99, 132, 0.5)
      },
      {
        label: 'Remaining',
        data: [700, 600, 500, 400, 300, 200, 100, 200, 300, 400, 500, 600, 700],
        backgroundColor: 'lightgrey',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
    },
  };

  return (
    <div className="basis-2/4 rounded-lg border border-gray-200 bg-white p-6 shadow ">
       <h2>Assessment Trends</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
