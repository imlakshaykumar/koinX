// import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
// import react from '../assets/react.svg';
import { IoNewspaperOutline } from "react-icons/io5";
import { keyEvents } from '../utils/keyEvents'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/sentiment.css'

// import ChartDataLabels from 'chartjs-plugin-datalabels';


// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);

export const Sentiment = () => {

    // let textData = keyEvents;
    // console.log(textData);


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

    function SampleNextArrow(props) {
        // eslint-disable-next-line react/prop-types
        const { className, style, onClick } = props;
        return (
            <div
                className={ className }
                style={ { ...style } }
                onClick={ onClick }
            />
        );
    }

    function SamplePrevArrow(props) {
        // eslint-disable-next-line react/prop-types
        const { className, style, onClick } = props;
        return (
            <div
                className={ className }
                style={ { ...style } }
                onClick={ onClick }
            />
        );
    }

    let settings = {
        // dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='p-4 bg-white mb-5 rounded-xl flex flex-col gap-3'>
                <h3 className='text-xl font-bold'>Sentiment</h3>
                <p className='font-bold text-lg'>Key events</p>
                {/* <div className="px-4 py-2"> */ }
                <Slider { ...settings }>
                    {
                        keyEvents?.map((event, index) => {
                            const bgColor = index % 2 !== 0 ? 'bg-green-100' : 'bg-blue-100';
                            const bgColorIcon = index % 2 !== 0 ? 'bg-green-500' : 'bg-blue-500';
                            return (
                                // <div key={ key } className='flex flex-col rounded-lg items-center'>
                                <div key={ index } className={ `${bgColor} rounded-lg py-2 px-4 keyClass` }>
                                    <div className={ `flex gap-3` }>
                                        <span className={ `h-fit text-4xl ${bgColorIcon} text-white p-2 rounded-[50%]` }>
                                            <IoNewspaperOutline />
                                        </span>
                                        <div className='flex flex-col gap-1'>
                                            <p className='font-bold'>{ event.boldText }</p>
                                            <p>{ event.normalText }</p>
                                        </div>
                                    </div>
                                </div>
                                // </div>
                            )
                        })
                    }
                </Slider>
                {/* </div> */ }

                <div>
                    <h3 className='font-bold text-lg p-1 mb-2'>Analyst Estimates</h3>
                    <div className='flex items-center justify-start w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
                        <Pie data={ data } options={ options } />
                    </div>
                </div>
            </div>
        </>
    )
}
