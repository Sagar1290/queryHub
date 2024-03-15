import Image from "next/image"
import HomeHeader from "./components/HomeHeader"
import HomeSearch from "./components/HomeSearch"
import QueryHub from '../../public/QueryHub.png'

const page = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex justify-center flex-col items-center">
        <Image src={QueryHub} height={100} width={300} alt="logo" priority style={{ width: "auto" }} className="p-8" />
        <HomeSearch />
      </div>

    </>
  )
}

export default page