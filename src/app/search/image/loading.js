
export default function loading() {
    return (
        <>
            <div className="pt-10 w-full max-w-2xl  mx-auto flex flex-row flex-wrap justify-center animate-pulse" >
                <div className="p-4 w-56 h-56 flex flex-col gap-2">
                    <div className=" p-3 w-full h-[75%] bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                </div>
                <div className="p-4 w-56 h-56 flex flex-col gap-2">
                    <div className=" p-3 w-full h-[75%] bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                </div>
                <div className="p-4 w-56 h-56 flex flex-col gap-2">
                    <div className=" p-3 w-full h-[75%] bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                </div>
                <div className="flex md:hidden p-4 w-48 h-48 flex-col gap-2">
                    <div className=" p-3 w-full h-[75%] bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                    <div className=" h-[10%] w-full p-2 bg-cyan-300 rounded-md"></div>
                </div>
            </div>
        </>
    )
}
