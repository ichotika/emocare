import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function OverallSatisfactionChart({ satisfaction }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const totalSatisfactionScore = satisfaction[0]?.satisfactionScore

  const data = {
    labels: ["Satisfaction", "Remaining"],
    datasets: [
      {
        label: "Satisfaction",
        data: [totalSatisfactionScore, 100 - totalSatisfactionScore], 
        backgroundColor: ["grey", "lightgrey"],
        borderColor: ["white"],
        circumference: 180,
        rotation: 270,
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
      ctx.font = "bold 30px serif";
      ctx.textAlign = "center";
      ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter, yCenter - 10);
    },
  };

  return (
    <div className="flex-grow basis-1/5 rounded-lg border border-gray-200 bg-white p-6 shadow">
      <h2>Overall Satisfaction</h2>
      <Doughnut
        width={200}
        height={200}
        data={data}
        options={options}
        plugins={[gaugeText]}
      />
    </div>
  );
}
