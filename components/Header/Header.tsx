"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUser,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useState } from "react";
import HeaderTopBar from "../HeaderTopBar/HeaderTopBar";
const Header = () => {
  const [Menu, setMenu] = useState(false);


  function toggleMenu() {
    setMenu((menu: boolean) => !menu);
  }

  return (
    <>
      {/* Header top bar */}
      <HeaderTopBar />

      {/* header main */}

      <div className=" pt-16 mb-4 w-full   flex justify-between md:justify-center items-center  px-3">
        <div className="w-[100px] md:w-[150px] lg:w-[130px] pt-1 md:pt-0 flex justify-start sm:justify-center md:justify-start">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo.svg"
              className="cursor-pointer w-[70px] min-w:w-[80px] sm:w-[90px] lg:w-[100px]"
              width={100}
              height={34}
              quality={75}
              priority
            />
          </Link>
        </div>

        <div
          className={` pt-20 md:pt-0 flex z-10 md:flex-row flex-col items-center md:justify-around lg:justify-evenly 
     bg-[#F2F0FF] md:bg-transparent h-[100vh] inset-0 md:h-auto mx-0  w-full md:w-[800px] lg:w-[700px] 
     px-0 md:px-2 lg:px-0 absolute top-[0px] md:static transform transition-transform duration-1000 ease-in-out
    ${Menu ? "top-[0px] translate-y-0 " : "translate-y-[-100%] md:translate-y-[0px] "} `}
        >
          <div className="inline-block mb-[90px] max-w:mt-8 sm:mb-[50px] md:mb-0  md:hidden">
            <Link  aria-label="Go to homepage" href="/">
              <Image
                src="/images/logo.svg"
                alt="logo.svg"
                className="cursor-pointer w-[150px]"
                width={130}
                height={34}
                loading="lazy"
                quality={75}
              />
            </Link>
          </div>

          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400] text-[18px] md:text-[16px] mb-10 md:mb-0 font-lato"
            href="/"
           aria-label="Go to homepage"
          >
            Home{" "}
            <span className="hidden md:inline-block">
              <FontAwesomeIcon
                className=" ml-1 text-[12px] transition-all duration-500 hover:text-[#FB2E86]"
                icon={faChevronDown}
              />
            </span>{" "}
          </Link>
          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato"
            href="/About"
             aria-label="Go to About us"
          >
            About
          </Link>
          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato"
            href="/shop"
             aria-label="Go to shop"
          >
            Shop
          </Link>
          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato"
            href="/Blog"
             aria-label="Go to Blog"
          >
            Blog
          </Link>
          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato"
            href="/product"
             aria-label="Go to Product"
          >
            Product
          </Link>
          <Link
            className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px]  mb-10 md:mb-0 font-lato"
            href="/Contact"
             aria-label="Go to Contact"
           data-testid="contact-link"
          >
            Contact
          </Link>

          <div className="inline-block absolute top-8 right-6 md:hidden cursor-pointer">
            <FontAwesomeIcon
              className="text-[24px] cursor-pointer"
              onClick={toggleMenu}
              icon={faTimes}
            />
          </div>

          
          <div className="absolute max-w:top-[185px] top-[150px] cursor-pointer justify-center flex mt-3">
            <Link
              href="/Login"
              className="cursor-pointer inline-block sm:hidden"
               aria-label="Go to Login"
            >
              <span className="text-[16px] font-[600]">Login</span>
              <FontAwesomeIcon className=" ml-1 text-[16px]" icon={faUser} />
              <span className="ml-2 mr-2">/</span>{" "}
            </Link>
            <Link
              href="/"
              className=" text-black cursor-pointer inline-block sm:hidden"
               aria-label="Go to Signup"
            >
              <span className="text-[16px] font-[600]">Sign Up</span>
              <FontAwesomeIcon className=" ml-1 text-[16px]" icon={faUser} />
            </Link>
          </div>
        

          <div className="inline-block absolute top-8 left-4 sm:hidden cursor-pointer">
        
              <p className="text-[16px] cursor-pointer font-[600]">
                English
              </p>
              <FontAwesomeIcon
                className=" ml-1 text-[16px]"
                icon={faChevronDown}
              />
           
        
              <p className="text-[16px]  cursor-pointer font-[600] ml-3">
                USD
              </p>
              <FontAwesomeIcon
                className=" ml-1 text-[16px]"
                icon={faChevronDown}
              />
        
          </div>
        </div>


        <div className="flex justify-center md:justify-end w-[75%] md:w-[360px] lg:w-[500px]  h-[40px]">
          <label htmlFor=""></label>
          <input
            type="text"
            className="border-[2px] border-r-0 border-[#E7E6EF] w-full md:w-[220px] lg:w-[320px]"
          />
          <div className="flex w-[40px] lg:w-[50px] border-l-[1px] border-l-[#FB2E86] bg-[#FB2E86] justify-center items-center">
            <FontAwesomeIcon className="text-[#f3f9ff]" icon={faSearch} />
          </div>
        </div>



        <div className="flex cursor-pointer  justify-end sm:justify-center md:hidden w-[50px]">
          <FontAwesomeIcon
            className="text-[24px]"
            onClick={toggleMenu}
            icon={faBars}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
