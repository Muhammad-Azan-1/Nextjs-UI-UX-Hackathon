import Image from "next/image";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faInstagram , faTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center mt-12 py-8 lg:py-3 items-center flex-wrap lg:flex-nowrap  px-2 xl:px-0 gap-x-[45px] md:gap-x-[60px] gap-y-[40px] lg:gap-8 xl:gap-14 bg-[#EEEFFB] ">
        <div className="text-[#8A8FB9] w-full sm:w-auto ">
          <ul className="py-0 my-0 w-full sm:w-auto">
            <li className="mb-12 flex justify-center sm:justify-start">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={100}
                height={100}
              ></Image>
            </li>
            <li className="flex justify-center sm:justify-start">
              <div className="  bg-[#FFFFFF] w-[90%] sm:w-[400px] h-[50px] flex justify-between items-center rounded-[6px]">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="placeholder:text-[#8A8FB9] h-full rounded-[6px] w-full placeholder:font-lato pl-5"
                />
                <Button
                  variant="outline"
                  size={"default"}
                  className=" font-josefin h-full max-w:w-[60px] w-auto max-w:text-[15px]"
                >
                  Sign Up
                </Button>
              </div>
            </li>
            <li className="mt-6 text-center sm:text-left">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </li>
          </ul>
        </div>

        <div className="">
            <ul className="text-center sm:text-left">
                <li className="text-[22px] text-[#000000] font-josefin mb-8">Catagories</li>
                <li className="text-[#8A8FB9] mb-4">Laptops & Computers</li>
                <li className="text-[#8A8FB9] mt-4">Cameras & Photography</li>
                <li className="text-[#8A8FB9] mt-4 ">Smart Phones & Tablets</li>
                <li className="text-[#8A8FB9] mt-4">Video Games & Consoles</li>
                <li className="text-[#8A8FB9] mt-4">Waterproof Headphones</li>
            </ul>
        </div>


        
        <div className=" ">
            <ul className=" text-center min6:text-left ">
                <li className="text-[22px] text-[#000000] font-josefin mb-8">Customer Care</li>
                <li className="text-[#8A8FB9] mb-4 ">My Account</li>
                <li className="text-[#8A8FB9] mt-4">Discount</li>
                <li className="text-[#8A8FB9] mt-4">Returns</li>
                <li className="text-[#8A8FB9] mt-4">Orders History</li>
                <li className="text-[#8A8FB9] mt-4">Order Tracking</li>
            </ul>
        </div>


        
        <div className="mt-8">
            <ul className="text-center lg:text-left ">
                <li className="text-[22px] text-[#000000] font-josefin mb-8">Pages</li>
                <li className="text-[#8A8FB9] mb-4">Blog</li>
                <li className="text-[#8A8FB9] mt-4">Browse the Shop</li>
                <li className="text-[#8A8FB9] mt-4">Category</li>
                <li className="text-[#8A8FB9] mt-4">Pre-Built Pages</li>
                <li className="text-[#8A8FB9] mt-4">Visual Composer Elements</li>
                <li className="text-[#8A8FB9] mt-4">WooCommerce Pages</li>
            </ul>
        </div>
      </div>

      <div className="w-full h-aut0 sm:h-[60px] bg-[#E7E4F8] flex flex-col sm:flex-row justify-between py-4 sm:py-0 px-3 sm:px-0 sm:justify-around items-center ">
      <p className="font-lato font-[600] text-[#9DA0AE] max-w:text-[14px] ">©Webecy - All Rights Reserved</p>
      <div className="flex w-[150px] justify-evenly sm:justify-between mt-4 sm:mt-0">
        <div className="bg-[#1A0B5B] w-[30px] h-[30px] flex justify-center items-center rounded-[100%]">
        <Link href=''> <FontAwesomeIcon className="text-white max-w:text-[14px]" icon={faFacebookF}/></Link>
        </div>
        <div className="bg-[#1A0B5B] w-[30px] h-[30px] flex justify-center items-center rounded-[100%]">
        <Link href=''> <FontAwesomeIcon className="text-white max-w:text-[14px]" icon={faInstagram}/> </Link>
        </div>
        <div className="bg-[#1A0B5B] w-[30px] h-[30px] flex justify-center items-center rounded-[100%]">
        <Link href=''> <FontAwesomeIcon className="text-white max-w:text-[14px]" icon={faTwitter}/> </Link>
        </div>
      </div>
</div>
    </>
  );
};

export default Footer;
