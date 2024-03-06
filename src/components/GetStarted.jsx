import getStarted from '../assets/getStarted.png'
import { TopTrend } from './TopTrend'

export const GetStarted = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="flex flex-col justify-center items-center gap-5 bg-blue-700 text-white text-center p-5 rounded-xl">
                <h2 className='text-2xl font-bold'>Get Started with KoinX for FREE</h2>
                <p>with our range of features that you can equip for free, koinX allows you to be more educated and aware of your tax reports.</p>
                <img src={ getStarted } alt="" />
                <button className='bg-[#fff] text-black text-lg py-2 px-4 rounded-lg'>Get Started for FREE</button>
            </div >
            <TopTrend />
        </div>
    )
}
