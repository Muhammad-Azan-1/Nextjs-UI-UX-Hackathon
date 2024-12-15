'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { trendingProduct } from "@/Data/Data";
const TrendingProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);
  return (
    <>
      <div className="w-full h-auto mt-24">
        <h1 className="font-josefin max-w:text-[32px] font-[700] text-[42px] text-[#1A0B5B] text-center">
          Trending Products
        </h1>

        <div className="w-full h-full pt-6 flex justify-center  gap-y-14   flex-wrap lg:flex-nowrap md:gap-x-[30px] min3:gap-x-[25px] lg:gap-3 xl:gap-5 px-3 min3:px-2 xl:px-0">
          {trendingProduct.map(({id,name,image,alt,price,originalPrice})=>(
        <div key={id} className="h-[350px] w-[90%] md:w-[340px]  min3:w-[270px] shadow-lg" data-aos="fade-up">
            <div className="flex justify-center items-center bg-[white] w-[100%] h-[75%]">
              <div className="group overflow-hidden bg-[#F6F7FB] w-[97%] md:w-[90%] flex justify-center items-center h-[90%]">
                <Image
                  src={image}
                  alt={alt}
                  width={171}
                  height={172}
                  className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out "
                ></Image>
              </div>
            </div>
           

            <div className="group h-[25%] p-1 w-full bg-white   cursor-pointer flex flex-col  items-center gap-1 shadow-xl ">
              <h1 className="font-poppins text-[#1A0B5B] font-lato text-[18px] font-[700]">
                {name}
              </h1>

              <div className="flex items-center justify-center gap-3 pb-4 w-full">
                <h3 className=" text-[#1A0B5B] text-[15px] font-josefin font-[700]">
                {price}
                </h3>
                <h3 className=" text-[#1518754D] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
                 {originalPrice}
                </h3>
              </div>
            </div>
 
          </div>
                    ))}
              </div>



        {/* box2 of images */}
        <div className="w-full h-auto flex mt-16 justify-center gap-x-[28px] gap-y-[50px] min5:gap-5 items-center flex-wrap lg:flex-nowrap px-3 xl:px-0">
        <div className="w-[100%] min4:w-[430px] h-[280px] bg-[#FFF6FB] px-6 py-4  flex flex-col">
          <div className="mt-1">
            <h1 className="font-josefin font-[600] text-[25px] text-[#151875]">23% off in all products</h1>
            <p className="text-[#FB2E86] inline-block font-[600] font-lato border-b-[1px] border-b-[#FB2E86]">Shop Now</p>
          </div>
          <div className="flex justify-end ml-4 pb-10 ">
            <Image src='/images/clock.svg' alt="clock image" className="w-[213px] max-w:w-[170px]"  width={213} height={220}></Image>
          </div>
        </div>

          {/* box3 */}
          <div className="w-[100%] min4:w-[430px] h-[280px] bg-[#EEEFFB] px-6 py-4  flex flex-col">
          <div className="mt-1">
            <h1 className="font-josefin font-[600] text-[25px] text-[#151875]">23% off in all products</h1>
            <p className="text-[#FB2E86] inline-block font-[600] font-lato border-b-[1px] border-b-[#FB2E86]">Shop Now</p>
          </div>
          <div className="flex justify-end items-end pt-6 ">
            <Image src='/images/book.svg' alt="box image" className="w-[312px] max-w:w-[240px]"  width={312} height={173}></Image>
          </div>
        </div>

        {/* box4 */}

        <div className="h-[280px] w-[290px] flex flex-col  justify-between items-center  ">
          <div className="flex w-full justify-between items-center">
            <div className="bg-[#F5F6F8] h-[74px] w-[107px] flex justify-center items-center">
            <Image src='/images/woodenchair1.svg'  alt="chair" width={65} height={71}></Image>
            </div>
            <div>
              <h2 className="text-[#151875] font-josefin text-[16px]  lg:text-[13px] min5:text-[16px] min5:ml-1 ml-0">Executive Seat chair</h2>
              <p className="text-[#151875] text-[12px] font-josefin min5:ml-1 line-through">$32.00</p>
            </div>
          </div>


        <div className="flex w-full justify-between items-center">
            <div className="bg-[#F5F6F8] h-[74px] w-[107px] flex justify-center items-center">
            <Image src='/images/woodenchair1.svg'  alt="chair" width={65} height={71}></Image>
            </div>
            <div>
              <h2 className="text-[#151875] font-josefin text-[16px]  lg:text-[13px] min5:text-[16px] min5:ml-1 ml-0">Executive Seat chair</h2>
              <p className="text-[#151875] text-[12px] font-josefin min5:ml-1 line-through">$32.00</p>
            </div>
          </div>


         <div className="flex w-full justify-between items-center">
            <div className="bg-[#F5F6F8] h-[74px] w-[107px] flex justify-center items-center">
            <Image src='/images/woodenchair1.svg'  alt="chair" width={65} height={71}></Image>
            </div>
            <div>
              <h2 className="text-[#151875] font-josefin text-[16px] lg:text-[13px] min5:text-[16px] min5:ml-1 ml-0">Executive Seat chair</h2>
              <p className="text-[#151875] text-[12px] font-josefin ml-1 min5:ml-0 line-through">$32.00</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
