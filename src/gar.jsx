import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { fetchDataFromBackend } from "../src/api_fontend/api_Backend"; // ตรวจสอบเส้นทางนี้ให้ถูกต้อง
import './App.css';

Chartjs.register(
    ArcElement,
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
                backgroundColor: ['#FF00CC', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'] // คุณสามารถเพิ่มสีได้ตามต้องการ
            }
        ]
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels: {
                display: true,
                color: 'black',
                anchor: 'end',
                align: 'end',
                formatter: (value) => value
            }
        },
        layout: {
            padding: 10
        },
        elements: {
            arc: {
                borderWidth: 0,
                borderRadius: 0,
            }
        },
        radius: '80%', // ปรับรัศมีของกราฟวงกลม
        cutout: '0%', // ปรับรัศมีภายใน (สำหรับกราฟ Doughnut)
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
                            backgroundColor: labels.map(() => '#' + Math.floor(Math.random()*16777215).toString(16)) // สร้างสีสุ่มสำหรับแต่ละส่วน
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
        <div className='bg-slate-300'>
            <div className='text-center font-bold text-2xl  text-white h-9 p 'style={{ backgroundColor: "#333333" }}>
                กำลังผลคู่ธุรกิจตามสัญญา (Process /Non Process)
            </div>
            <div className='flex'>
                <div className='w-1/2 text-center m-2'>
                    <div className='h-16  text-white font-bold p-4 text-xl' style={{ backgroundColor: "#333333" }}>Process</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>0</div>
                </div>
                <div className='w-1/2 text-center m-2 '>
                    <div className='h-16  text-white font-bold p-4 text-xl' style={{ backgroundColor: "#333333" }}>Non Process</div>
                    <div className='h-11 bg-white p-1 font-bold text-2xl'>0</div>
                </div>
            </div>
            <div className='flex justify-center items-center '>
                <div className='w-full  bg-white m-2' style={{ height: "450px", maxWidth: "711px" }}>
                    <Pie data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
}

export default Field;
