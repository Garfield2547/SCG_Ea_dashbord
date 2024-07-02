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
import Data_Pro from '../Data_People/Data_Pro'; // Import the dataset

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Partner1 = ({ onBarClick, selectedDate }) => {
    // Process Data_Pro to get the counts for each grade in each department
    const departments = [...new Set(Data_Pro.map(person => person.แผนก))];
    const grades = ['A', 'B', 'C', 'D', 'E', 'NO'];

    // Filter data based on selectedDate
    const filteredData = Data_Pro.filter(person => {
        if (selectedDate) {
            const personDate = new Date(person.Date.split('/').reverse().join('-'));
            const [year, month] = selectedDate.split('-');
            return personDate.getFullYear() === parseInt(year) && (personDate.getMonth() + 1) === parseInt(month);
        }
        return true;
    });

    const datasets = grades.map(grade => {
        return {
            label: grade,
            data: departments.map(department => {
                return filteredData.filter(person => person.แผนก === department && person.Grade === grade).length;
            }),
            backgroundColor: {
                A: '#FD625E',
                B: '#676D6E',
                C: '#01B8AA',
                D: '#0D3C45',
                E: '#F3C910',
                NO: '#B84301'
            }[grade]
        };
    });

    const data = {
        labels: departments,
        datasets: datasets
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        size: 15,
                        weight: 'bold' // Make the x-axis text bold
                    }
                }
            },
            y: {
                beginAtZero: true,
                stacked: true,
                max: 10,
                
                ticks: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        size: 16,
                        weight: 'bold' // Make the y-axis text bold
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    color: 'black',
                    pointStyle: 'circle',
                    font: {
                        family: 'MySCG',
                        size: 15,
                        weight: 'bold' // Make the legend text bold
                    }
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
                },
                bodyFont: {
                    family: 'MySCG',
                    size: 16,
                    weight: 'bold' // Make the tooltip body text bold
                },
                titleFont: {
                    family: 'MySCG',
                    size: 16,
                    weight: 'bold' // Make the tooltip title text bold
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
                },
                font: {
                    family: 'MySCG',
                    size: 18,
                    weight: 'bold' // Make the datalabels text bold
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const chartElement = elements[0];
                const grade = data.datasets[chartElement.datasetIndex].label;
                const department = data.labels[chartElement.index];
                onBarClick({ grade, department });
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-white text-center font-bold text-2xl h-10 p-1 font-size-xl' style={{ backgroundColor: "#333333" }}>
                จำนวน แผนกในOprสัญญาแยกตามเกรด
            </div>
            <div className='bg-white m-2' style={{ height: "500px", maxWidth: "1000px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Partner1;
