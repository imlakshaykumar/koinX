import axios from "axios"
import { useEffect, useState } from "react";

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

    console.log(coinData);

    useEffect(() => {
        allData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <div className="border-2 border-[#f1f1f3] rounded-lg p-2 grid grid-cols-7 gap-5 bg-white mt-5">
                {
                    coinData && coinData.map((coin, index) => {
                        return (
                            // <div key={ index } className="w-fit" >
                            <div className="border-2 border-[#f1f1f3] p-5" key={ index } >
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
            </div >

        </>
    )
}
