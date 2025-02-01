'use client'
import Hovercard from "../HoverCard/HoverCard"
import { useState } from "react"
import Image from "next/image"
const CountryFlags : {[key:string]:string} = {
    "+92": "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/pk.C6GKfae7.svg", // Pakistan
    "+91": "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/in.5QH_r_CK.svg", // India
    "+86": "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/cn.JoknfU_Z.svg", // China
}

const ContactInputField = () => {

const [phone , setPhone] = useState<string>('')
const [flagUrl , setFlagUrl] = useState<string>('')
const [Error , setError] = useState<boolean>(false)

const handleFlags = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value
    setPhone(value)
   
    if(value.startsWith("+")){

      
        setError(false)
     
    }else{
        setError(true)
        setFlagUrl('')
      
    }
                                                       //{value from {0 , 3}   //{value from 0 , 2}
    // const countryCode = value.startsWith("+") ? value.slice(0,3) :` +${value.slice(0,2)}`
    const countryCode = value.slice(0,3)
    setFlagUrl(CountryFlags[countryCode] || '')
}

    return (

        <>
        <div className={`flex w-full justify-between items-center cursor-pointer  h-[50px] 
        placeholder:text-[#707070]  focus-within:outline-none focus-within:border-[2px]  focus-within:ring-0 transition-all 
        duration-300 ease-in-out   text-[14px] pl-[10px] border ${ Error ? 'focus-within:border-[#DD1D1D]' :'focus-within:border-black'} rounded-[4px] `}>
       
        <input 
        type="text" 
        value={phone}
        placeholder="Phone +92" 
        onChange={handleFlags}
        className="w-[90%] focus:outline-none h-full peer"
        />
      
        <div className="pr-3  flex ">
        <Hovercard/>
        {
            flagUrl ? (

        <div className="pl-3 pr-1">
        <Image src={flagUrl} alt="flag image" width={30} height={30}></Image>
        </div>
            ) : ''

        }
       </div>
        </div>

  {      Error ? (
    <p className="text-[#DD1D1D] text-[15px] mt-1">Please enter a valid country code (e.g., +92, +91, +86)</p>
  ) : ''}

<div className="mt-2 ml-1 flex items-center">
                     <label htmlFor="" className="relative block  cursor-pointer">
                  <input type="checkbox" className="accent-black p-1 scale-110 cursor-pointer" id="checkbox" />
                  <span className="pl-2 text-[14px] font-[500] ">Save this information for next time</span>
              </label>
            </div>      
        </>
        
        
    )
}

export default ContactInputField