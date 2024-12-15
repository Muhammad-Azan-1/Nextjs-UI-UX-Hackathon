import Pagesbar from "@/components/PageBar/PageBar"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
const Contact = () => {
  return (
    <>
    <Header />
    <Pagesbar pageName="Contact Us" name1="Home" name2="Page" name3="Contact Us" />
    <div className="w-full flex flex-col lg:flex-row h-auto justify-center items-center gap-x-2 min5:gap-x-10 min7:gap-x-16 px-2 pt-[70px] min7:px-0">
      <div className=" w-full lg:w-[550px] text-center lg:text-left">
        <h1 className="text-[30px] min-w2:text-[40px] sm:text-[50px] lg:text-[36px] font-josefin pb-4 lg:pb-0 text-[#151875] font-[600] mb-1">Information About us</h1>
        <p className=" font-lato  lg:px-0 leading-[25.6px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        <div className="flex pt-8 lg:pt-10 justify-center lg:justify-start">
        <Image src='/images/bluedot.svg' alt='red dot' width={25} height={25}></Image>
        <Image src='/images/reddot.svg' className="ml-2" alt='red dot' width={25} height={25}></Image>
        <Image src='/images/greendot.svg' alt='red dot' className="ml-2" width={25} height={25}></Image>
        </div>
      </div>

      {/* contact way */}
      <div className="w-full lg:w-auto pt-16 lg:pt-0">
      <h1 className="text-[30px] min-w2:text-[40px]  sm:text-[50px] lg:text-[36px] text-center lg:text-left font-josefin text-[#151875] font-[600] mb-3">Contact Way</h1>
      <div className="flex flex-col justify-center pt-4 lg:pt-0 items-center w-[100%] lg:w-auto lg:items-start gap-y-12">
      <div className="  flex flex-col min-w2:flex-row gap-y-8 min-w2:gap-y-0 justify-center min-w2:justify-start gap-x-16 lg:gap-x-8 min5:gap-x-10">
        <div className="flex">
        <div className="flex items-center">
        <Image src='/images/bluedot.svg' alt='red dot' width={45} height={45}></Image>
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="text-[#8A8FB9] text-[14px] min5:text-[16px] hover:underline ">Tel: 877-67-88-99</h3>
          <p  className="text-[#8A8FB9]  text-[14px] min5:text-[16px] hover:underline ">E-Mail: shop@store.com</p>
        </div>
        </div>

        <div className="flex">
        <div className="flex items-center">
        <Image src='/images/reddot.svg' alt='red dot' width={45} height={45}></Image>
        </div>
        <div className="flex flex-col ml-4">
          <h3  className="text-[#8A8FB9] text-[14px] min5:text-[16px]  hover:underline ">Support Forum</h3>
          <p  className="text-[#8A8FB9]  text-[14px] min5:text-[16px] hover:underline ">For over 24hr</p>
        </div>
        </div>
      </div>


      <div className="flex flex-col min-w2:flex-row gap-y-8 min-w2:gap-y-0 justify-center  min-w2:justify-start max10:ml-[-5px]  ml-10 sm:ml-12  lg:ml-0 max10:gap-x-12  gap-x-16 lg:gap-x-8  min5:gap-x-10 ">
        <div className="flex">
        <div className="flex items-center">
        <Image src='/images/yellowdot.svg' alt='red dot' width={45} height={45}></Image>
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="text-[#8A8FB9] text-[14px] min5:text-[16px] hover:underline ">20 Margaret st, London</h3>
          <p className="text-[#8A8FB9]  text-[14px] min5:text-[16px] hover:underline ">Great britain, 3NM98-LK</p>
        </div>
        </div>

        <div className="flex">
        <div className="flex items-center">
        <Image src='/images/green2dot.svg' alt='red dot' width={45} height={45}></Image>
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="text-[#8A8FB9] text-[14px] min5:text-[16px] hover:underline ">Free standard shipping</h3>
          <p className="text-[#8A8FB9]  text-[14px] min5:text-[16px] hover:underline ">on all orders.</p>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>


    {/* contact form */}

    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center px-2 min7:px-0 pt-20 ">
      <div className="w-full lg:w-[470px] min5:w-[535px] min7:w-[545px] flex flex-col items-center lg:items-end justify-center  gap-y-10 ml-1 min7:ml-12">
        <div className="w-full">
        <h1 className="text-[30px] min-w2:text-[40px] sm:text-[50px] lg:text-[36px] font-josefin text-center lg:text-left text-[#151875] font-[600] ">Get In Touch</h1>
        <p className="text-[#8A8FB9] text-center lg:text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        </div>

        {/* input box */}
        <div className="w-full sm:w-[600px] lg:w-[470px]  min5:w-[530px] min7:w-auto flex flex-col gap-y-[35px] ">
        <div className="flex justify-between lg:justify-start ">
          <input type="text" placeholder="Your Name*" className="w-[50%] lg:w-[255px] h-[45px] border-[1px] border-[#A4B6C8B2] pl-3" />
          <input type="text" placeholder="Your E-mail" className="ml-8 w-[50%] lg:w-[255px] h-[45px] border-[1px] border-[#A4B6C8B2] pl-3"  />
        </div>

        <div>
          <input placeholder="Subject*" className="w-full h-[45px] border-[1px] border-[#A4B6C8B2] pl-3" />
        </div>

       <div>
        <textarea placeholder="Type Your Messege*" className="pl-4 pt-3 border-[1px] border-[#A4B6C8B2] w-full" rows={8}></textarea>
       </div>
       <div className="text-center lg:text-left pb-3 lg:pb-0">
       <Button
              variant="outline"
              size={"default"}
              className=" font-josefin pb-1"
            >
             Send Mail
            </Button>
       </div>
        </div>
      </div>

      {/* image of contact b0x */}

      <div className=" flex h-auto lg:h-[625px] justify-center items-center pt-8 lg:pt-0 pr-0 lg:pr-3 xl:pr-0">
        <Image src='/images/contactus.svg' alt='contact box' className="w-full sm:w-[600px] lg:w-[550px] min7:w-[650px]" width={650} height={550} />
      </div>

    </div>
    </>
  )
}

export default Contact;