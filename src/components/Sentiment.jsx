import react from '../assets/react.svg'

export const Sentiment = () => {
    return (
        <>
            <div className='p-4 bg-white mb-5 rounded-xl flex flex-col gap-3'>
                <h3 className='text-xl font-bold'>Sentiment</h3>
                <p className='font-bold text-lg'>Key events</p>
                <div className="p-2 flex gap-5 items-center justify-center ">
                    <div className='p-5 flex justify-start items-start gap-5 bg-red-100 rounded-lg'>
                        <img src={ react } alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio velit atque eos?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, expedita quis. Nobis error magni, quas eos excepturi, temporibus veniam distinctio eaque consequatur, libero dolorum deleniti sed repellendus eius a ratione.</p>
                        </div>
                    </div>
                    <div className='p-5 flex justify-start items-start gap-5 bg-blue-100 rounded-lg'>
                        <img src={ react } alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio velit atque eos?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, expedita quis. Nobis error magni, quas eos excepturi, temporibus veniam distinctio eaque consequatur, libero dolorum deleniti sed repellendus eius a ratione.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='font-bold text-lg p-1 mb-2'>Analyst Estimates</h3>
                    <div>
                        <div className='bg-green-100 p-10 rounded-full w-fit h-auto m-3'>
                            <span className='text-green-300 font-medium text-2xl'>76%</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
