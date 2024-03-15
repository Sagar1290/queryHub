"use client"
import { AiOutlineSearch, AiFillCamera } from "react-icons/ai"
import { useRouter, useSearchParams, usePathname, useParams } from "next/navigation"


const SearchHeaderOptions = () => {
    const router = useRouter()
    const path = usePathname();
    const params = useSearchParams();
    const term = params.get('searchTerm');

    const selectTab = (tab) => {
        router.push(`/search/${tab === 'Images' ? 'image' : 'web'}?searchTerm=${term}`)
    }

    return (
        <div className="flex flex-row justify-start items-center space-x-6 w-full px-3 max-w-4xl mx-auto text-sm md:text-md pt-4 lg:pt-2">
            <div className={`flex flex-row items-center gap-2 px-2 border-b-4 border-transparent cursor-pointer pb-2 ${path === '/search/web' && '!text-blue-600 !border-blue-600'}`} onClick={() => selectTab("All")}>
                <AiOutlineSearch />
                <p>All</p>
            </div>
            <div className={`flex flex-row items-center gap-2 px-2 border-b-4 border-transparent cursor-pointer pb-2 ${path === '/search/image' && '!text-blue-600 !border-blue-600'}`} onClick={() => selectTab("Images")}>
                <AiFillCamera />
                <p>Images</p>
            </div>
        </div >
    )
}

export default SearchHeaderOptions