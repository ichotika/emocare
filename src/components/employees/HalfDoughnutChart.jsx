"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function HalfDoughnutChart({
    headtitle,
    levelText,
    levelNum,
    levelPercent,
    percentColor,
    scaling = false,
}) {
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

            {scaling
                ? (
                    <>
                        {/* <div className="-mt-[80px]"> */}
                        
                        <div className="-mt-8 xl:-mt-12 max-h-60 xl:max-h-52  relative w-[328px] h-[328px] xl:w-72 xl:h-72">
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
                        </div>
                    </>

                ) : (
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
                )

            }
        </>
    );
}

export default HalfDoughnutChart;
