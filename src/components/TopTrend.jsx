import axios from "axios"
import { useEffect, useState } from "react";

export const TopTrend = () => {
    const [trendData, setTrendData] = useState([]);

    async function topData() {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            const slicedData = res.data.coins.slice(0, 3);

            const modifiedData = slicedData.map(coin => {
                const usdChange = parseFloat(coin.item.data.price_change_percentage_24h.usd).toFixed(2); // Access 'item' object
                const isProfit = usdChange >= 0; // Check if the change is positive (profit)

                return {
                    ...coin,
                    isProfit: isProfit,
                    usdChange: usdChange
                };
            });
            setTrendData(modifiedData);
        } catch (error) {
            console.error('Error fetching trending data:', error);
        }
    }

    useEffect(() => {
        topData();
    }, []); // Empty dependency array to run the effect only once


    return (
        <>
            <div className="p-5 bg-white rounded-xl">
                <h2 className="text-2xl font-bold my-3">Trending Coins (24h)</h2>
                {
                    trendData && trendData.map((coin, index) => {
                        return (
                            <div key={ index } className="flex justify-between w-full items-center mt-3">
                                <div className="flex items-center justify-start">
                                    <div className="block object-contain">
                                        <img src={ coin.item.small } alt="coin logo" className=" rounded-full w-8 mr-2" />
                                    </div>
                                    <p>{ coin.item.name }({ coin.item.symbol })</p>
                                </div>
                                <div className="">
                                    <p className={ `border-2 text-xs rounded-md py-1 px-2 ${coin.isProfit ? 'border-green-600 bg-green-300' : 'border-red-600 bg-red-300'}` }>{ coin.usdChange }%</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div >
        </>
    )
}
