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
        aspectRatio: 1 / 1,
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
            ctx.fillText(`Protected`, xCenter, yCenter + 20);
        },
    };

    return (
        <div className="flex-grow items-center rounded-lg border border-gray-200 bg-white p-6 shadow ">
            <h2 className="mb-5 text-center text-xl">Workplace Wellbeing</h2>
            <div className="chart-js-wrapper -mt-14" style={{ width: "300px" }}>
                <Doughnut data={data} options={options} plugins={[gaugeText]} />
            </div>
        </div>
    );
}
