import { About } from '../components/About'
// import DonutChart from './DonutChart'
import { GetStarted } from "./GetStarted"
import { Overview } from './Overview'
import { Sentiment } from './Sentiment'
import { Team } from './Team'
import { Tokenomics } from './Tokenomics'
// import { TradingChart } from './TradingChart'
import { TradingDiv } from './TradingDiv'
// import { TradingWidget } from './TradingWidget'

export const Main = () => {
    return (
        <div className="flex gap-5 mt-6 w-[1500px] mx-auto">
            <div className="w-2/3">
                <TradingDiv />
                <Overview />
                <Sentiment />
                <About />
                <Tokenomics />
                <Team />

                {/* <DonutChart /> */ }
            </div>
            <div className="w-1/3">
                <GetStarted />
            </div>
        </div>
    )
}
