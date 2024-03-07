import { TradingChart } from "./TradingChart"
import { TradingWidget } from "./TradingWidget"

export const TradingDiv = () => {
    return (

        <>
            <div className="p-4 bg-white rounded-xl h-max mb-3">
                <TradingWidget />
                <TradingChart />
            </div>
        </>
    )
}
