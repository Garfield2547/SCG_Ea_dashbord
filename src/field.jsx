import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { fetchDataFromBackend } from "../src/api_fontend/api_Backend"; // ตรวจสอบเส้นทางนี้ให้ถูกต้อง

Chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

function Field() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'จำนวนคน',
                data: [],
                backgroundColor: '#FF00CC'
            }
        ]
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 12 // เปลี่ยนค่านี้ตามความต้องการของคุณ
            }
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'start',
                offset: -20,
                color: 'black',
                
                formatter: (value) => value
            }
        }
    };
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchDataFromBackend();
                console.log(data);
                // Transform data here
                const labels = data.map(item => item.DEPARTMENT_SHORT);
                const values = data.map(item => item.TOTAL_CONTRACTNO);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'จำนวนคน',
                            data: values,
                            backgroundColor: '#FF00CC'
                        }
                    ]
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

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
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
}

export default Field;
