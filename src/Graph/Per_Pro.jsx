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

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Per_Pro = ({ selectedDepa, selectedSec, selectedDate }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const [totalProcess, setTotalProcess] = useState(0);
    const [totalNonProcess, setTotalNonProcess] = useState(0);

    const processData = {
        'ส่วน A': {
            'แผนก 1': [2, 1], // Process data for นาย A and นาย B
            'แผนก 2': [2, 2],
            'แผนก 3': [1, 3],
        },
        'ส่วน B': {
            'แผนก 4': [4, 3],
            'แผนก 5': [2, 1],
            'แผนก 6': [5, 2],
        }
    };

    const nonProcessData = {
        'ส่วน A': {
            'แผนก 1': [2, 2], // Non Process data for นาย A and นาย B
            'แผนก 2': [3, 4],
            'แผนก 3': [2, 2],
        },
        'ส่วน B': {
            'แผนก 4': [1, 2],
            'แผนก 5': [1, 3],
            'แผนก 6': [2, 1],
        }
    };

    const adjustDataByMonth = (data, month) => {
        if (month === '2024-05' || month === '2024-06') {
            return data.map(value => value + 10);
        } else if (month === '2024-08') {
            return data; // keep original data for August 2024
        } else {
            return data.map(() => 0); // set data to 0 for all other months
        }
    };

    useEffect(() => {
        let processTotal = 0;
        let nonProcessTotal = 0;

        if (selectedSec && selectedSec !== 'ทั้งหมด') {
            const selectedProcessData = adjustDataByMonth(processData[selectedDepa][selectedSec], selectedDate);
            const selectedNonProcessData = adjustDataByMonth(nonProcessData[selectedDepa][selectedSec], selectedDate);
            const totalData = selectedProcessData.map((process, index) => process + selectedNonProcessData[index]);
            const processPercentages = selectedProcessData.map((value, index) => (value / totalData[index]) * 100);
            const nonProcessPercentages = selectedNonProcessData.map((value, index) => (value / totalData[index]) * 100);

            processTotal = selectedProcessData.reduce((a, b) => a + b, 0);
            nonProcessTotal = selectedNonProcessData.reduce((a, b) => a + b, 0);

            setChartData({
                labels: selectedSec === 'แผนก 1' ? ['นาย A', 'นาย B'] : selectedSec === 'แผนก 2' ? ['นาย C', 'นาย D'] : selectedSec === 'แผนก 3' ? ['นาย E', 'นาย F'] : selectedSec === 'แผนก 4' ? ['นาย G', 'นาย H'] : selectedSec === 'แผนก 5' ? ['นาย I', 'นาย J'] : ['นาย K', 'นาย L'],
                datasets: [
                    {
                        label: 'Process',
                        data: processPercentages,
                        originalData: selectedProcessData,
                        backgroundColor: '#a05100',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Non Process',
                        data: nonProcessPercentages,
                        originalData: selectedNonProcessData,
                        backgroundColor: '#ffd700',
                        stack: 'Stack 0'
                    }
                ]
            });
        } else if (selectedDepa && selectedDepa !== 'ทั้งหมด') {
            const selectedProcessData = adjustDataByMonth(Object.values(processData[selectedDepa]).flat(), selectedDate);
            const selectedNonProcessData = adjustDataByMonth(Object.values(nonProcessData[selectedDepa]).flat(), selectedDate);
            const totalData = selectedProcessData.map((process, index) => process + selectedNonProcessData[index]);
            const processPercentages = selectedProcessData.map((value, index) => (value / totalData[index]) * 100);
            const nonProcessPercentages = selectedNonProcessData.map((value, index) => (value / totalData[index]) * 100);

            processTotal = selectedProcessData.reduce((a, b) => a + b, 0);
            nonProcessTotal = selectedNonProcessData.reduce((a, b) => a + b, 0);

            setChartData({
                labels: selectedDepa === 'ส่วน A' ? ['แผนก 1', 'แผนก 2', 'แผนก 3'] : ['แผนก 4', 'แผนก 5', 'แผนก 6'],
                datasets: [
                    {
                        label: 'Process',
                        data: processPercentages,
                        originalData: selectedProcessData,
                        backgroundColor: '#a05100',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Non Process',
                        data: nonProcessPercentages,
                        originalData: selectedNonProcessData,
                        backgroundColor: '#ffd700',
                        stack: 'Stack 0'
                    }
                ]
            });
        } else {
            const totalProcess = adjustDataByMonth([75, 10, 15, 30, 10, 12], selectedDate);
            const totalNonProcess = adjustDataByMonth([100, 5, 15, 20, 21, 5], selectedDate);
            const totalData = totalProcess.map((process, index) => process + totalNonProcess[index]);
            const processPercentages = totalProcess.map((value, index) => (value / totalData[index]) * 100);
            const nonProcessPercentages = totalNonProcess.map((value, index) => (value / totalData[index]) * 100);

            processTotal = totalProcess.reduce((a, b) => a + b, 0);
            nonProcessTotal = totalNonProcess.reduce((a, b) => a + b, 0);

            setChartData({
                labels: ['ส่วน A', 'ส่วน B', 'ส่วน C', 'ส่วน D', 'ส่วน E', 'ส่วน F'],
                datasets: [
                    {
                        label: 'Process',
                        data: processPercentages,
                        originalData: totalProcess,
                        backgroundColor: '#a05100',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Non Process',
                        data: nonProcessPercentages,
                        originalData: totalNonProcess,
                        backgroundColor: '#ffd700',
                        stack: 'Stack 0'
                    }
                ]
            });
        }

        setTotalProcess(processTotal);
        setTotalNonProcess(nonProcessTotal);
    }, [selectedDepa, selectedSec, selectedDate]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Horizontal bar chart
        scales: {
            x: {
                beginAtZero: true,
                max: 100, // Percentage scale
                ticks: {
                    color: 'black',
                    callback: function (value) {
                        return value + '%'; // Add percentage symbol
                    },
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 14 // Adjust font size here
                    }
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 14 // Adjust font size here
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
                    size: 16 // Adjust font size here
                },
                formatter: function (value, context) {
                    const originalData = context.dataset.originalData[context.dataIndex];
                    return `${originalData} (${value.toFixed(2)}%)`; // Show original value and percentage
                },
                anchor: 'center',
                align: 'center'
            },
            tooltip: {
                titleFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 14 // Adjust font size here
                },
                bodyFont: {
                    family: 'MySCG',
                    weight: 'bold',
                    size: 14 // Adjust font size here
                },
                callbacks: {
                    label: function (context) {
                        const originalData = context.dataset.originalData[context.dataIndex];
                        return `${context.dataset.label}: ${originalData} (${context.raw.toFixed(2)}%)`;
                    }
                }
            },
            legend: {
                labels: {
                    color: 'black',
                    font: {
                        family: 'MySCG',
                        weight: 'bold',
                        size: 16 // Adjust font size here
                    }
                }
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
