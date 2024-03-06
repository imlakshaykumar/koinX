import logo from '../assets/image1.png'

export const NavBar = () => {
    return (
        <>
            <div className='flex items-center justify-between py-5 px-14 border-b shadow-md'>
                <div className='block object-cover'>
                    <img src={ logo } alt="logo" className='w-16 h-auto' />
                </div>
                <div className='flex items-center w-1/3 justify-between'>
                    <ul className='flex items-center w-3/4 justify-evenly'>
                        <li className='p-2 cursor-pointer' >Crypto Taxes</li>
                        <li className='p-2 cursor-pointer'>Free Tools</li>
                        <li className='p-2 cursor-pointer'>Resource Center</li>
                    </ul>
                    <button className='py-2 px-5 bg-blue-700 text-white font-medium rounded-lg capitalize cursor-pointer'>get Started</button>
                </div>
            </div>
        </>
    )
}
