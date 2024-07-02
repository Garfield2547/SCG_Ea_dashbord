import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Md = () => {
    const data = {
        labels: [
            'แผนก 1', 'แผนก 2', 'แผนก 3', 'แผนก 4', 'แผนก 5', 
            'แผนก 6', 'แผนก 7', 'แผนก 8'
        ],
        datasets: [
            {
                label: 'Model',
                data: [120, 85, 71, 62, 145, 130, 92, 122],
                backgroundColor: '#004c6d'
            },
            {
                label: 'ส่วน',
                data: [155, 185, 85, 185, 62, 179, 150, 90],
                backgroundColor: '#00b5ad'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 250 // Adjust this value as needed
            },
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            },
            tooltip: {
                enabled: true,
                mode: 'nearest', // Show only the closest data point
                intersect: true, // Only show the tooltip when the cursor is directly over a bar
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black',
                formatter: (value) => `${value}`,
                
            }
            
        },
        barThickness: 'flex',
        maxBarThickness: 100
    };

    return (
        <div>
            <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
                Model (เทียบจำนวนคนจริงในฐานระบบ)
            </div>
            <div className='bg-white m-4' style={{ height: "500px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Md;
