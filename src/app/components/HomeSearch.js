"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeSearch = () => {

    const [input, setInput] = useState("");
    const [randomWordLoading, setRandomWordLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            toast.error("Write Something to Search");
            return
        }
        router.push(`search/web?searchTerm=${input}`)

    }

    const SearchRandomWord = async (e) => {
        setRandomWordLoading(true);
        const word = await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0])
        if (!word) {
            toast("word generation failed")
        }

        router.push(`search/web?searchTerm=${word}`)
        setRandomWordLoading(false);
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='p-3 flex flex-row justify-center items-center border border-gray-200 hover:shadow-md focus-within:shadow-md transition-shadow rounded-full w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl'>
                <AiOutlineSearch className='text-3xl md:text-2xl' />
                <input type='text' placeholder='Search Anything' className=' px-2 flex-grow focus:outline-none' onChange={handleChange} />
                <BsFillMicFill className='text-3xl md:text-2xl' />
            </form>
            <div className='flex flex-col sm:flex-row text-sm sm:text-md  gap-4 mt-4' >
                <button onClick={handleSubmit} className='w-36 p-2 bg-cyan-100 hover:shadow-md '>Google Search</button>
                <button className='w-36 p-2 bg-cyan-100 hover:shadow-md disabled:opacity-80' disabled={randomWordLoading} onClick={SearchRandomWord}>
                    {randomWordLoading ? "Searching..." : "I'm Feeling Lucky"}
                </button>
                <ToastContainer />
            </div>
        </>
    )
}

export default HomeSearch   