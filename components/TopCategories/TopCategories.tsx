import Image from "next/image"
const TopCategories = () => {
  return (
    <>
    <div className="w-full"> 
    <h1 className="font-josefin max-w:text-[32px] font-[700] text-[42px] mt-16 text-[#1A0B5B] text-center">
       Top Categories
        </h1>

        <div className="w-full pt-10 h-auto flex justify-center gap-x-8  gap-y-20 lg:gap-4 px-3 flex-wrap lg:flex-nowrap min5:px-0 items-center  ">
            <div className="h-[250px] w-[250px] rounded-[100%] bg-[#F7F7F7] flex justify-center items-center hover:border-l-[10px]  border-[#8575d7ed] transition-all">
            <Image src="/images/image 20.svg" className="object-cover " alt="item2"width={180} height={180}></Image>
            </div>
            
            <div className="h-[250px] w-[250px] rounded-[100%] bg-[#F7F7F7] flex justify-center items-center  hover:border-l-[10px] hover:border-[#8575d7ed]  transition-all ">
            <Image src="/images/trendingChair1.svg" className="object-cover " alt="item2"width={175} height={180}></Image>
            </div>


            <div className="h-[250px] w-[250px] rounded-[100%] bg-[#F7F7F7] flex justify-center items-center  hover:border-l-[10px] hover:border-[#8575d7ed]  transition-all">
            <Image src="/images/cantileverChair.svg" className="object-cover " alt="item2"width={180} height={180}></Image>
            </div>


            <div className="h-[250px] w-[250px] rounded-[100%] bg-[#F7F7F7] flex justify-center items-center hover:border-l-[10px] hover:border-[#8575d7ed]  transition-all">
            <Image src="/images/image 20.svg" className="object-cover " alt="item2"width={180} height={180}></Image>
            </div>

            
        </div>

    </div>
    </>
  )
}

export default TopCategories
