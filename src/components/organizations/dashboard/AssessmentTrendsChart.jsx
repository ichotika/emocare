"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

export default function AssessmentTrendsChart({employee}) {
    const targetYear = 2023;

    // find employee take assessment
    const assessmentCountsByMonth = Array(12).fill(0);
    employee.forEach(employee => {
    const assessmentTakenDate = new Date(employee.assessmentTakenDate);
    if (employee.status === "active") {
        const month = assessmentTakenDate.getMonth();
        if (assessmentTakenDate.getFullYear() === targetYear) {
        assessmentCountsByMonth[month]++;
        } 
    }
    });

    console.log("Counts of active employees with assessments by month:");
    console.log("#assessments", assessmentCountsByMonth);

   


    // find active employee
    const activeEmployeesByMonth = Array(12).fill(0);
    employee.forEach(employee => {
    if (employee.status === "active" && !employee.resignDate) {
        const joinDate = new Date(employee.joinDate);
        const joinMonth = joinDate.getMonth();
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const monthsInYear = 12;

        if (joinDate.getFullYear() === currentYear) {
        for (let month = joinMonth; month <= currentMonth; month++) {
            activeEmployeesByMonth[month]++;
        }
        } else if (joinDate.getFullYear() < currentYear) {
        for (let month = joinMonth; month < monthsInYear; month++) {
            activeEmployeesByMonth[month]++;
        }
        if (joinDate.getFullYear() === currentYear - 1) {
            for (let month = 0; month <= currentMonth; month++) {
            activeEmployeesByMonth[month]++;
            }
        }
        }
    }
    });
    console.log("#active employee",activeEmployeesByMonth);


    // the remaining
    const remainingByMonth = activeEmployeesByMonth.map((activeCount, index) => {
        return activeCount - assessmentCountsByMonth[index];
    });
    console.log("remainingByMonth",remainingByMonth);


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Achieved",
                data: assessmentCountsByMonth,
                backgroundColor: "grey",
                // rgba(255, 99, 132, 0.5)
            },
            {
                label: "Remaining",
                data: remainingByMonth,
                backgroundColor: "lightgrey",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                display: false,
            },
            datalabels: {
                display: false,
            },
        },
    };

    return (
        <div className="basis-2/4 rounded-lg  border border-gray-200 bg-white p-6 shadow ">
            <h2>Assessment Trends</h2>
            <Bar data={data} options={options} />
        </div>
    );
}
