import axios from "axios"
import { useEffect, useState } from "react";

export const FooterLike = () => {

    let [trendData, setTrendData] = useState([])

    async function getTrending() {
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
        setTrendData(res.data.coins)
        // console.log(trendData);
    }

    useEffect(() => {
        getTrending()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (trendData.length !== 0) {
        console.log(trendData);
    }

    return (
        <div className="border-2 border-black m-5 py-8 px-4">
            <h3 className="text-2xl font-bold">You may also like</h3>

            <div className="border-2 border-[#aeadaf]">
                {
                    trendData && trendData.map((coin, index) => {
                        return (
                            <div key={ index }>
                                <div className="flex items-center">
                                    <img src={ coin.item.small } alt="" className=" rounded-full mr-2" />
                                    <p>{ coin.item.symbol }</p>
                                </div>
                                <div>
                                    <p>{ coin.item.data.price }</p>
                                    <div>
                                        <img src={ coin.item.data.sparkline } alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
