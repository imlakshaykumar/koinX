import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import react from '../assets/react.svg';

export const Sentiment = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({
        labels: ['Sell', 'Buy', 'Hold'],
        datasets: [
            {
                data: [20, 30, 50], // Sample data (you can replace this with actual data)
                backgroundColor: ['#FF5733', '#2ECC71', '#FFC300'], // Red, Green, Orange
                hoverBackgroundColor: ['#FF5733', '#2ECC71', '#FFC300'],
            },
        ],
    });

    const updatedData = {
        labels: data.labels,
        datasets: [
            {
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor,
                hoverBackgroundColor: data.datasets[0].hoverBackgroundColor,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    usePointStyle: true,
                },
            },
        },
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
                    <div style={ { width: '200px', height: '200px' } } className='flex items-center justify-around'>
                        <Pie data={ updatedData } options={ options } className='text-lg' />
                        {/* <div className="labels">
                            <div className="label red">Sell - { percentages[0] }%</div>
                            <div className="label green">Buy - { percentages[1] }%</div>
                            <div className="label orange">Hold - { percentages[2] }%</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
