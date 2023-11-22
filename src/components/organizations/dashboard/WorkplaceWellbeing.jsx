import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function WorkplaceWellbeing({ assessmentData, employee }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const targetYear = 2023;
    const targetMonth = 9; // Month 10

    const assessmentsInMonthYear = assessmentData?.filter((assessment) => {
        const assessmentTimestamp = new Date(assessment.createdAt);
        return (
            assessmentTimestamp.getMonth() === targetMonth &&
            assessmentTimestamp.getFullYear() === targetYear
        );
    });

    const distinctUserIds = [
        ...new Set(
            assessmentsInMonthYear.map((assessment) => {
                return assessment.userId;
            })
        ),
    ];
    const wellBeingRate = (
        (distinctUserIds.length / employee.length) *
        100
    ).toFixed(0);

    const data = {
        labels: ["Satisfaction", "Remaining"],
        datasets: [
            {
                label: "Satisfaction",
                data: [wellBeingRate, 100 - wellBeingRate],
                backgroundColor: ["#ED672C", "#FDF4E8"],
                borderColor: ["white"],
                circumference: 270,
                rotation: 225,
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
        aspectRatio: 1 / 1,
        cutout: 100,
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
            ctx.fillStyle = "black";
            ctx.font = "bold 30px Manrope, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`${data.datasets[0].data[0]}%`, xCenter, yCenter - 10);
            ctx.fillText(`Protected`, xCenter, yCenter + 20);
        },
    };

    return (
        <div className="items-center rounded-lg border border-gray-200 bg-white p-6 shadow xl:flex xl:flex-col xl:justify-center">
            <p className="mb-5 text-center text-b-xl font-bold">
                Workplace Wellbeing
            </p>
            <div className="chart-js-wrapper pt-1" style={{ width: "260px" }}>
                <Doughnut data={data} options={options} plugins={[gaugeText]} />
            </div>
        </div>
    );
}
