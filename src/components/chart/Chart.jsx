import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = () => {
    const data = {
            labels: [1, 2, 3, 4, 5, 6, 7],
            datasets: [
                {
                    data: [0, 2, 6, 8, 12], // Y-axis values
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.4
                }
            ]
        }

        const options = {
            responsive: true,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Days'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Hours'
                },
                beginAtZero: true
              }
            }
          };
        
        
        return (
        <>
           <div className="mt-4 ml-3">
                <div className="flex items-center justify-between mt-4 ml-2">
                    <h1 className="text-xl font-bold">
                        Performance
                    </h1>
                    <select className="border border-gray-300 rounded-lg p-1 text-gray-600 mr-10">
                        <option>01-07 May</option>
                        <option>08-14 May</option>
                        <option>15-21 May</option>
                        <option>22-28 May</option>
                    </select>
                </div>
                <div className="mt-3 w-[90%]">
                    <Line data={data} options={options} /> 
                </div>
            </div> 
        </>
    )
}

export default Chart;