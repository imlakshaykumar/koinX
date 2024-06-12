import axios from "axios"
import { useEffect, useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";


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
    }, []);

    return (
        <>
            <div className="p-5 bg-white rounded-xl">
                <h2 className="text-2xl font-bold my-3">Trending Coins (24h)</h2>
                {
                    trendData && trendData.map((coin, index) => {
                        return (
                            <div key={ index } className="flex justify-between w-full items-center mt-3">
                                <div className="flex gap-2 items-center justify-start w-full py-1 px-3">
                                    <div className="block object-contain">
                                        <img src={ coin.item.small } alt="coin logo" className=" rounded-full w-8 mr-2" />
                                    </div>
                                    <p className="text-sm">{ coin.item.name }({ coin.item.symbol })</p>
                                </div>
                                <div className="rounded-md w-1/4 text-center">
                                    <p className={ `border-2 text-sm rounded-md py-2 flex justify-center items-center ${coin.isProfit ? 'border-green-300 bg-green-200' : 'border-red-300 bg-red-200'}` }>
                                        { coin.isProfit ?
                                            (
                                                <div className="flex items-center text-green-700">
                                                    <TiArrowSortedUp className="text-lg" /> { coin.usdChange }%
                                                </div>
                                            ) : (
                                                <div className="flex items-center text-red-700">
                                                    <TiArrowSortedDown className="text-lg" /> { coin.usdChange }%
                                                </div>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div >
        </>
    )
}
