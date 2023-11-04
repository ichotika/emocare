"use client";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

export default function AssessmentStackChart({
    depressionAssessments,
    burnoutAssessments,
    anxietyAssessments,
}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ChartDataLabels
    );

    // depression
    const depressionCriticalAssessments = [];
    const depressionDecentAssessments = [];
    const depressionGoodAssessments = [];

    depressionAssessments.forEach((assessment) => {
        const score_description = assessment.score_description;
        switch (score_description) {
            case "Critical":
                depressionCriticalAssessments.push(assessment);
                break;
            case "Decent":
                depressionDecentAssessments.push(assessment);
                break;
            case "Good":
                depressionGoodAssessments.push(assessment);
                break;
        }
    });

    const depressionAssessmentsCount = depressionAssessments.length;
    const depressionCriticalPercent =
       ((depressionCriticalAssessments.length / depressionAssessmentsCount) *
        100).toFixed(0);
    const depressionDecentPercent =
        ((depressionDecentAssessments.length / depressionAssessmentsCount) * 100).toFixed(0);
    const depressionGoodPercent =
        ((depressionGoodAssessments.length / depressionAssessmentsCount) * 100).toFixed(0);

    //burnout
    const burnoutCriticalAssessments = [];
    const burnoutDecentAssessments = [];
    const burnoutGoodAssessments = [];

    
    burnoutAssessments.forEach((assessment) => {
        const score_description = assessment.score_description;
        switch (score_description) {
            case "Critical":
                burnoutCriticalAssessments.push(assessment);
                break;
            case "Decent":
                burnoutDecentAssessments.push(assessment);
                break;
            case "Good":
                burnoutGoodAssessments.push(assessment);
                break;
        }
    });

    const burnoutAssessmentsCount = burnoutAssessments.length;
    const burnoutCriticalPercent =
        ((burnoutCriticalAssessments.length / burnoutAssessmentsCount) * 100).toFixed(0);
    const burnoutDecentPercent =
        ((burnoutDecentAssessments.length / burnoutAssessmentsCount) * 100).toFixed(0);
    const burnoutGoodPercent =
        ((burnoutGoodAssessments.length / burnoutAssessmentsCount) * 100).toFixed(0);

    //anxiety
    const anxietyCriticalAssessments = [];
    const anxietyDecentAssessments = [];
    const anxietyGoodAssessments = [];

    anxietyAssessments.forEach((assessment) => {
        const score_description = assessment.score_description;
        switch (score_description) {
            case "Critical":
                anxietyCriticalAssessments.push(assessment);
                break;
            case "Decent":
                anxietyDecentAssessments.push(assessment);
                break;
            case "Good":
                anxietyGoodAssessments.push(assessment);
                break;
        }
    });

    const anxietyAssessmentsCount = anxietyAssessments.length;
    const anxietyCriticalPercent =
        ((anxietyCriticalAssessments.length / anxietyAssessmentsCount) * 100).toFixed(0);
    const anxietyDecentPercent =
        ((anxietyDecentAssessments.length / anxietyAssessmentsCount) * 100).toFixed(0);
    const anxietyGoodPercent =
        ((anxietyGoodAssessments.length / anxietyAssessmentsCount) * 100).toFixed(0);

    const width = 250;
    const height = 40;

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: "black",
                display: true,
                align: "center",
                anchor: "center",
                formatter: function (value, context) {
                    if (value < 1) {
                        return "";
                    }
                    return value + "%";
                },
            },
        },

        responsive: true,
        scales: {
            x: {
                stacked: true,
                display: false,
            },
            y: {
                stacked: true,
                display: false,
            },
        },
        indexAxis: "y",
    };

    const labels = ["Depression"];
    const data = {
        labels,
        datasets: [
            {
                label: "Good",
                data: [depressionGoodPercent],
                backgroundColor: "#F7FDFB",
                borderColor: "#58BD98",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Decent",
                data: [depressionDecentPercent],
                backgroundColor: "#FFFDF6",
                borderColor: "#EFC242",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Critical",
                data: [depressionCriticalPercent],
                backgroundColor: "#FDF5F7",
                borderColor: "#D72E41",
                borderWidth: 1,
                borderSkipped: false,
            },
        ],
    };

    const data2 = {
        labels: ["Anxiety"],
        datasets: [
            {
                label: "Good",
                data: [burnoutGoodPercent],
                backgroundColor: "#F7FDFB",
                borderColor: "#58BD98",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Decent",
                data: [burnoutDecentPercent],
                backgroundColor: "#FFFDF6",
                borderColor: "#EFC242",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Critical",
                data: [burnoutCriticalPercent],
                backgroundColor: "#FDF5F7",
                borderColor: "#D72E41",
                borderWidth: 1,
                borderSkipped: false,
            },
        ],
    };

    const data3 = {
        labels: ["Burnout"],
        datasets: [
            {
                label: "Good",
                data: [anxietyGoodPercent],
                backgroundColor: "#F7FDFB",
                borderColor: "#58BD98",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Decent",
                data: [anxietyDecentPercent],
                backgroundColor: "#FFFDF6",
                borderColor: "#EFC242",
                borderWidth: 1,
                borderSkipped: false,
            },
            {
                label: "Critical",
                data: [anxietyCriticalPercent],
                backgroundColor: "#FDF5F7",
                borderColor: "#D72E41",
                borderWidth: 1,
                borderSkipped: false,
            },
        ],
    };

    return (
        <div className="flex max-w-lg flex-col">
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div
                            style={{ backgroundColor: "#2469F6" }}
                            className="mr-2 h-4 w-4"
                        ></div>
                        <p>Depression</p>
                    </div>
                    <p
                        style={{
                            backgroundColor: "#F6F9FE",
                            padding: "5px",
                            borderRadius: "10%",
                            color: "#387AF6",
                        }}
                    >
                        {depressionAssessments.length} emp
                    </p>
                </div>
                <Bar
                    width={width}
                    height={height}
                    options={options}
                    data={data}
                />
            </div>

            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div
                            style={{ backgroundColor: "#ACC8F3" }}
                            className="mr-2 h-4 w-4"
                        ></div>
                        <p>Anxiety</p>
                    </div>
                    <p
                        style={{
                            backgroundColor: "#F6F9FE",
                            padding: "5px",
                            borderRadius: "10%",
                            color: "#387AF6",
                        }}
                    >
                        {anxietyAssessments.length} emp
                    </p>
                </div>

                <Bar
                    width={width}
                    height={height}
                    options={options}
                    data={data2}
                />
            </div>

            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div
                            style={{ backgroundColor: "#0A285D" }}
                            className="mr-2 h-4 w-4"
                        ></div>
                        <p>Burnout</p>
                    </div>
                    <p
                        style={{
                            backgroundColor: "#F6F9FE",
                            padding: "5px",
                            borderRadius: "10%",
                            color: "#387AF6",
                        }}
                    >
                        {burnoutAssessments.length} emp
                    </p>
                </div>
                <Bar
                    width={width}
                    height={height}
                    options={options}
                    data={data3}
                />
            </div>
        </div>
    );
}
