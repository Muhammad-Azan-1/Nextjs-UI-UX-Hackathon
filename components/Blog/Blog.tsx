import Image from "next/image"

const Blog = () => {
  return (
    <>
        <div className="w-full h-auto mt-8 ">
        <h1 className="font-josefin max-w:text-[32px] text-[42px] font-[700] text-[#1A0B5B] text-center">
          Latest Blog
        </h1>

        <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap px-2 xl:px-0 items-center w-full mt-8">
        <div className="h-[500px] w-[380px] transition duration-300 transform hover:-translate-y-2 group ">
            <div className="w-full ">
            <Image src="/images/blog1.svg" alt="" width={380} height={380} className="w-full rounded-[6px]"></Image>
            </div>

            <div className="flex flex-col h-[200px] justify-evenly px-[16px] rounded-[6px] bg-white shadow-md group-hover:shadow-lg">
                <div className="flex justify-start gap-8">
                <div className="flex items-center"><Image src='/images/blogLogo.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">SaberAli</span></div>
                <div className="flex items-center"><Image src='/images/calendar.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">21 August,2020</span></div>
                </div>
                <div>
                    <h3 className="font-josefin text-[18px] font-[600] text-[#151875]">Top esssential Trends in 2021</h3>
                </div>
                <div>
                    <p className="text-[#72718F]">More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                </div>

                    <div className="group">
                        <p className="text-[#151875] group-hover:underline group-hover:text-[#FB2E86]">Read More</p>
                    </div>
            </div>
        </div>

{/* box2 */}

        <div className="h-[500px] w-[380px] transition duration-300 transform hover:-translate-y-2 group">
            <div className="w-full ">
            <Image src="/images/blog3.svg" alt="" width={380} height={380} className="w-full rounded-[6px]"></Image>
            </div>

            <div className="flex flex-col h-[200px] justify-evenly px-[16px] rounded-[6px] bg-white shadow-md group-hover:shadow-lg">
                <div className="flex justify-start gap-8">
                <div className="flex items-center"><Image src='/images/blogLogo.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">SaberAli</span></div>
                <div className="flex items-center"><Image src='/images/calendar.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">21 August,2020</span></div>
                </div>
                <div>
                    <h3 className="font-josefin text-[18px] font-[600] text-[#151875]">Top esssential Trends in 2021</h3>
                </div>
                <div>
                    <p className="text-[#72718F]">More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                </div>

                    <div className="group">
                        <p className="text-[#151875] group-hover:underline group-hover:text-[#FB2E86]">Read More</p>
                    </div>
            </div>
        </div>



{/* box3 */}
        <div className="h-[500px] w-[380px] transition duration-300 transform hover:-translate-y-2 group">
            <div className="w-full ">
            <Image src="/images/blog2.svg" alt="" width={380} height={380} className="w-full rounded-[6px]"></Image>
            </div>

            <div className="flex flex-col h-[200px] justify-evenly px-[16px] rounded-[6px] bg-white shadow-md group-hover:shadow-lg">
                <div className="flex justify-start gap-8">
                <div className="flex items-center"><Image src='/images/blogLogo.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">SaberAli</span></div>
                <div className="flex items-center"><Image src='/images/calendar.svg' alt="pen loogo" className="" width={14} height={40}></Image><span className="text-[#151875] ml-1">21 August,2020</span></div>
                </div>
                <div>
                    <h3 className="font-josefin text-[18px] font-[600] text-[#151875]">Top esssential Trends in 2021</h3>
                </div>
                <div>
                    <p className="text-[#72718F]">More off this less hello samlande lied much
                    over tightly circa horse taped mightly</p>
                </div>

                    <div className="group">
                        <p className="text-[#151875] group-hover:underline group-hover:text-[#FB2E86]">Read More</p>
                    </div>
            </div>
        </div>
        </div>

        </div>
    </>
  )
}

export default Blog