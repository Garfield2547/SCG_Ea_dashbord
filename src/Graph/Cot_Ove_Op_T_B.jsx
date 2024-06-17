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

const Cot_Ove_Op_T_B = () => {
    const data = {
        labels: ['Annual Contract', 'Overtime', 'Piece work', 'Others', 'Total'],
        datasets: [
            {
                label: 'จำนวน',
                data: [10, 20, 15, 25, 30],
                backgroundColor: [
                    '#61DBFB', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1'
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
        <div className=' h-full'>
        
            <div className='bg-white m-2' style={{ height: "290px", maxWidth: "100%" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Cot_Ove_Op_T_B;
