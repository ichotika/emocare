"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


export default function AssessmentStackChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    
    const options = {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        indexAxis: 'y',
        // elements: {
        //     bar: {
        //       borderWidth: 2,
        //     },
        //   },
      };
      
    const labels = ['Depression'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Safe',
            data: [90],
            backgroundColor: 'green',
          },
          {
            label: 'Moderate',
            data: [5],
            backgroundColor: 'yellow',
          },
          {
            label: 'Critical',
            data: [5],
            backgroundColor: 'red',
          },
        ],
      };


    const data2 = {
        labels: ['Anxiety'],
        datasets: [
          {
            label: 'Safe',
            data: [50],
            backgroundColor: 'green',
          },
          {
            label: 'Moderate',
            data: [30],
            backgroundColor: 'yellow',
          },
          {
            label: 'Critical',
            data: [20],
            backgroundColor: 'red',
          },
        ],
      };

   
    const data3 = {
        labels: ['Burnout'],
        datasets: [
          {
            label: 'Safe',
            data: [20],
            backgroundColor: 'green',
          },
          {
            label: 'Moderate',
            data: [30],
            backgroundColor: 'yellow',
          },
          {
            label: 'Critical',
            data: [50],
            backgroundColor: 'red',
          },
        ],
      };
      

    return (
    <div className='mt-3 max-w-lg'>
        <div>
            <p>Depression</p>
            <Bar options={options} data={data} /> 
        </div>
        
        <div>
            <p>Axiety</p>
            <Bar options={options} data={data2} />
        </div>
        
        <div>
            <p>Burnout</p>
            <Bar options={options} data={data3} />
        </div>
        
    </div>
    )
}