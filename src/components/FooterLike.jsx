import axios from "axios"
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/footerLike.css'

export const FooterLike = () => {
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
    }, []); // Empty dependency array to run the effect only once

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
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };
    return (
        <div className="w-full bg-white mx-auto flex flex-col gap-5 pt-5 pb-16 mt-14">
            <div className=" w-[1250px] mx-auto slider-container">
                <h3 className=" text-xl font-medium pb-5 mt-10">You may also like</h3>
                <Slider { ...settings }>
                    {
                        coinData && coinData.map((coin, index) => {
                            return (
                                // <div key={ index } className="w-fit" >
                                <div className="flex flex-col border-2 border-[#f1f1f3] rounded-lg p-3 items-center" key={ index } >
                                    <div className="flex items-center justify-start">
                                        <div className="block object-contain">
                                            <img src={ coin.item.small } alt="coin logo" className=" rounded-full w-8" />
                                        </div>
                                        <p>{ coin.item.symbol }</p>
                                        <p className={ `border-2 ${coin.isProfit ? 'border-green-600 bg-green-300 rounded-sm text-xs py-1 px-2' : 'border-red-600 bg-red-300 py-1 px-2 rounded-sm text-xs'}` }>{ coin.usdChange }%</p>
                                    </div>
                                    <p className="w-1/2 overflow-hidden text-sm my-2">{ coin.item.data.price }</p>
                                    <div className="object-contain block w-fit">
                                        <img src={ coin.item.data.sparkline } alt="" className="" />
                                    </div>
                                </div>
                                // </div >
                            )
                        })
                    }
                </Slider>
            </div >

            <div className=" w-[1250px] mx-auto slider-container">
                <h3 className=" text-xl font-medium pb-5 mt-10">Trending Coins</h3>
                <Slider { ...settings }>
                    {
                        coinData && coinData.map((coin, index) => {
                            return (
                                // <div key={ index } className="w-fit" >
                                <div className="flex flex-col border-2 border-[#f1f1f3] rounded-lg p-3 items-center" key={ index } >
                                    <div className="flex items-center justify-start">
                                        <div className="block object-contain">
                                            <img src={ coin.item.small } alt="coin logo" className=" rounded-full w-8" />
                                        </div>
                                        <p>{ coin.item.symbol }</p>
                                        <p className={ `border-2 ${coin.isProfit ? 'border-green-600 bg-green-300 rounded-sm text-xs py-1 px-2' : 'border-red-600 bg-red-300 py-1 px-2 rounded-sm text-xs'}` }>{ coin.usdChange }%</p>
                                    </div>
                                    <p className="w-1/2 overflow-hidden text-sm my-2">{ coin.item.data.price }</p>
                                    <div className="object-contain block w-fit">
                                        <img src={ coin.item.data.sparkline } alt="" className="" />
                                    </div>
                                </div>
                                // </div >
                            )
                        })
                    }
                </Slider>
            </div >

        </div>
    )
}
