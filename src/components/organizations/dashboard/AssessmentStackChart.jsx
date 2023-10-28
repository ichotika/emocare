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
    anxietyAssessments
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
    
    depressionAssessments.forEach(assessment => {
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
    const depressionCriticalPercent = depressionCriticalAssessments.length/depressionAssessmentsCount*100;
    const depressionDecentPercent = depressionDecentAssessments.length/depressionAssessmentsCount*100;
    const depressionGoodPercent = depressionGoodAssessments.length/depressionAssessmentsCount*100;


    //burnout
    const burnoutCriticalAssessments = [];
    const burnoutDecentAssessments = [];
    const burnoutGoodAssessments = [];
    
    console.log("burnoutAssessments", burnoutAssessments)
    burnoutAssessments.forEach(assessment => {
        console.log("burnoutAssessments", assessment)
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
    const burnoutCriticalPercent = burnoutCriticalAssessments.length/burnoutAssessmentsCount*100;
    const burnoutDecentPercent = burnoutDecentAssessments.length/burnoutAssessmentsCount*100;
    const burnoutGoodPercent = burnoutGoodAssessments.length/burnoutAssessmentsCount*100;


    //anxiety
    const anxietyCriticalAssessments = [];
    const anxietyDecentAssessments = [];
    const anxietyGoodAssessments = [];
    
    anxietyAssessments.forEach(assessment => {
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
    const anxietyCriticalPercent = anxietyCriticalAssessments.length/anxietyAssessmentsCount*100;
    const anxietyDecentPercent = anxietyDecentAssessments.length/anxietyAssessmentsCount*100;
    const anxietyGoodPercent = anxietyGoodAssessments.length/anxietyAssessmentsCount*100;

    
    
    const width = 250;
    const height = 40;

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: "black",
                font: {
                    weight: "bold",
                },
                display: true,
                align: "center",
                anchor: "center",
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
                backgroundColor: "green",
            },
            {
                label: "Decent",
                data: [depressionDecentPercent],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [depressionCriticalPercent],
                backgroundColor: "red",
            },
        ],
    };


    const data2 = {
        labels: ["Anxiety"],
        datasets: [
            {
                label: "Good",
                data: [burnoutGoodPercent],
                backgroundColor: "green",
            },
            {
                label: "Decent",
                data: [burnoutDecentPercent],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [burnoutCriticalPercent],
                backgroundColor: "red",
            },
        ],
    };


    const data3 = {
        labels: ["Burnout"],
        datasets: [
            {
                label: "Good",
                data: [anxietyGoodPercent],
                backgroundColor: "green",
            },
            {
                label: "Decent",
                data: [anxietyDecentPercent],
                backgroundColor: "yellow",
            },
            {
                label: "Critical",
                data: [anxietyCriticalPercent],
                backgroundColor: "red",
            },
        ],
    };

    return (
        <div className="mt-3 max-w-lg">
            <div>
                <p>Depression</p>
                <Bar
                    width={width}
                    height={height}
                    options={options}
                    data={data}
                />
            </div>

            <div>
                <p>Axiety</p>
                <Bar
                    width={width}
                    height={height}
                    options={options}
                    data={data2}
                />
            </div>

            <div>
                <p>Burnout</p>
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
