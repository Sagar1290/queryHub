import Link from "next/link"
import Pagination from "./Pagination"

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

export default function WebSearchResult({ results }) {
    return (
        <div>
            <div className="w-full max-w-4xl mx-auto  flex flex-col space-y-6" >
                {results && results.map((result, index) => {
                    return (
                        <div key={index} className="flex flex-col" >
                            <Link href={result.link}>
                                <span className="text-red-500 text-sm ">{result.displayLink}</span>
                                <div dangerouslySetInnerHTML={{ __html: result.htmlTitle }} className="text-xl text-[#1a0dab] hover:underline" />
                            </Link>
                            <p className="text-[#4d5156]">{result.snippet}</p>

                        </div>
                    )
                })}

                <Pagination />

            </div>
        </div>
    )
}
