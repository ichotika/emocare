"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement,Tooltip, Legend);

function HalfDoughnutChart({ headtitle, levelText, levelNum }) {
    // const labels = ['Monday', 'Tuesday']
    const data = {
        // labels: labels,
        datasets: [
          {
            label: 'Week day',
            data: [60, 40],
            backgroundColor: ['#878D96', '#DDE1E6'],
            borderWidth: 1,
            circumference: 180,
            rotation: 270,
            cutout: '85%'
          },
        ],
    };
    
    const options = {
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: headtitle,
                    
                }
            }
        }
    }

    const chartInnerText = {
        id: 'chartInnerText',
        afterDatasetsDraw(chart, args, pluginOptions){
            const {ctx, data, chartArea: {top, bottom, left, right, width, height}} = chart;

            ctx.save()
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;

            ctx.textAlign = 'center';

            ctx.font = 'bold 40px sans-serif';
            ctx.fillStyle = '#697077';
            ctx.fillText(levelNum, xCoor, yCoor - 10)

            ctx.font = 'bold 25px sans-serif';
            ctx.fillStyle = '#878D96';
            ctx.fillText(levelText, xCoor, yCoor - 50)
        }
    }


    return (
        <div style={{width: '100%', height: '100%'}}>
            <Doughnut data={data} options={options} plugins={[chartInnerText]} />
        </div>
    )
}

export default HalfDoughnutChart

