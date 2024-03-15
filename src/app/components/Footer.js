import React from 'react'
import CountryLookup from './CountryLookup'

const Footer = () => {
    return (
        <footer className='flex flex-col divide-y-2 w-full bg-cyan-100 text-sm absolute bottom-0'>
            <div className='flex justify-start items-center p-3 px-8'>
                <CountryLookup />
            </div>
            <div className='flex md:flex-row flex-col justify-between items-center p-3 px-8'>
                <div className='flex flex-row gap-4 whitespace-nowrap'>
                    <p className='hover:underline cursor-pointer'>About</p>
                    <p className='hover:underline cursor-pointer'>Advertising</p>
                    <p className='hover:underline cursor-pointer'>Business</p>
                    <p className='hover:underline cursor-pointer'>How Search Works</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <p className='hover:underline cursor-pointer'>Privacy</p>
                    <p className='hover:underline cursor-pointer'>Terms</p>
                    <p className='hover:underline cursor-pointer'>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer