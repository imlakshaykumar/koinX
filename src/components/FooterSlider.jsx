/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/footerLike.css'

export const FooterSlider = () => {
    const [coinData, setCoinData] = useState([]);

    async function allData() {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            // const slicedData = res.data.coins.slice(0, 15);

            const modifiedData = res.data.coins.map(coin => {
                const usdChange = parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(2);
                const isProfit = usdChange >= 0; // Check if the change is positive (profit)

                return {
                    ...coin,
                    isProfit: isProfit,
                    usdChange: usdChange
                };
            });
            setCoinData(modifiedData);
        } catch (error) {
            console.error('Error fetching trending data:', error);
        }
    }

    // console.log(coinData);

    useEffect(() => {
        allData();
    }, []);

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
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 'xl', // extra large screens
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 'lg', // large screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 'md', // medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 'sm', // small screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 'xs', // extra small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <Slider { ...settings }>
                {
                    coinData && coinData.map((coin, index) => {
                        return (
                            // <div key={ index } className="w-fit" >
                            <div className="flex flex-col border-2 bg-white border-[#f1f1f3] rounded-lg p-4 card" key={ index } >
                                <div className="flex items-center justify-start gap-1">
                                    <div className="block object-contain">
                                        <img src={ coin.item.small } alt="coin logo" className=" rounded-full w-8" />
                                    </div>
                                    <p>{ coin.item.symbol }</p>
                                    <p className={ `border-2 ${coin.isProfit ? 'border-green-300 bg-green-200 rounded-sm text-xs py-1 px-2' : 'border-red-300 bg-red-200 py-1 px-2 rounded-sm text-xs'}` }>{ coin.usdChange }%</p>
                                </div>
                                <p className="w-full text-sm mt-2 mb-4">${ parseFloat(coin.item.data.price).toFixed(5) }</p>
                                <div className="object-contain block w-full">
                                    <img src={ coin.item.data.sparkline } alt="" className="" />
                                </div>
                            </div>
                            // </div >
                        )
                    })
                }
            </Slider>
        </>
    )
}
