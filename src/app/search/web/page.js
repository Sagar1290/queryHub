import Link from "next/link";
import Error from "../error";

import WebSearchResult from "@/app/components/WebSearchResult";

export async function generateMetadata({ searchParams }) {
    return {
        title: `web-results: ${searchParams.searchTerm}`,
    }
}

const page = async ({ searchParams }) => {
    const startIndex = searchParams.start || "1"

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`)

    if (!response.ok) {
        return <Error />
    }

    const data = await response.json();
    const results = data.items

    if (!results) {
        return (
            <div className="flex flex-col mt-10 items-center px-4 justify-center text-center text-sm sm:text-md">
                <h1 className='text-lg sm:text-3xl font-bold'>Can&apos;t Serach Results for the word {searchParams.searchTerm}</h1>
                <p className="text-sm sm:text-lg py-4">
                    Try Searching Some Other Query {" "}
                    <Link className="text-blue-500" href="/">Home</Link>
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="w-full px-4 pb-52 ">
                <p className="text-gray-600 text-sm w-full max-w-4xl mx-auto mb-6"> About {data.searchInformation?.formattedTotalResults} results in {data.searchInformation?.formattedSearchTime} seconds</p>
                <WebSearchResult results={results} />
            </div>
        </>
    )
}

export default page