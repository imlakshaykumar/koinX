import image from '../assets/getStarted.png'

export const TeamMember = () => {
    return (
        <div className='flex gap-8 py-3 px-6 bg-blue-100 rounded-lg items-center'>
            <div className='flex flex-col w-fit items-center'>
                <img src={ image } alt="" className=' w-[350px]' />
                <p>John Smith</p>
                <span>SDE</span>
            </div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia modi, dolorum ea fuga sit deleniti nam atque necessitatibus in quos ducimus, nemo qui hic officia totam suscipit eius explicabo. Architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at a deleniti corrupti debitis tempore ipsam consequatur est, blanditiis alias illo expedita, tenetur labore amet quos deserunt. Ex, quaerat deserunt?</div>
        </div>
    )
}
