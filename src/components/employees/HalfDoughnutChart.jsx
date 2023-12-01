"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function HalfDoughnutChart({
    headtitle,
    levelText,
    levelNum,
    levelPercent,
    assessType,
    scaling = false,
}) {

    let percentColor = "";

    switch (assessType) {
        case "depression":
            percentColor = 
            levelNum >= 0 && levelNum <= 4
            ? "#0ECD9E"
            : levelNum >= 5 && levelNum <= 14
            ? "#FFC700"
            : levelNum >= 15 && levelNum <= 27
            ? "#F5003D"
            : "#4D93FB";
            break;
        case "anxiety":
            percentColor = 
            levelNum >= 0 && levelNum <= 4
            ? "#0ECD9E"
            : levelNum >= 5 && levelNum <= 9
            ? "#FFC700"
            : levelNum >= 10 && levelNum <= 21
            ? "#F5003D"
            : "#4D93FB";
            break;
        case "burnout":
            percentColor = 
            levelNum >= 15 && levelNum <= 18
            ? "#0ECD9E"
            : levelNum >= 19 && levelNum <= 49
            ? "#FFC700"
            : levelNum >= 50 && levelNum <= 75
            ? "#F5003D"
            : "#4D93FB";
            break;
    
        default:
            break;
    }

    console.log("chart:", levelNum, levelText, assessType)

    const data = {
        datasets: [
            {
                data: [levelPercent, 100 - levelPercent],
                backgroundColor: [percentColor, "#DDE1E6"], //'#DDE1E6'
                borderWidth: 0,
                circumference: 180,
                rotation: 270,
                cutout: "80%",
                maintainAspectRatio: false,
                borderRadius: [{ innerEnd: 30, outerEnd: 30 }],
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

            ctx.font = "bold 30px sans-serif";
            ctx.fillStyle = "#697077";
            ctx.fillText(levelNum, xCoor, yCoor - 10);

            ctx.font = "bold 14px sans-serif";
            ctx.fillStyle = "#878D96";
            ctx.fillText(`${levelText}`, xCoor, yCoor - 50);
        },
    };

    return (
        <>
            {scaling ? (
                <></>
            ) : (
                <p className="mt-1 text-center text-b-lg font-bold">
                    {headtitle}
                </p>
            )}
            {/* <div className="-mt-[80px]"> */}
            <div
                className={
                    !scaling
                        ? "chart-js-donut-emp"
                        : "chart-js-donut-emp-result"
                }
            >
                <Doughnut
                    data={data}
                    options={options}
                    plugins={[chartInnerText]}
                />
            </div>
        </>
    );
}

export default HalfDoughnutChart;
