import { About } from '../components/About'
// import DonutChart from './DonutChart'
import { GetStarted } from "./GetStarted"
import { Team } from './Team'
import { Tokenomics } from './Tokenomics'

export const Main = () => {
    return (
        <div className="flex gap-5 mt-6 w-[1500px] mx-auto">
            <div className="border-2 border-black w-2/3">
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
