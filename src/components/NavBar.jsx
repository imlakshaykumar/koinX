import logo from '../assets/image1.png'

export const NavBar = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='block object-cover'>
                    <img src={ logo } alt="logo" className='w-16 h-auto' />
                </div>
                <div className='flex items-center'>
                    <ul className='flex items-center'>
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                    </ul>
                    <button>get Started</button>
                </div>
            </div>
        </>
    )
}
