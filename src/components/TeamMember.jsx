import image from '../assets/avdalyan-DQjWG8NBGWg-unsplash.jpg'

export const TeamMember = () => {
    return (
        <div className='flex gap-7 py-3 px-6 bg-blue-50 rounded-lg items-center'>
            <div className='flex flex-col w-fit items-center'>
                <div className='rounded-xl max-w-fit object-cover block mb-2'>
                    <img src={ image } alt="" className='rounded-xl w-[600px] h-[120px] block' />
                </div>
                <p className=' font-bold text-md'>Sia Smith</p>
                <span className='text-sm mb-1 mt-0 text-gray-500'>Designation</span>
            </div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia modi, dolorum ea fuga sit deleniti nam atque necessitatibus in quos ducimus, nemo qui hic officia totam suscipit eius explicabo. Architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at a deleniti corrupti debitis tempore ipsam consequatur est, blanditiis alias illo expedita, tenetur labore amet quos deserunt. Ex, quaerat deserunt?</div>
        </div>
    )
}
