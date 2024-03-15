"use client"
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchTerm = searchParams.get("searchTerm")
    var startIndex = +searchParams.get("start") || 1

    return (
        <div>
            <div className="flex flex-row gap-1 text-sm sm:text-md sm:gap-8">
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex > 1 ? startIndex - 10 : 1}`}  >
                    <button className="flex flex-row items-center p-3 border rounded-md hover:bg-blue-500 hover:text-white disabled:hover:opacity-80" disabled={(startIndex <= 1)}>
                        <MdKeyboardArrowLeft className='text-lg' />
                        <span>Previous</span>
                    </button>
                </Link>
                <div className='p-3 text-blue-500'>current page is {parseInt(startIndex / 10) + 1}</div>
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex < 91 ? startIndex + 10 : 91}`}  >
                    <button className="flex flex-row items-center p-3 border rounded-md hover:bg-blue-500 hover:text-white disabled:opacity-80 disabled:bg-blue-600 disabled:text-white" disabled={(startIndex >= 91)}>
                        <span>Next</span>
                        <MdKeyboardArrowRight className='text-lg' />
                    </button>
                </Link>
            </div>
        </div>
    )
}
