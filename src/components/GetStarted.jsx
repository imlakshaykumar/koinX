import getStarted from '../assets/getStarted.png'
import { TopTrend } from './TopTrend'
import { GoArrowRight } from "react-icons/go";


export const GetStarted = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="flex flex-col justify-center items-center gap-2 bg-blue-600 text-white text-center py-10 px-14 rounded-xl">
                <h2 className='text-2xl font-bold'>Get Started with KoinX for FREE</h2>
                <p className='text-sm'>With our range of features that you can equip for free, koinX allows you to be more educated and aware of your tax reports.</p>
                <img src={ getStarted } alt="" className='w-[300px]' />
                <button className='bg-[#fff] text-black capitalize py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-between'>
                    Get Started for FREE <span className='ml-2 text-lg' ><GoArrowRight /></span>
                </button>
            </div >
            <TopTrend />
        </div>
    )
}
