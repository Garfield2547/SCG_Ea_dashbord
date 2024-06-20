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

const Per_Pro = ({ selectedDepa }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const [totalProcess, setTotalProcess] = useState(0);
    const [totalNonProcess, setTotalNonProcess] = useState(0);

    const processData = {
        'ส่วน A': [25, 25, 25],
        'ส่วน B': [4, 3, 3],
    };

    const nonProcessData = {
        'ส่วน A': [33, 33, 34],
        'ส่วน B': [1, 1, 3],
    };

    useEffect(() => {
        let processTotal = 0;
        let nonProcessTotal = 0;

        if (selectedDepa === 'ทั้งหมด') {
            const totalProcess = [75, 10, 15, 30, 10, 12];
            const totalNonProcess = [100, 5, 15, 20, 21, 5];
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
        } else {
            const selectedProcessData = processData[selectedDepa];
            const selectedNonProcessData = nonProcessData[selectedDepa];
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
        }

        setTotalProcess(processTotal);
        setTotalNonProcess(nonProcessTotal);
    }, [selectedDepa]);

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
                กำลังผลคู่ธุรกิจตามสัญญา (Process / Non Process)
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
