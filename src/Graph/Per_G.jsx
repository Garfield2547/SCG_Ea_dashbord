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

const Per_G = () => {
    const data = {
        labels: [
            'พ.ค.67', 'มิ.ย.67', 'ก.ค.67', 'ส.ค.67'],
        datasets: [
            {
                label: 'คนในสัญญา',
                data: [120, 85, 71, 62],
                backgroundColor: '#004c6d'
            },
            {
                label: 'คนในสัญญามาปฎิบัติงาน',
                data: [120, 85, 71, 62],
                backgroundColor: '#00b5ad'
            },
            {
                label: 'คนใน Piecewoek',
                data: [120, 85, 71, 62],
                backgroundColor: '#ff4b5c'
            },
            {
                label: 'คนใน Piecework มาปฎิบัติงาน',
                data: [150, 50, 85, 50],
                backgroundColor: '#fcbf49'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                max: 270 // Adjust this value as needed
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
        <div className='bg-slate-300 h-full'>
            <h1 className=' text-white text-center font-bold text-2xl h-9 ' style={{ backgroundColor: "#333333" }}>
                กำลังพล (คน)
            </h1>
            <div className='flex'>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 text-white font-bold p-2' style={{ backgroundColor: "#333333" }}>คนในสัญญาประจำ</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>0</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2' style={{ backgroundColor: "#333333" }}>คนในสัญญาประจำมาปฎิบัติงานจริง</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl '>0</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2' style={{ backgroundColor: "#333333" }}>คนใน Picterork</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>0</div>
                </div>
                <div className='w-1/4 text-center m-2'>
                    <div className='h-16 bg-sky-600 text-white font-bold p-2' style={{ backgroundColor: "#333333" }}> คนใน Picterork มาปฏิบัติงานจริง</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>0</div>
                </div>
            </div>
            <div className='bg-white m-2' style={{ height: "450px" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Per_G;
