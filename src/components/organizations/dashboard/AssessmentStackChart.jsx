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

function calculateRatio(score, assessmentType) {
    let level;
    switch (assessmentType) {
        case "depression":
            level = score >= 15 ? "Critical" : score >= 5 ? "Moderate" : "Good";
            break;
        case "Anxiety":
            level = score >= 10 ? "Critical" : score >= 5 ? "Moderate" : "Good";
            break;
        case "burnout":
            level =
                score >= 50 ? "Critical" : score >= 19 ? "Moderate" : "Good";
            break;
        // default case if needed
    }
    return level;
}

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
        const levelDescription = calculateRatio(
            assessment.score,
            assessment.assessmentType
        );
        switch (levelDescription) {
            case "Critical":
                depressionCriticalAssessments.push(assessment);
                break;
            case "Moderate":
                depressionDecentAssessments.push(assessment);
                break;
            case "Good":
                depressionGoodAssessments.push(assessment);
                break;
        }
    });

    const depressionAssessmentsCount = depressionAssessments.length;
    const depressionDecentPercent = (
        (depressionDecentAssessments.length / depressionAssessmentsCount) *
        100
    ).toFixed(0);
    const depressionGoodPercent = (
        (depressionGoodAssessments.length / depressionAssessmentsCount) *
        100
    ).toFixed(0);

    //burnout
    const burnoutCriticalAssessments = [];
    const burnoutDecentAssessments = [];
    const burnoutGoodAssessments = [];

    burnoutAssessments.forEach((assessment) => {
        const levelDescription = calculateRatio(
            assessment.score,
            assessment.assessmentType
        );
        switch (levelDescription) {
            case "Critical":
                burnoutCriticalAssessments.push(assessment);
                break;
            case "Moderate":
                burnoutDecentAssessments.push(assessment);
                break;
            case "Good":
                burnoutGoodAssessments.push(assessment);
                break;
        }
    });

    const burnoutAssessmentsCount = burnoutAssessments.length;
    const burnoutDecentPercent = (
        (burnoutDecentAssessments.length / burnoutAssessmentsCount) *
        100
    ).toFixed(0);
    const burnoutGoodPercent = (
        (burnoutGoodAssessments.length / burnoutAssessmentsCount) *
        100
    ).toFixed(0);

    //anxiety
    const anxietyCriticalAssessments = [];
    const anxietyDecentAssessments = [];
    const anxietyGoodAssessments = [];

    anxietyAssessments.forEach((assessment) => {
        const levelDescription = calculateRatio(
            assessment.score,
            assessment.assessmentType
        );
        switch (levelDescription) {
            case "Critical":
                anxietyCriticalAssessments.push(assessment);
                break;
            case "Moderate":
                anxietyDecentAssessments.push(assessment);
                break;
            case "Good":
                anxietyGoodAssessments.push(assessment);
                break;
        }
    });

    const anxietyAssessmentsCount = anxietyAssessments.length;
    const anxietyDecentPercent = (
        (anxietyDecentAssessments.length / anxietyAssessmentsCount) *
        100
    ).toFixed(0);
    const anxietyGoodPercent = (
        (anxietyGoodAssessments.length / anxietyAssessmentsCount) *
        100
    ).toFixed(0);

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
        aspectRatio: false,

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
                data: [100 - depressionGoodPercent - depressionDecentPercent],
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
                data: [100 - anxietyGoodPercent - anxietyDecentPercent],
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
                data: [100 - burnoutGoodPercent - burnoutDecentPercent],
                backgroundColor: "#FDF5F7",
                borderColor: "#D72E41",
                borderWidth: 1,
                borderSkipped: false,
            },
        ],
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <div className=" flex justify-between">
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
                <div className="chart-js-wrapper-stack">
                    <Bar options={options} data={data} />
                </div>
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
                <div className="chart-js-wrapper-stack">
                    <Bar options={options} data={data2} />
                </div>
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
                <div className="chart-js-wrapper-stack">
                    <Bar options={options} data={data3} />
                </div>
            </div>
        </div>
    );
}
