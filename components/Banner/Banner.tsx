import Image from "next/image";
import HomeIncrementButton from "../HomeAddToCartBtn/HomeIncrementButton";

import { Products } from "../Utilits/Helper.js";

const Banner = ({ Product }: { Product: Products[] }) => {
  return (
    <>
      <div className="w-full h-auto bg-[#F1F0FF] flex flex-col md:flex-row justify-center items-center py-4 mt-24 px-2 xl:px-0">
        <div className="flex items-center justify-center">
          <Image
            src="/images/sofa2.svg"
            alt="sofa image"
            className="w-[450px] lg:w-[530px] xl:w-[630px]"
            width={630}
            height={600}
            priority
          ></Image>
        </div>

        <div className="w-full items-center md:items-start pb-6 text-center  md:pb-0 md:text-start md:w-[400px] lg:w-[570px] xl:w-[630px] h-[80%] flex flex-col  justify-center pt-5 lg:pt-5  gap-[20px] sm:gap-[13px] lg:gap-[22px] xl:gap-8">
          <h1 className="font-[700] font-josefin text-[#151875] max-w:text-[22px] text-[28px] lg:text-[38px]  xl:text-[45px]">
            Unique Features Of leatest & Trending Poducts
          </h1>

          <div className="flex">
            <Image
              src="/images/reddot.svg"
              alt="reddot"
              className="hidden sm:inline-block"
              width={11}
              height={11}
              priority
            ></Image>
            <p className="ml-2 text-center md:text-start text-[#ACABC3] font-lato  text-[18px]">
              All frames constructed with hardwood solids and laminates
            </p>
          </div>

          <div className="flex">
            <Image
              src="/images/bluedot.svg"
              alt="reddot"
              className="hidden sm:inline-block"
              width={10}
              height={11}
            ></Image>
            <p className="ml-3 text-[#ACABC3] text-center md:text-start font-lato text-[18px] leading-[28px]">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks{" "}
            </p>
          </div>

          <div className="flex">
            <Image
              src="/images/greendot.svg"
              alt="reddot"
              width={11}
              height={11}
              className="hidden sm:inline-block"
            ></Image>

            <p className="ml-2 text-[#ACABC3] text-center md:text-start font-lato text-[18px] ">
              Arms, backs and seats are structurally reinforced
            </p>
          </div>

          <div className="flex mt-6">
            <HomeIncrementButton
              stock={Product[16]?.stockLevel}
              id={Product[16]?.id}
              name={Product[16]?.name}
              price={Product[16]?.price}
              image={Product[16]?.imageUrl}
              colors={Product[16]?.colors}
            />
            <div className="ml-5">
              <p className="text-[14px] text-[#151875] font-josefin">
                {Product[16]?.name}
              </p>
              <p className="text-[#151875] font-lato">
                Rs.{Product[16]?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
