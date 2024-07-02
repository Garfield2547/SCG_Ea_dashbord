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
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Per_G = ({ selectedDate }) => {
    const getDataByMonth = (month) => {
        const data = {
            'เม.ย.67': [65, 76, 48, 50],
            'พ.ค.67': [75, 86, 78, 50],
            'มิ.ย.67': [85, 85, 85, 50],
            'ก.ค.67': [71, 71, 71, 85],
            'ส.ค.67': [62, 62, 62, 50]
        };
        return data[month] || [0, 0, 0, 0];
    };

    const formatDateLabel = (date) => {
        const monthNames = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
        const dateObj = new Date(date);
        const year = (dateObj.getFullYear() + 543).toString().slice(2);
        const month = monthNames[dateObj.getMonth()];
        return `${month}${year}`;
    };

    const getPreviousMonths = (date, count) => {
        let result = [];
        let currentDate = new Date(date);

        for (let i = 0; i < count; i++) {
            result.push(formatDateLabel(currentDate));
            currentDate.setMonth(currentDate.getMonth() - 1);
        }

        return result.reverse();
    };

    const months = getPreviousMonths(selectedDate, 4);
    const colors = ['#004c6d', '#00b5ad', '#ff4b5c', '#fcbf49'];
    const defaultColor = '#d3d3d3';
    const selectedColor = '#ff0000';

    const datasets = [
        {
            label: 'คนในสัญญา',
            backgroundColor: colors[0],
            data: months.map(month => getDataByMonth(month)[0])
        },
        {
            label: 'คนในสัญญามาปฎิบัติงาน',
            backgroundColor: colors[1],
            data: months.map(month => getDataByMonth(month)[1])
        },
        {
            label: 'คนใน Piecework',
            backgroundColor: colors[2],
            data: months.map(month => getDataByMonth(month)[2])
        },
        {
            label: 'คนใน Piecework มาปฎิบัติงาน',
            backgroundColor: colors[3],
            data: months.map(month => getDataByMonth(month)[3])
        }
    ];

    const data = {
        labels: months,
        datasets: datasets
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 15 // Adjusted font size
                    }
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 14 // Adjusted font size
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
                    pointStyle: 'circle',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 16 // Adjusted font size
                    },
                    generateLabels: (chart) => {
                        const datasetLabels = datasets.map((dataset, i) => ({
                            text: dataset.label,
                            fillStyle: colors[i], // Use colors for legend items
                            strokeStyle: colors[i],
                            hidden: !chart.isDatasetVisible(i),
                            lineCap: 'butt',
                            lineDash: [],
                            lineDashOffset: 0,
                            lineJoin: 'miter',
                            pointStyle: 'circle',
                            rotation: 0,
                            textAlign: 'left',
                            borderWidth: 0
                        }));
                        return datasetLabels;
                    }
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
                },
                bodyFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 13 // Adjusted font size
                },
                titleFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 18 // Adjusted font size
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: function(context) {
                    return context.chart.data.labels[context.dataIndex] === formatDateLabel(selectedDate) ? selectedColor : 'black';
                },
                font: function(context) {
                    return {
                        family: 'MySCG',
                        weight: 'bold',
                        size: context.chart.data.labels[context.dataIndex] === formatDateLabel(selectedDate) ? 20 : 17
                    };
                },
                formatter: (value) => `${value}`
            }
        },
        barThickness: 'flex',
        maxBarThickness: 100
    };

    return (
        <div className='bg-slate-300 h-full font-bold '>
            <h1 className='text-white text-center font-bold text-2xl h-9' style={{ backgroundColor: "#333333" }}>
                กำลังพล (คน)
            </h1>
            <div className='flex'>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 text-white font-bold p-2 ' style={{ backgroundColor: "#333333" }}>คนในสัญญาประจำ</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl '>{getDataByMonth(formatDateLabel(selectedDate))[0]}</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2 ' style={{ backgroundColor: "#333333" }}>คนในสัญญาประจำมาปฎิบัติงานจริง</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl '>{getDataByMonth(formatDateLabel(selectedDate))[1]}</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2 g' style={{ backgroundColor: "#333333" }}>คนใน Piecework</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl '>{getDataByMonth(formatDateLabel(selectedDate))[2]}</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2' style={{ backgroundColor: "#333333" }}>คนใน Piecework มาปฎิบัติงานจริง</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl '>{getDataByMonth(formatDateLabel(selectedDate))[3]}</div>
                </div>
            </div>
            <div className='bg-white m-2' style={{ height: "450px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Per_G;
