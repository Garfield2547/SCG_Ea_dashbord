import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
);

const Cot_Ove_Op_T_P = () => {
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
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14, // Increase font size
                        weight: 'bold' // Make font bold
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed;
                        }
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div className=' h-full'>
            <div className='bg-white m-2' style={{ height: "290px", maxWidth: "100%" }}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default Cot_Ove_Op_T_P;
