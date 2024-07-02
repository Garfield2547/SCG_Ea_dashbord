import React, { useEffect, useState } from 'react';
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
import Data_Pro from '../Data_People/Data_Pro'; // Import the dataset

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Per_Pro = ({ selectedDepa, selectedSec, selectedDate, onBarClick }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const [totalProcess, setTotalProcess] = useState(0);
    const [totalNonProcess, setTotalNonProcess] = useState(0);

    const filterDataByDepaSecDate = (depa, sec, date) => {
        let filteredData = Data_Pro;
        if (depa && depa !== 'ทั้งหมด') {
            filteredData = filteredData.filter(person => person.ส่วน === depa);
        }
        if (sec && sec !== 'ทั้งหมด') {
            filteredData = filteredData.filter(person => person.แผนก === sec);
        }
        if (date) {
            const [year, month] = date.split('-');
            filteredData = filteredData.filter(person => {
                const personDate = new Date(person.Date.split('/').reverse().join('-'));
                return personDate.getFullYear() === parseInt(year) && (personDate.getMonth() + 1) === parseInt(month);
            });
        }
        return filteredData;
    };

    const aggregateData = (data, groupBy) => {
        let processCount = 0;
        let nonProcessCount = 0;
        let labels = [];
        let processData = [];
        let nonProcessData = [];

        const groupedData = data.reduce((result, currentValue) => {
            (result[currentValue[groupBy]] = result[currentValue[groupBy]] || []).push(currentValue);
            return result;
        }, {});

        const sortedKeys = Object.keys(groupedData).sort();

        sortedKeys.forEach(key => {
            labels.push(key);
            const process = groupedData[key].filter(person => person.Process_NonProcess === 'Process').length;
            const nonProcess = groupedData[key].filter(person => person.Process_NonProcess === 'Non Process').length;
            const total = process + nonProcess;
            processData.push({ count: process, percentage: (process / total) * 100 });
            nonProcessData.push({ count: nonProcess, percentage: (nonProcess / total) * 100 });
            processCount += process;
            nonProcessCount += nonProcess;
        });

        return { labels, processData, nonProcessData, processCount, nonProcessCount };
    };

    useEffect(() => {
        const filteredData = filterDataByDepaSecDate(selectedDepa, selectedSec, selectedDate);
        let aggregatedData;

        if (selectedSec && selectedSec !== 'ทั้งหมด') {
            aggregatedData = aggregateData(filteredData, 'เจ้าของสัญญา');
        } else if (selectedDepa && selectedDepa !== 'ทั้งหมด') {
            aggregatedData = aggregateData(filteredData, 'แผนก');
        } else {
            aggregatedData = aggregateData(filteredData, 'ส่วน');
        }

        const { labels, processData, nonProcessData, processCount, nonProcessCount } = aggregatedData;

        setTotalProcess(processCount);
        setTotalNonProcess(nonProcessCount);

        setChartData({
            labels,
            datasets: [
                {
                    label: 'Process',
                    data: processData.map(item => item.percentage),
                    counts: processData.map(item => item.count),
                    backgroundColor: '#a05100',
                    stack: 'Stack 0'
                },
                {
                    label: 'Non Process',
                    data: nonProcessData.map(item => item.percentage),
                    counts: nonProcessData.map(item => item.count),
                    backgroundColor: '#ffd700',
                    stack: 'Stack 0'
                }
            ]
        });
    }, [selectedDepa, selectedSec, selectedDate]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%'; // Add percentage symbol
                    },
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 14
                    }
                }
            },
            y: {
                stacked: true,
                ticks: {
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        },
        plugins: {
            datalabels: {
                display: true,
                color: 'white',
                font: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 16
                },
                formatter: function (value, context) {
                    const count = context.dataset.counts[context.dataIndex];
                    const percentage = value.toFixed(2);
                    return `${count} (${percentage}%)`; // Show count and percentage
                },
                anchor: 'center',
                align: 'center'
            },
            tooltip: {
                titleFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 14
                },
                bodyFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 14
                },
                callbacks: {
                    label: function (context) {
                        const count = context.dataset.counts[context.dataIndex];
                        const percentage = context.raw.toFixed(2);
                        return `${context.dataset.label}: ${count} (${percentage}%)`;
                    }
                }
            },
            legend: {
                labels: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 16
                    }
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const datasetIndex = elements[0].datasetIndex;
                const index = elements[0].index;
                const label = chartData.labels[index];
                const datasetLabel = chartData.datasets[datasetIndex].label;
                onBarClick({ label, datasetLabel, groupBy: selectedSec === 'ทั้งหมด' ? (selectedDepa === 'ทั้งหมด' ? 'ส่วน' : 'แผนก') : 'เจ้าของสัญญา' });
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-center font-bold text-2xl text-white h-9 p' style={{ backgroundColor: "#333333" }}>
                กำลังพลคู่ธุรกิจตามสัญญา (Process / Non Process)
            </div>
            <div className='flex'>
                <div className='w-1/2 text-center m-2'>
                    <div className='h-16 text-white font-bold p-4 text-xl' style={{ backgroundColor: "#333333" }}>Process</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>{totalProcess}</div>
                </div>
                <div className='w-1/2 text-center m-2'>
                    <div className='h-16 text-white font-bold p-4 text-xl' style={{ backgroundColor: "#333333" }}>Non Process</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>{totalNonProcess}</div>
                </div>
            </div>
            <div className='bg-white m-2' style={{ height: "450px", maxWidth: "720px" }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Per_Pro;
