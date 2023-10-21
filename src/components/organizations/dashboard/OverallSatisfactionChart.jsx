"use client";
import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

export default function OverallSatisfactionChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Achieved', 'Remaining'],
    datasets: [{
      label: 'Employee',
      data: [100, 67],
      backgroundColor: ['grey', 'lightgrey'],
      borderColor: ['white'],
      circumference: 180,
      rotation: 270
    }]
  };

  const options = {
   
  };

  const gaugeText = {
    id: 'gaugeText',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const { ctx, data, chartArea: {top, bottom, left, right, width, height} } = chart;
    
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;

    ctx.save();
    ctx.fillStyle = 'grey';
    ctx.font = 'bold 30px serif';
    ctx.textAlign = 'center';
    // ctx.textBaseline = 'baseline';
    ctx.fillText(`${data.datasets[0].data[1]}%`, xCenter, yCenter-10)
    }
  }

  return (
    <div className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow ">
      <h2>Overall Satisfaction</h2>
      <Doughnut data={data} options={options} plugins={[gaugeText]}/>
    </div>
  );
}
