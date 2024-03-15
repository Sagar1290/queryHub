'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-between items-center mt-10 space-y-4'>
            <h2 className='text-3xl font-bold'>Something went wrong!</h2>
            <button className='bg-gray-300 p-3 rounded-lg text-lg'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}