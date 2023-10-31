"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ healthPercent, categoryTitle, percentCompleted }) {
    const data = {
        // labels: labels,
        datasets: [
            {
                // label: '',
                data: [healthPercent, 100 - healthPercent],
                backgroundColor: ["#878D96", "#DDE1E6"], //'#DDE1E6'
                borderWidth: 0,
                cutout: "85%",
                maintainAspectRatio: false,
                responsive: true,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: categoryTitle,
                },
            },
        },
        responsive: true,
    };

    const chartInnerText = {
        id: "chartInnerText",
        afterDatasetsDraw(chart, args, pluginOptions) {
            const {
                ctx,
                data,
                chartArea: { top, bottom, left, right, width, height },
            } = chart;

            ctx.save();
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;

            ctx.textAlign = "center";

            ctx.font = "bold 32px sans-serif";
            ctx.fillStyle = "#697077";
            ctx.fillText(percentCompleted, xCoor, yCoor);
        },
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx } = chart;
            ctx.save();

            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
            const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
            const width = outerRadius - innerRadius;
            const angle = Math.PI / 180;

            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.strokeStyle = "#DDE1E6";
            ctx.arc(
                xCoor,
                yCoor,
                outerRadius - width / 2,
                0,
                angle * 360,
                false
            );
            ctx.stroke();
        },
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <h3 className="text-center font-bold">{categoryTitle}</h3>
            <Doughnut
                data={data}
                options={[options]}
                plugins={[chartInnerText]}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}

export default DoughnutChart;
