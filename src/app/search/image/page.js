
import Link from "next/link";
import Error from "../error";
import Pagination from "@/app/components/Pagination";
import Image from "next/image";

export async function generateMetadata({ searchParams }) {
    return {
        title: `image-results: ${searchParams.searchTerm}`,
    }
}

const page = async ({ searchParams }) => {
    const startIndex = searchParams.start || "1"

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`)

    if (!response.ok) {
        return <Error />
    }

    const data = await response.json();
    const results = data.items

    if (!results) {
        return (
            <div className="flex flex-col mt-10 items-center">
                <h1 className='text-3xl font-bold'>Can&apos;t Serach Results for the word {searchParams.searchTerm}</h1>
                <p className="text-lg py-4">
                    Try Searching Some New Word {" "}
                    <Link className="text-blue-500" href="/">Home</Link>
                </p>
            </div>
        )
    }

    return (
        <div className="w-full px-4 pb-52" >
            <p className="text-gray-600 text-sm w-full max-w-4xl mx-auto mb-6"> About {data.searchInformation?.formattedTotalResults} results in {data.searchInformation?.formattedSearchTime} seconds</p>
            <div className="w-full px-4  mx-auto  flex flex-wrap justify-around" >
                {results.map((image, index) => {
                    return <div key={index} className="w-full max-w-[300px] p-4 group">
                        <Link href={image.link}>
                            <div className=" h-[180px] w-[300px] group-hover:shadow-xl">
                                <Image src={image.link} alt={image.title} width={300} height={300} className="object-contain h-[180px] w-[300px]" />
                            </div>
                        </Link>
                        <Link className="text-sm flex flex-col py-2" href={image.image.contextLink}>
                            <p className="text-md font-semibold truncate group-hover:underline">{image.title}</p>
                            <p className="text-red-500 ">{image.displayLink}</p>
                        </Link>
                    </div>
                })}
            </div>
            <div className="w-full max-w-4xl mx-auto  mt-12 flex justify-center">
                <Pagination />
            </div>
        </div >
    )
}

export default page