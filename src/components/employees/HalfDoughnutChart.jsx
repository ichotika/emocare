"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function HalfDoughnutChart({ headtitle, levelText, levelNum, levelPercent, percentColor }) {
    const data = {
        datasets: [
            {
                data: [levelPercent, 100 - levelPercent],
                backgroundColor: [percentColor, "#DDE1E6"], //'#DDE1E6'
                borderWidth: 0,
                circumference: 180,
                rotation: 270,
                cutout: "85%",
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                title: {
                    display: false,
                    text: headtitle,
                },
            },
        },
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
            ctx.fillText(levelNum, xCoor, yCoor - 10);

            ctx.font = "bold 18px sans-serif";
            ctx.fillStyle = "#878D96";
            ctx.fillText(`${levelText}`, xCoor, yCoor - 50);
        },
    };

    return (
        <div className="bg-white rounded-lg p-2 w-[100%] h-[100%]">
            <h1 className="font-bold text-center">{headtitle}</h1>
            {/* <v className="-mt-[80px]"> */}
                <Doughnut
                    data={data}
                    options={options}
                    plugins={[chartInnerText]}
                    className="w-[100%] h-[100%]"
                />
            </div>
        // </div>
    );
}

export default HalfDoughnutChart;
