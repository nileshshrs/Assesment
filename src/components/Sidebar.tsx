import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav>
            <ul className='flex flex-col gap-3 w-full'>
                <li className='w-full hover:bg-gray-300/40 p-3 rounded-sm hover:p-4 transition-all ease-in'>
                    <Link to="/" className='font-bold w-full block'>
                        HOME
                    </Link>
                </li>
                <li className='w-full hover:bg-gray-300/40 p-3 rounded-sm hover:p-4 transition-all ease-in'>
                    <Link to="/data" className='font-bold w-full block'>
                        DATA
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
