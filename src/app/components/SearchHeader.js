import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { TbGridDots } from 'react-icons/tb'
import { RiSettings3Line } from 'react-icons/ri'
import SearchHeaderOptions from './SearchHeaderOptions'

const SearchHeader = () => {
    return (
        <header className='w-full sticky bg-white top-0 pt-4 sm:pt-2 flex flex-col  border-b mb-2' >
            <div className=' flex flex-row justify-between items-center'>
                <Link href="/" className=''>
                    <Image src="/QueryHub.png" height={80} width={120} alt='logo' priority style={{ width: "auto" }} className='p-2 px-3 sm:ml-2' />
                </Link>
                <div className='sm:w-full '>
                    <SearchBox />
                </div>
                <div className='hidden md:flex flex-row '>
                    <RiSettings3Line className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl cursor-pointer' />
                    <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl cursor-pointer' />
                </div>
                <button className="mx-2 p-2 bg-blue-500 text-white sm:text-sm rounded-md whitespace-nowrap hover:opacity-90">Sign In</button>
            </div>
            <SearchHeaderOptions />
        </header>
    )
}

export default SearchHeader