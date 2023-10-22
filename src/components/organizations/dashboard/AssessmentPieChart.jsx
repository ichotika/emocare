"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import AssessmentTaken from "./AssessmentTaken";

export default function AssessmentPieChart() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [
            "Depression / Anxious",
            "Burnout / Overwork",
            "Creative Block",
        ],
        datasets: [
            {
                label: "Employees",
                data: [60, 30, 10],
                backgroundColor: ["blue", "red", "yellow"],
                borderColor: ["blue", "red", "yellow"],
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
                display: true,
            },
        },
    };

    return (
        <div className="mt-5 flex max-w-lg flex-grow gap-3">
            <div className="flex-grow">
                <Pie data={data} width={190} height={190} options={options} />
            </div>
            <AssessmentTaken />
        </div>
    );
}
