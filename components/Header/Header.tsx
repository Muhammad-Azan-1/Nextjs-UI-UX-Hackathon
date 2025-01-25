"use client";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown , faUser ,faHeart , faSearch , faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useCart from "@/context/CartContext";

import { useState , useEffect  } from "react";

const Header = () => {
  const [Menu, setMenu] = useState(false);
  const [amount , setAmount] = useState<number>(0)

  const {quantity} = useCart()
  

    
  useEffect(() => {
    if (quantity) {
      const Amount = Object.values(quantity).length!== 0 ? Object.values(quantity).reduce((total:number , qt:number)=> total + qt) : 0;
      setAmount(Amount);
    }
  }, [quantity]);


  function toggleMenu() {
    setMenu((menu:boolean)=> !menu);

  }

  return (
    <>
    <div className="fixed z-20 w-full h-[44px] font-josefin text-[#F1F1F1] font-[600] bg-[#7E33E0] flex max7:justify-end justify-between max-w2:px-4 px-6 lg:px-0 lg:justify-around items-center">
        <div className="flex justify-start min-w:justify-between  sm:w-[280px] md:w-[320px] lg:w-[350px] max7:hidden">
            <div className="flex items-center">
            <Image
            src="/images/mailboxicon.svg"
            alt="mail box"
            width={15}
            height={44}
            className="w-[13px] md:w-[15px]"
            ></Image>
            <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px]">mhhasanul@gmail.com</p>
            </div>

            <div className="hidden sm:flex items-center">
            <Image
            src="/images/phonesicon.svg"
            alt="phone icon"
            width={17}
            height={44}
             className="w-[15px] md:w-[17px]"
            ></Image>
            <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px] ">(12345)67890</p>
            </div>
        </div>

        <div className="flex   justify-end gap-x-4 lg:justify-center items-center max-w:w-full   w-[350px] lg:w-[410px]">
            <ul className="  flex items-center w-[100%] justify-between  lg:justify-evenly">
                <li className=""><span className="  text-[15px]">English</span><FontAwesomeIcon className="ml-1 text-[15px]" icon={faChevronDown}/></li>
               <li className="max13:hidden cursor-pointer"><span className="  text-[15px]">USD</span><FontAwesomeIcon className="ml-1 text-[15px]" icon={faChevronDown}/></li>
               <Link href='/Login' className=""> <li className=""><span className="text-[15px] cursor-pointer">Login</span><FontAwesomeIcon className=" ml-1 text-[15px]" icon={faUser}/> </li></Link> 
                <Link href='/' className=""><span className=" text-[15px] ">Wishlist</span><FontAwesomeIcon className=" ml-1 text-[15px]" icon={faHeart}/></Link>
                <div className="relative">
                <Link  href='/shoppingCart'><Image src='/images/carticon.svg' alt="cart icon" className= "cursor-pointer ml-0 w-[35px] " width={35} height={13}/></Link>
                <div
                className=" left-6 top-[-1px] flex justify-center items-center rounded-[50%]  w-5 h-5 py-1 text-[#101750]   bg-white text-[14px]  absolute"
                >{ amount}
                </div>
                </div>
            </ul>
        </div>
    </div>




    {/* header main */}

    <div className=" pt-20 mb-10 w-full  h-[80px] flex justify-between md:justify-center items-center  px-3">
     <div className="w-[100px] md:w-[150px] lg:w-[130px] pt-1 md:pt-0 flex justify-start sm:justify-center md:justify-start">
      <Link href='/'><Image src='/images/logo.svg' alt="logo.svg" className="cursor-pointer w-[70px] min-w:w-[80px] sm:w-[90px] lg:w-[100px]" width={100} height={34}></Image></Link>
     </div>

    
     <div className={` pt-20 md:pt-0 flex z-10 md:flex-row flex-col items-center md:justify-around lg:justify-evenly 
     bg-[#F2F0FF] md:bg-transparent h-[100vh] inset-0 md:h-auto mx-0  w-full md:w-[800px] lg:w-[700px] 
     px-0 md:px-2 lg:px-0 absolute top-[0px] md:static transform transition-transform duration-1000 ease-in-out
    ${Menu ? "top-[0px] translate-y-0 " : "translate-y-[-100%] md:translate-y-[0px] "} `}>

      <div className="inline-block mb-[90px] max-w:mt-8 sm:mb-[50px] md:mb-0  md:hidden">
      <Link href='/'><Image src='/images/logo.svg' alt="logo.svg" className="cursor-pointer w-[150px]" width={130} height={34}></Image></Link>

      </div>

      
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400] text-[18px] md:text-[16px] mb-10 md:mb-0 font-lato" href='/'>Home  <span className="hidden md:inline-block"><FontAwesomeIcon className=" ml-1 text-[12px] transition-all duration-500 hover:text-[#FB2E86]" icon={faChevronDown}/></span> </Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href='/About'>About</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href='/shop'>Shop</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href='/Blog'>Blog</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px] mb-10 md:mb-0  font-lato" href='/product'>Product</Link>
      <Link className="transition-all duration-500 hover:text-[#FB2E86] font-[600] md:font-[400]  text-[18px] md:text-[16px]  mb-10 md:mb-0 font-lato" href='/Contact'>Contact</Link>

      <div className="inline-block absolute top-8 right-6 md:hidden cursor-pointer">
      <FontAwesomeIcon className="text-[24px] cursor-pointer"  onClick={toggleMenu}  icon={faTimes}/>
      </div>

      <ul className="absolute max-w:top-[185px] top-[150px] cursor-pointer justify-center flex mt-3">
      <Link href='/Login' className="cursor-pointer inline-block sm:hidden"><span className="text-[16px] font-[600]">Login</span><FontAwesomeIcon className=" ml-1 text-[16px]" icon={faUser}/><span className="ml-2 mr-2">/</span> </Link>
      <Link href='/' className=" text-black cursor-pointer inline-block sm:hidden"><span className="text-[16px] font-[600]">Sign Up</span><FontAwesomeIcon className=" ml-1 text-[16px]" icon={faUser}/></Link>
      </ul>

      <ul className="inline-block absolute top-8 left-4 sm:hidden cursor-pointer">
      <Link href='/'><span className="text-[16px] cursor-pointer font-[600]">English</span><FontAwesomeIcon className=" ml-1 text-[16px]" icon={faChevronDown}/></Link>
      <Link href='/'><span className="text-[16px]  cursor-pointer font-[600] ml-3">USD</span><FontAwesomeIcon className=" ml-1 text-[16px]" icon={faChevronDown}/></Link>
      </ul>
     </div>

     <div className="flex justify-center md:justify-end w-[75%] md:w-[360px] lg:w-[500px]  h-[40px]">
      <input type="text"  className="border-[2px] border-r-0 border-[#E7E6EF] w-full md:w-[220px] lg:w-[320px]"  />
      <div className="flex w-[40px] lg:w-[50px] border-l-[1px] border-l-[#FB2E86] bg-[#FB2E86] justify-center items-center">
      <FontAwesomeIcon className="text-[#f3f9ff]" icon={faSearch}/>
      </div>
     </div>

     <div className="flex cursor-pointer  justify-end sm:justify-center md:hidden w-[50px]">
     <FontAwesomeIcon className="text-[24px]" onClick={toggleMenu} icon={faBars}/>
     </div>


    </div>
    </>
  );
}

export default Header