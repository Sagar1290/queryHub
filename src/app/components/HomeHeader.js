import Link from "next/link"
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
    return (
        <header className="py-4 w-full">
            <div className="flex flex-row justify-end items-center space-x-4 pr-4">
                <Link href="https://gmail.com" target="blank" className="hover:text-blue-700 hover:underline">
                    Gmail
                </Link>
                <Link href="https://google.images.com" target="blank" className="hover:text-blue-700 hover:underline" >
                    Images
                </Link>

                <TbGridDots className="text-4xl p-2 bg-transparent hover:bg-gray-200 rounded-full" />

                <button className="p-2 bg-blue-500 text-white rounded-md">Sign In</button>

            </div>
        </header>
    )
}

export default HomeHeader