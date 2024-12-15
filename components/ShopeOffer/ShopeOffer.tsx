'use client'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';



const ShopeOffer = ({heading="What Shope Offer"}) => {
    useEffect(() => {
        AOS.init({});
      }, []);
  return (
    <>
    <div className='w-full h-auto pt-[90px]'>
    <div className="">
            <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center font-[700] ">{heading}</h1>
        </div>

            <div className="w-full flex justify-center gap-x-[28px] min3:gap-x-[36px] overflow-visible gap-y-[80px] lg:gap-8 flex-wrap  lg:flex-nowrap items-center pt-0 mt-8 px-4 xl:px-0" >
                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md   hover:shadow-yellow-500 transition-shadow flex flex-col justify-center items-center p-2 gap-4" data-aos="flip-left"  data-aos-easing="ease-out-cubic"   data-aos-duration="2000">
                    <Image src='/images/truck.svg' alt='truk image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amat, consecteturadipiscing elit. Massa purus gravid.</p>
                </div>

                {/* box2 */}

                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md hover:shadow-yellow-500 transition-shadow flex flex-col justify-center items-center p-2 gap-4"  data-aos="flip-right"  data-aos-easing="ease-out-cubic"   data-aos-duration="2000">
                    <Image src='/images/cashback.svg' alt='support image' width={80} height={80}></Image> 
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amat, consecteturadipiscing elit. Massa purus gravid.</p>
                </div>

                {/* box3 */}

                <div className="w-[350px] min3:w-[270px] h-[320px] overflow-y-visible shadow-md hover:shadow-yellow-500 transition-shadow flex flex-col justify-center items-center pt-0 p-2 gap-4" data-aos="flip-left"  data-aos-easing="ease-out-cubic"   data-aos-duration="2000">
                    <Image src='/images/support.svg' alt='support image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amat, consectetur adipiscing elit. Massa purus gravid.</p>
                </div>

                {/* box4 */}


                <div className="w-[350px] min3:w-[270px] h-[320px] shadow-md hover:shadow-yellow-500 transition-shadow flex flex-col justify-center items-center p-2 gap-4" data-aos="flip-right"  data-aos-easing="ease-out-cubic"   data-aos-duration="2000">
                    <Image src='/images/phoneCall.svg' alt='phone image' width={80} height={80}></Image>
                    <h2 className='text-[22px] font-josefin text-[#151875]'>24/7 Support</h2>
                    <p className='text-center text-[#1A0B5B4D] font-[700] font-lato'>Lorem ipsum dolor sit amat, consectetur adipiscing elit. Massa purus gravid.</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default ShopeOffer

