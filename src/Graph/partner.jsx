import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Partner = ({ gradeCounts, onGradeClick, selectedDate }) => {
    const data = {
        labels: ['A', 'B', 'C', 'D', 'E', 'NO'],
        datasets: [
            {
                label: 'Number of Contracts',
                data: [
                    gradeCounts.A,
                    gradeCounts.B,
                    gradeCounts.C,
                    gradeCounts.D,
                    gradeCounts.E,
                    gradeCounts.NO
                ],
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#4bc0c0',
                    '#9966ff',
                    '#ffcd56',
                    '#c9cbcf'
                ],
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        color: 'black',
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        family: 'MySCG',
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: true,
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}`;
                    }
                },
                titleFont: {
                    family: 'MySCG',
                    size: 16,
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'MySCG',
                    size: 16,
                    weight: 'bold'
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                offset: 2,
                color: 'black',
                font: {
                    family: 'MySCG',
                    size: 16,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    const total = context.chart._metasets[context.datasetIndex].total;
                    const percentage = ((value / total) * 100).toFixed(2);
                    return `${value} (${percentage}%)`;
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const chartElement = elements[0];
                const grade = data.labels[chartElement.index];
                onGradeClick(grade); // Pass selectedDate to the function
            }
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 20,
                bottom: 30
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-white text-center font-bold text-2xl h-10 p-1 font-bold font-size-xl' style={{ backgroundColor: "#333333" }}>
                จำนวน แผนกในOprสัญญาแยกตามเกรด
            </div>
            <div className='bg-white m-2' style={{ height: "500px", maxWidth: "700px" }}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default Partner;
