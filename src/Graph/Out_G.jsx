import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js';


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale
);

const Out_G = () => {
    const data = {
        labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
        datasets: [
            {
                label: 'จำนวน',
                data: [10, 20, 15, 25, 30, 22, 18, 28, 23, 24, 27, 19],
                backgroundColor: [
                    '#61DBFB', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', 
                    '#4D5360', '#AC64AD', '#FDB45C', '#46BFBD', '#F7464A', 
                    '#4D5360', '#61DBFB'
                ]
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                
                beginAtZero: true,
                min: 0,
                max: 35 // เปลี่ยนค่านี้ตามความต้องการของคุณ
            },
            x: {
                ticks: {
                    font: {
                        size: 14, // Increase font size
                        weight: 'bold' // Make font bold
                    }
                }
            }
        },
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'start',
                offset: -20,
                color: 'black',
                formatter: (value) => value,
                font: {
                    weight: 'bold' // Make font bold
                }
            }
        }
    };

    return (
        <div className='bg-slate-300 h-full'>
            <div className='text-white text-center font-bold text-2xl h-10 p-1' style={{ backgroundColor: "#333333" }}>
                ข้อมูลการพ้นสภาพของคู่ธุรกิจ
            </div>
            <div className='bg-white m-2' style={{ height: "400px", maxWidth: "100%" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Out_G;
