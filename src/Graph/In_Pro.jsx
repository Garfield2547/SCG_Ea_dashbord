import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const In_Pro = () => {
    // Original data values
    const processData = [175, 10, 15.5, 30.55, 10.25];
    const nonProcessData = [100, 2.1, 15.5, 20.45, 21.45];

    // Calculate totals for each group
    const totals = processData.map((value, index) => value + nonProcessData[index]);

    // Calculate percentages to ensure the total is 100%
    const processPercentages = processData.map((value, index) => (value / totals[index]) * 100);
    const nonProcessPercentages = nonProcessData.map((value, index) => (value / totals[index]) * 100);

    const data = {
        labels: ['Opr', 'Qr', 'MRO', 'BSE', 'DDV'],
        datasets: [
            {
                label: 'Process',
                data: processPercentages,
                backgroundColor: '#a05100',
                stack: 'Stack 0',
                originalData: processData
            },
            {
                label: 'Non Process',
                data: nonProcessPercentages,
                backgroundColor: '#ffd700',
                stack: 'Stack 0',
                originalData: nonProcessData
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Horizontal bar chart
        scales: {
            x: {
                beginAtZero: true,
                max: 100, // Percentage scale
                ticks: {
                    callback: function(value) {
                        return value + '%'; // Add percentage symbol
                    }
                }
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            datalabels: {
                display: true,
                color: 'white',
                formatter: function(value, context) {
                    const originalData = context.dataset.originalData[context.dataIndex];
                    return `${originalData} (${value.toFixed(2)}%)`; // Show original value and percentage
                },
                anchor: 'center',
                align: 'center'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const originalData = context.dataset.originalData[context.dataIndex];
                        return `${context.dataset.label}: ${originalData}`;
                    }
                }
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
                กำลังพลคู่ธุรกิจ ตามสัญญา (Process/Non Process)
            </div>
            <div className='bg-white m-2' style={{ height: "500px", maxWidth: "720px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default In_Pro;
