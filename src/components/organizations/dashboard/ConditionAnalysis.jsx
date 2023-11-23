"use client";
import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea, Bar } from "react-chartjs-2";

export default function ConditionAnalysis() {
    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

    // pola area
    const data = {
        labels: [
            "Depression / Anxious",
            "Burnout / Overwork",
            "Creative Block",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [50, 19, 11, 60],
                backgroundColor: [
                    "blue",
                    "rgba(211,211,211, 0.7)",
                    "rgba(200,208,200, 0.7)",
                    "rgba(176,176,176, 0.7)",
                    "rgba(136,136,136, 0.7)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
        },
    };

    // stack bar
    const stackOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        indexAxis: "y",
    };

    const stackData = {
        labels: ["Depression / Anxious"],
        datasets: [
            {
                label: "Safe",
                data: [90],
                backgroundColor: "green",
            },
            {
                label: "Moderate",
                data: [5],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [5],
                backgroundColor: "red",
            },
        ],
    };

    const stackData2 = {
        labels: ["Burnout / Overwork"],
        datasets: [
            {
                label: "Safe",
                data: [50],
                backgroundColor: "green",
            },
            {
                label: "Moderate",
                data: [30],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [20],
                backgroundColor: "red",
            },
        ],
    };

    const stackData3 = {
        labels: ["Creative Block"],
        datasets: [
            {
                label: "Safe",
                data: [20],
                backgroundColor: "green",
            },
            {
                label: "Moderate",
                data: [30],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [50],
                backgroundColor: "red",
            },
        ],
    };

    const stackData4 = {
        labels: ["Time Management"],
        datasets: [
            {
                label: "Safe",
                data: [20],
                backgroundColor: "green",
            },
            {
                label: "Moderate",
                data: [30],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [50],
                backgroundColor: "red",
            },
        ],
    };

    return (
        <div className="block max-w-lg border border-gray-200 bg-white p-6 shadow">
            <PolarArea options={options} data={data} />

            {/* <p>Depression</p> */}
            <Bar options={stackOptions} data={stackData} />
            <Bar options={stackOptions} data={stackData2} />
            <Bar options={stackOptions} data={stackData3} />
            <Bar options={stackOptions} data={stackData4} />
        </div>
    );
}
