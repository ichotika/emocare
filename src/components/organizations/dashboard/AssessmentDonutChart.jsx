"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function AssessmentDonutChart({
    assessmentData,
    assessmentsInMonthYearCount,
    depressionCount,

    burnoutCount,
    anxietyCount,
}) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ["Depression", "Burn out", "Anxiety"],
        datasets: [
            {
                label: "Employees",
                data: [depressionCount, burnoutCount, anxietyCount],
                backgroundColor: ["#2469F6", "#0A285D", "#ACC8F3"],
                borderColor: ["#2469F6", "#0A285D", "#ACC8F3"],
                borderWidth: 30,
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
        aspectRatio: 1 / 1,
        cutout: 105,
    };

    const gaugeText = {
        id: "gaugeText",
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;

            const xCenter = chart.getDatasetMeta(0).data[0].x;
            const yCenter = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.fillStyle = "black";
            ctx.font = "bold 30px Manrope, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(
                `${
                    data.datasets[0].data[0] +
                    data.datasets[0].data[1] +
                    data.datasets[0].data[2]
                }`,
                xCenter,
                yCenter - 10
            );
            ctx.fillText(`Taken`, xCenter, yCenter + 20);
        },
    };

    return (
        <div className="flex max-w-lg flex-grow gap-3">
            <div className="flex flex-col items-center">
                <p className="mb-5 text-center text-b-xl font-bold">
                    Monthly Assessment
                </p>
                <div className="chart-js-wrapper" style={{ width: "220px" }}>
                    <Doughnut
                        data={data}
                        options={options}
                        plugins={[gaugeText]}
                    />
                </div>
            </div>
        </div>
    );
}
