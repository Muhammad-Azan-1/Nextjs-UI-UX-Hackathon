"use client"
import Image from "next/image";
import { latestProduct1,latestProduct2 } from "@/Data/Data";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"

 const LatestProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);
  return (
    <>
      <div className="w-full h-auto  pt-[90px] " >
        <div className="">
          <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center font-[700]">
            Latest Products
          </h1>
        </div>

        <div className="mt-4">
          <ul className="flex w-full justify-center gap-8 max-w:gap-6 sm:gap-10 text-[#151875] ">
            <li className="hover:text-[#FB2E86] hover:underline max-w:hidden  text-[15px] sm:text-[18px]">
              New Arrival
            </li>
            <li className="hover:text-[#FB2E86] hover:underline text-[15px] sm:text-[18px]">
              Best Seller
            </li>
            <li className="hover:text-[#FB2E86] hover:underline text-[15px] sm:text-[18px]">
              Featured
            </li>
            <li className="hover:text-[#FB2E86] hover:underline text-[15px] sm:text-[18px]">
              Special Offer
            </li>
          </ul>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center items-center px-3 pt-8 lx:px-0">
          <div className="flex w-full h-auto flex-wrap lg:flex-nowrap justify-center gap-x-[24px] gap-y-16  lg:gap-10">

            {latestProduct1.map(({id, image , alt1 , cartIcon , alt2 , heartIcon , alt3 , searchIcon , alt4 ,name , price , originalPrice})=>(
            <div key={id} className="h-[310px] w-[500px] md:w-[360px] group cursor-pointer"  data-aos="fade-up">
              <div className={`relative w-full h-[90%] flex justify-center items-center bg-[#F7F7F7] ${image === '/images/chair2.svg'? 'bg-white' : 'bg-[#F7F7F7]'}`}
             
             
              >
                <Image
                  src={image}
                  alt={alt1}
                  width={230}
                  height={230}
                  className="w-[230px] h-[230px] object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                
                />
                
                <div className={`${image === '/images/chair2.svg' ? 'inline-block' : 'hidden'}`}>
            
                 </div>
                
                <div className="absolute bottom-6 left-2 flex flex-col items-center justify-center gap-3 ">
                  <Image
                    src={cartIcon}
                    alt={alt2}
                    className="mr-2"
                    width={30}
                    height={40}
                  ></Image>
                  <Image
                    src={heartIcon}
                    alt={alt3}
                    className="mr-2"
                    width={15}
                    height={40}
                  ></Image>
                  <Image
                    src={searchIcon}
                    alt={alt4}
                    className="mr-2"
                    width={15}
                    height={40}
                  ></Image>
                </div>
              </div>

              <div className="w-full font-josefin flex justify-between py-2 pr-3 ">
                <p className="text-[#151875] border-b-[2px] border-b-[#EEEFFB]">
                  {name}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-[14px] text-[#151875] ">{originalPrice}</p>
                  <p className=" text-[12px] line-through text-[#FB2448]">
                   {price}
                  </p>
                </div>
              </div>
            </div>
                    ))}



            {/* box2 */}

          </div>
          {/* box4 */}

          <div className="flex w-full  h-auto flex-wrap lg:flex-nowrap justify-center gap-x-[24px] gap-y-16 lg:gap-10 pt-20 ">
            {
              latestProduct2.map(({id, image , alt1 , cartIcon , alt2 , heartIcon , alt3 , searchIcon , alt4 ,name , price , originalPrice})=>(
            <div key={id} className="h-[310px] w-[500px] md:w-[360px] group " data-aos="fade-up">
              <div className="relative w-full h-[90%] flex justify-center items-center bg-[#F7F7F7]  ">
                <Image
                  src={image}
                  alt={alt1}
                  width={230}
                  height={230}
                  className="w-[230px] h-[230px] object-cover cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <div className="absolute bottom-6 left-2 flex flex-col items-center justify-center gap-3 ">
                  <Image
                    src={cartIcon}
                    alt={alt2}
                    className="mr-2"
                    width={30}
                    height={40}
                  ></Image>
                  <Image
                    src={heartIcon}
                    alt={alt3}
                    className="mr-2"
                    width={15}
                    height={40}
                  ></Image>
                  <Image
                    src={searchIcon}
                    alt={alt4}
                    className="mr-2"
                    width={15}
                    height={40}
                  ></Image>
                </div>
              </div>

              <div className="w-full font-josefin flex justify-between py-2 pr-3 ">
                <p className="text-[#151875] border-b-[2px] border-b-[#EEEFFB]">
                  {name}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-[14px] text-[#151875] ">{price}</p>
                  <p className=" text-[12px] line-through text-[#FB2448]">
                    {originalPrice}
                  </p>
                </div>
              </div>
            </div>   
))}   
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;


{/* <div className="h-[310px] w-[500px] md:w-[360px]">
<div className="w-full h-[90%] flex justify-center items-center relative">
  <Image
    src="/images/chair2.svg"
    alt="product 1"
    width={230}
    height={230}
    className="w-[230px] h-[230px] object-cover"
  />
  <Image
    src="/images/salesTag.svg"
    alt="product 1"
    width={100}
    height={10}
    className="absolute top-0 left-0 w-[100px] h-[64px] object-cover"
  />
  <div className="absolute bottom-6 left-2 flex flex-col items-center justify-center gap-3 ">
    <Image
      src="images/carticon2.svg"
      alt="cart icon"
      className="mr-2"
      width={30}
      height={40}
    ></Image>
    <Image
      src="images/hearticon3.svg"
      alt="heart Icon"
      className="mr-2"
      width={15}
      height={40}
    ></Image>
    <Image
      src="images/searchicon3.svg"
      alt="search Icon"
      className="mr-2"
      width={15}
      height={40}
    ></Image>
  </div>
</div>

<div className="w-full font-josefin flex justify-between py-2 pr-3 ">
  <p className="text-[#151875] border-b-[2px] border-b-[#EEEFFB]">
    Comfort Handy Craft
  </p>
  <div className="flex items-center">
    <p className="mr-2 text-[14px] text-[#151875] ">$42.00</p>
    <p className=" text-[12px] line-through text-[#FB2448]">
      $65.00
    </p>
  </div>
</div>
</div>



<div className="h-[310px] w-[500px] md:w-[360px]">
<div className="relative w-full h-[90%] flex justify-center items-center bg-[#F7F7F7]">
  <Image
    src="/images/Cantileverchair.svg"
    alt="product 1"
    width={230}
    height={230}
    className="w-[230px] h-[230px] object-cover"
  />
  <div className="absolute bottom-6 left-2 flex flex-col items-center justify-center gap-3 ">
    <Image
      src="images/carticon2.svg"
      alt="cart icon"
      className="mr-2"
      width={30}
      height={40}
    ></Image>
    <Image
      src="images/hearticon3.svg"
      alt="heart Icon"
      className="mr-2"
      width={15}
      height={40}
    ></Image>
    <Image
      src="images/searchicon3.svg"
      alt="search Icon"
      className="mr-2"
      width={15}
      height={40}
    ></Image>
  </div>
</div>

<div className="w-full font-josefin flex justify-between py-2 pr-3 ">
  <p className="text-[#151875] border-b-[2px] border-b-[#EEEFFB]">
    Comfort Handy Craft
  </p>
  <div className="flex items-center">
    <p className="mr-2 text-[14px] text-[#151875] ">$42.00</p>
    <p className=" text-[12px] line-through text-[#FB2448]">
      $65.00
    </p>
  </div>
</div>
</div> */}