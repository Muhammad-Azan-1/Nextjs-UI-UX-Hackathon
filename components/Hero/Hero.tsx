

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {


  return (
    <>
      <div className="relative w-full pt-[40px] overflow-hidden max-w:pt-0 sm:pt-[60px] lg:pt-0 pb-[20px] lg:pb-0 h-auto lg:h-[470px] xl:h-[550px] min2:h-[650px] min1:h-[750px] bg-[#F2F0FF] flex max-w:flex-col flex-row px-6 lg:pr-6">
        <div className=" max-w:h-[200px] h-auto max-w:static max-w:w-full max-w:flex  max-w:justify-center   absolute top-0 left-[5px]  lg:left-[0px] xl:left-[10px] min2:left-[10px] min1:left-[-2px]"
       
        >
          <Image
            src="/images/light.svg"
            alt="light image"
            className="object-cover max-w:w-[220px] w-[90px] sm:w-[120px] md:w-[190px] lg:w-[270px] xl:w-[290px]  min2:h-[380px] min2:w-[320px] h-[200px] md:h-auto min1:w-[380px]"
            width={390}
            height={400}
          />
        </div>

        <div className=" h-auto absolute top-0 right-[0px]  overflow-hidden lg:hidden">
          <Image
            src="/images/light.svg"
            alt="light image"
            className="object-cover max-w:hidden w-[90px] sm:w-[120px] md:w-[190px]  lg:w-[270px] xl:w-[290px]  min2:h-[380px] min2:w-[320px] h-[180px] md:h-auto min1:w-[380px]"
            width={450}
            height={400}
          />
        </div>

        {/*text-box */}

        <div className=" w-[100%]  lg:ml-[190px] xl:ml-[220px] min2:ml-[240px]  h-full flex flex-col lg:flex-row justify-center  min1:gap-0  items-center ">
          <div className="max-w:w-[100%] w-[92%] sm:w-[80%] max-w:px-0 px-10  md:px-20 lg:px-0 lg:w-[420px] lg:ml-0 lg:pl-2 xl:pl-0 xl:w-[500px] min2:w-[600px] min1:w-[630px] items-center lg:items-start flex flex-col justify-center gap-6 lg:gap-4 xl:gap-6 "
          
          >
            {/* text-[#FB2E86] */}
            <p className="text-[#FB2E86] font-lato font-[700]">
              Best Furniture For Your Castle....
            </p>
            <h1 className=" text-[25px] md:text-[40px] lg:text-[28px] xl:text-[35px] min2:text-[45px] min1:text-[53px] text-center lg:text-left font-josefin font-[700]">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="text-[#8A8FB9] font-[700] font-[lato] text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <Button
              variant="outline"
              size={"default"}
              className=" font-josefin"
            >
              Shop Now
            </Button>
          </div>

          <div className="flex items-center pt-[60px] pb-8 lg:pb-0 lg:pt-0"
          
          >
            <Image
              src="/images/hero.svg"
              alt="Hero sofa Image"
              className="w-[650px] lg:w-[400px] xl:w-[480px] min2:w-[600px] min2:h-[800px] min1:w-[720px]"
              width={700}
              height={700}
            ></Image>
          </div>
        </div>

        <div className="absolute bottom-4 w-[90%]  lg:bottom-8  flex justify-center">
          <Image src='/images/scrollerhero.svg' alt="scroller" width={60} height={30}></Image>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
