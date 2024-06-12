import image from '../assets/kanchanara-5hcV51EeeWc-unsplash.jpg'
import { GoArrowRight } from "react-icons/go";

export const About = () => {
    return (
        <div className='bg-white rounded-xl p-4'>
            <h3 className='font-bold text-xl mb-4'>About Bitcoin</h3>
            <div className='text-base'>
                <div className='border-b border-[#adaeaf] pb-3 mb-3'>
                    <p className='font-bold pb-2'>What is Bitcoin?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis est ad dolorem corporis, maxime animi doloremque eveniet eaque consectetur voluptatum quam aspernatur, quo ipsam, autem cum et hic provident. Vitae. lore Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quam unde consequuntur aperiam tempore, magnam id amet enim</p>
                </div>
                <div className='border-b border-[#adaeaf] text-base'>
                    <p className='font-bold pb-2'>Lorem ipsum, dolor sit amet</p>
                    <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque soluta placeat velit ad doloremque animi ex esse quidem, eos consequuntur modi officiis inventore, illo quam sequi at nam atque numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam qui ut tempora expedita ea a facere cupiditate impedit repellat, minus itaque quidem, commodi animi ullam ab optio laborum quibusdam possimus!</p>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sunt quaerat dolorum quis facilis nihil consequuntur repellendus optio commodi odio incidunt ullam, sed ea! Alias quas repudiandae facilis aliquid minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet debitis suscipit sequi nam soluta! Facilis iure dolorem quo qui</p>
                    <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta quam ullam illo maxime commodi architecto, voluptatum repudiandae, reiciendis cumque unde, sint iste! Saepe cupiditate mollitia laboriosam repellat, illum Sapiente quis temporibus amet delectus odio, consectetur fuga nesciunt iure ipsum ut vero id quibusdam eligendi quasi corporis qui dignissimos.</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl mt-5'>Already holding bitcoin?</h3>
                    <div className="flex items-center justify-between gap-6 py-5 px-3 mb-5 border-b border-[#aeadaf]">
                        <div className='flex items-center gap-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-xl p-4'>
                            <div className='max-w-fit object-cover block w-[200px] h-[140px] rounded-xl'>
                                <img src={ image } alt="" className='w-full h-full rounded-xl' />
                            </div>
                            <div>
                                <p className='text-2xl mb-4 text-[#fff] font-bold'>Calculate your Profits</p>
                                <button className='bg-[#fff] capitalize p-2 rounded-lg text-sm font-semibold flex items-center justify-between'>
                                    check now <span className='ml-2 text-lg' ><GoArrowRight /></span>
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 bg-gradient-to-r from-orange-500 from-10% via-orange-500 via-30% to-red-500 to-90% rounded-xl p-4'>
                            <div className='max-w-fit object-cover block w-[200px] h-[140px] rounded-xl'>
                                <img src={ image } alt="" className='w-full h-full rounded-xl' />
                            </div>
                            <div>
                                <p className='text-2xl mb-4 text-[#fff] font-bold'>Calculate your tax liability</p>
                                <button className='bg-[#fff] capitalize p-2 rounded-lg text-sm font-semibold flex items-center justify-between'>
                                    check now <span className='ml-2 text-lg' ><GoArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className='pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quos quis animi, rerum ea illum debitis. Sunt, illo vel earum saepe maxime quae expedita dolores esse sit debitis ea vero?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga impedit velit, accusantium a eaque inventore quis. Voluptates beatae voluptatibus</p>
                </div>
            </div>
        </div>
    )
}
