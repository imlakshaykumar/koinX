// import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import react from '../assets/react.svg';
// import ChartDataLabels from 'chartjs-plugin-datalabels';


// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);


export const Sentiment = () => {


    const data = {
        labels: ['Sell', 'Buy', 'Hold'],
        datasets: [{
            // label: 'Poll',
            data: [40, 30, 30],
            backgroundColor: ['red', 'green', 'orange'],
            borderColor: ['red', 'green', 'orange']
        }]
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    // usePointStyle: true;
                    font: {
                        size: 15,
                        weight: 'bold'
                    },
                    color: '#222',
                    generateLabels: (chart) => {
                        return chart.data.labels.map((label, index) => {
                            const value = chart.data.datasets[0].data[index];
                            return {
                                text: `${label}: ${value}`,
                                fillStyle: chart.data.datasets[0].backgroundColor[index],
                                strokeStyle: chart.data.datasets[0].borderColor[index],
                                // lineWidth: 3,
                            };
                        });
                    }
                }
            },
            // datalabels: {
            //     formatter: (value, context) => {
            //         value = context.chart.data.datasets[0].data[context.dataIndex];
            //         return `${context.chart.data.labels[context.dataIndex]}: ${value}`;
            //     },
            //     color: '#fff',
            //     font: {
            //         weight: 'bold'
            //     },
            //     align: 'start',
            //     anchor: 'end'
            // }
        },
        cutout: '0%',
    };

    return (
        <>
            <div className='p-4 bg-white mb-5 rounded-xl flex flex-col gap-3'>
                <h3 className='text-xl font-bold'>Sentiment</h3>
                <p className='font-bold text-lg'>Key events</p>
                <div className="p-2 flex gap-5 items-center justify-center ">
                    <div className='p-5 flex justify-start items-start gap-5 bg-red-100 rounded-lg'>
                        <img src={ react } alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio velit atque eos?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, expedita quis. Nobis error magni, quas eos excepturi, temporibus veniam distinctio eaque consequatur, libero dolorum deleniti sed repellendus eius a ratione.</p>
                        </div>
                    </div>
                    <div className='p-5 flex justify-start items-start gap-5 bg-blue-100 rounded-lg'>
                        <img src={ react } alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio velit atque eos?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, expedita quis. Nobis error magni, quas eos excepturi, temporibus veniam distinctio eaque consequatur, libero dolorum deleniti sed repellendus eius a ratione.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='font-bold text-lg p-1 mb-2'>Analyst Estimates</h3>
                    <div style={ { width: '100%', height: '300px' } } className='flex items-center justify-start'>
                        <Pie data={ data } options={ options } />
                    </div>
                </div>
            </div>
        </>
    )
}
