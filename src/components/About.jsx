import image from '../assets/react.svg'

export const About = () => {
    return (
        <div className='bg-white rounded-xl'>
            <h3 className='font-bold text-xl mb-2'>About Bitcoin</h3>
            <div className='text-base'>
                <div className='border-b border-[#adaeaf] pb-3 mb-3'>
                    <p className='font-bold pb-2'>What is Bitcoin?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis est ad dolorem corporis, maxime animi doloremque eveniet eaque consectetur voluptatum quam aspernatur, quo ipsam, autem cum et hic provident. Vitae. lore Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quam unde consequuntur aperiam tempore, magnam id amet enim</p>
                </div>
                <div className='border-b border-[#adaeaf] text-base'>
                    <p className='font-bold pb-2'>Lorem ipsum, dolor sit amet</p>
                    <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque soluta placeat velit ad doloremque animi ex esse quidem, eos consequuntur modi officiis inventore, illo quam sequi at nam atque numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam qui ut tempora expedita ea a facere cupiditate impedit repellat, minus itaque quidem, commodi animi ullam ab optio laborum quibusdam possimus!</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sunt quaerat dolorum quis facilis nihil consequuntur repellendus optio commodi odio incidunt ullam, sed ea! Alias quas repudiandae facilis aliquid minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet debitis suscipit sequi nam soluta! Facilis iure dolorem quo qui</p>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta quam ullam illo maxime commodi architecto, voluptatum repudiandae, reiciendis cumque unde, sint iste! Saepe cupiditate mollitia laboriosam repellat, illum Sapiente quis temporibus amet delectus odio, consectetur fuga nesciunt iure ipsum ut vero id quibusdam eligendi quasi corporis qui dignissimos.</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl mt-5'>Already holding bitcoin?</h3>
                    <div className="flex flex-row items-center justify-center gap-10 p-5 mb-5 border-b border-[#aeadaf]">
                        <div className='flex items-center gap-5 bg-blue-300 rounded-2xl p-4'>
                            <div className='max-w-fit object-cover block border-2 border-[#aeadaf]'>
                                <img src={ image } alt="" className=' w-40' />
                            </div>
                            <div>
                                <p className='text-3xl text-[#f1f1f3]' >Calculate your Profits</p>
                                <button className='bg-[#f1f1f3] capitalize py-2 px-4 rounded-lg'>check now</button>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 bg-red-300 rounded-2xl p-4'>
                            <div className='max-w-fit object-cover block border-2 border-[#aeadaf]'>
                                <img src={ image } alt="" className=' w-40' />
                            </div>
                            <div>
                                <p className='text-3xl text-[#f1f1f3]' >Calculate your Profits</p>
                                <button className='bg-[#f1f1f3] capitalize py-2 px-4 rounded-lg'>check now</button>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quos quis animi, rerum ea illum debitis. Sunt, illo vel earum saepe maxime quae expedita dolores esse sit debitis ea vero?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga impedit velit, accusantium a eaque inventore quis. Voluptates beatae voluptatibus</p>
                </div>
            </div>
        </div>
    )
}
