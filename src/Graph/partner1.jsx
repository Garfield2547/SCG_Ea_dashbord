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

const Partner1 = () => {
    const data = {
        labels: ['แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr', 'แผนกในOpr'],
        datasets: [
            {
                label: 'A',
                data: [50, 150, 35, 50, 100],
                backgroundColor: '#ff6384'
            },
            {
                label: 'B',
                data: [75, 80, 85, 50, 60],
                backgroundColor: '#36a2eb'
            },
            {
                label: 'C',
                data: [50, 60, 70, 40, 50],
                backgroundColor: '#4bc0c0'
            },
            {
                label: 'D',
                data: [50, 120, 140, 90, 110],
                backgroundColor: '#9966ff'
            },
            {
                label: 'E',
                data: [60, 80, 100, 60, 80],
                backgroundColor: '#ffcd56'
            },
            {
                label: 'NO',
                data: [40, 50, 60, 30, 40],
                backgroundColor: '#c9cbcf'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true,
                max: 700 // Adjust this value to set the maximum y-axis value to 700
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: true,
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'black',
                formatter: (value, context) => {
                    const datasetIndex = context.datasetIndex;
                    const datasets = context.chart.data.datasets;
                    const dataIndex = context.dataIndex;

                    // Sum values for the current index from all datasets
                    let sum = 0;
                    for (let i = 0; i < datasets.length; i++) {
                        sum += datasets[i].data[dataIndex];
                    }

                    // Display the sum only for the last dataset to avoid duplicate labels
                    return datasetIndex === datasets.length - 1 ? sum : null;
                }
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
                จำนวน แผนกในOprสัญญาแยกตามเกรด
            </div>
            <div className='bg-white m-2' style={{ height: "500px", maxWidth: "1000px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Partner1;
