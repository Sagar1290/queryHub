"use client"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { RxCross2 } from 'react-icons/rx'
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const SearchBox = () => {
    const params = useSearchParams();
    const term = params.get("searchTerm")

    const [formData, setFormData] = useState(term);

    const handleChange = (e) => {
        setFormData(e.target.value);
    }
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.trim() === "") {
            return
        }
        router.push(`/search/web?searchTerm=${formData}`)
    }


    return (
        <Suspense>
            <div className="">
                <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto border hover:shadow-md focus-within:shadow-md flex flex-row items-center rounded-full p-2 transition-shadow space-x-2">
                    <input placeholder='Search for anything' value={formData} className="flex-shrink w-[80%] sm:w-full px-2 focus:outline-none" onChange={handleChange} />
                    <RxCross2 className="mr-2 cursor-pointer hidden sm:flex" onClick={() => setFormData("")} />
                    <BsFillMicFill className="hidden sm:flex cursor-pointer border-l text-4xl pl-4" />
                    <AiOutlineSearch className="text-4xl px-2 cursor-pointer" onClick={handleSubmit} />
                </form>
            </div>
        </Suspense>
    )
}

export default SearchBox