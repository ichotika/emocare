"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


export default function AssessmentDonutChart({
    depressionCount, 
    burnoutCount,
    anxietyCount
}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [
            "Depression",
            "Burn out",
            "Anxiety",
        ],
        datasets: [
            {
                label: "Employees",
                data: [depressionCount, burnoutCount, anxietyCount],
                backgroundColor: ["#2469F6", "#0A285D", "#ACC8F3"],
                borderColor: ["#2469F6", "#0A285D", "#ACC8F3"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: "right",
            },
            labels: {
                display: true,
            },
            datalabels: {
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
          } = chart;
    
          const xCenter = chart.getDatasetMeta(0).data[0].x;
          const yCenter = chart.getDatasetMeta(0).data[0].y;
    
          ctx.save();
          ctx.fillStyle = "grey";
          ctx.font = "bold 30px serif";
          ctx.textAlign = "center";
          ctx.fillText(`${data.datasets[0].data[0]+data.datasets[0].data[1]+data.datasets[0].data[2]}`, xCenter, yCenter - 10);
          ctx.fillText(`Taken`, xCenter, yCenter+20);
        },
      };

    return (
        <div className="h-200 flex max-w-lg flex-grow gap-3">
            <div style={{width:"330px"}} className="flex flex-col items-center">

                <h2 className="text-xl mb-5">Monthly Assessment</h2>
                <Doughnut data={data} width={200} height={200} options={options} plugins={[gaugeText]}/> 
            </div>
        </div>
    );
}




