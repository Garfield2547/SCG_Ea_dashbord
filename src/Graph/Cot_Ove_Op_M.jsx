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

const Cot_Ove_Op_M = () => {
    const data = {
        labels: ['มี.ค.', 'เม.ย.', 'พ.ค.', 'Avg'],
        datasets: [
            {
                label: 'Annual contract',
                data: [50,150,35, 50],
                backgroundColor: '#FD625E'
            },
            {
                label: 'Piece work',
                data: [75, 80, 85, 50],
                backgroundColor: '#01B8AA'
            },
            {
                label: 'Overtime',
                data: [50, 60, 70, 40],
                backgroundColor: '#676D6E'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true,
                max: 400 // Adjust this value to set the maximum y-axis value to 1,000
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
                mode: 'index',
                intersect: false
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
                แยกตามเดือน
            </div>
            <div className='bg-white m-2' style={{ height: "400px", maxWidth: "1000px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Cot_Ove_Op_M;
