"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUser,faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useCart from "@/context/CartContext";
import useWishlist from "@/context/WishListContext";
import { useState, useEffect } from "react";
import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
const HeaderTopBar = () => {

    const [amount, setAmount] = useState<number | null>()
    const [wishAmount , setWishAmout]= useState<number>(0)
    const { cartItems } = useCart()
    const {wishListItem} = useWishlist()
  
  
  
    useEffect(()=>{
      if(wishListItem){
      setWishAmout(wishListItem.length)
      }
    },[wishListItem])
  
  
    useEffect(() => {
  
  
      if (cartItems) {
        const ids: string[] = Object.keys(cartItems)
  
        const ID = ids.map((items) => (items))
       
  
        const totalItems = ID.reduce((acc, ID) => {
          return acc + cartItems[ID]?.value
        }, 0)
        setAmount(totalItems)
  
        //console.log(totalItems)
      }
    }, [cartItems]);
    return (

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
                    <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px]">azan96953@gmail.com</p>
                  </div>
        
                  <div className="hidden sm:flex items-center">
                    <Image
                      src="/images/phonesicon.svg"
                      alt="phone icon"
                      width={17}
                      height={44}
                      className="w-[15px] md:w-[17px]"
                    ></Image>
                    <p className="ml-1 lg:ml-2 text-[14px] md:text-[16px] ">310-1285239</p>
                  </div>
                </div>
        
        <div className="flex   justify-end gap-x-4 lg:justify-center items-center max-w:w-full   w-[350px] lg:w-[410px]">
          <ul className="  flex items-center w-[99%] justify-between  lg:justify-evenly">
            <li className=""><span className="  text-[15px]">English</span><FontAwesomeIcon className="ml-1 text-[15px]" icon={faChevronDown} /></li>
            <li className="max13:hidden cursor-pointer"><span className="  text-[15px]">USD</span><FontAwesomeIcon className="ml-1 text-[15px]" icon={faChevronDown} /></li>
            <Link href='/Login' className=""> <li className=""><span className="text-[15px] cursor-pointer">Login</span><FontAwesomeIcon className=" ml-1 text-[15px]" icon={faUser} /> </li></Link>


            <div className="relative "> 
            <Link href='/Wishlist'><CiHeart className=" cursor-pointer  text-[35px]" /></Link>
            <div
                className={`${wishAmount ==  0 ? '' : "right-[-10px] top-[-1px] flex justify-center items-center rounded-[50%]  w-5 h-5 py-1 text-[#101750]   bg-white text-[14px]  absolute"}`}
              >{wishAmount == 0 ? '' : wishAmount}
              </div>
            </div>

            <div className="relative">
              <Link href='/shoppingCart'><AiOutlineShoppingCart className="cursor-pointer ml-0 text-[35px] "/></Link>
              <div
                className={`${amount ==  0 ? '' : "left-7 top-[-1px] flex justify-center items-center rounded-[50%]  w-5 h-5 py-1 text-[#101750]   bg-white text-[14px]  absolute"}`}
              >{amount == 0 ? '' : amount}
              </div>
            </div>
          </ul>
        </div>
        </div>
      
    )
}

export default HeaderTopBar