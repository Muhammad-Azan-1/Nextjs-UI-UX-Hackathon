'use client'

import Image from "next/image"
import useCart from "@/context/CartContext"
import { useState , useEffect } from "react"
const GridTwoContent = () => {

    const { cartItems } = useCart()
  const [items , setItems] = useState<boolean>(false)
  const [totalItems , setTotalItems] = useState<number>(0)
  const [totalAmount , setTotalAmount] = useState<number>(0)

  useEffect(() => {
    if (cartItems) {
      const itemsVal = Object.values(cartItems).some((item) => item?.value > 0);
      setItems(itemsVal);


      const noOfItems : number[] =Object.values(cartItems).map((items)=> items.value)
      console.log("Total no of Items" , noOfItems)
      if(noOfItems.length > 0){
      setTotalItems(noOfItems.reduce((acc , curr)=> acc + curr))
      }
     


      const priceOfEachItem : number[] =Object?.values(cartItems).map((items)=> items.price)
      console.log("total price" , priceOfEachItem)
     

      const totalPrice = noOfItems.map((items , index)=> items * priceOfEachItem[index])
      if(totalPrice.length > 0){
        setTotalAmount(totalPrice.reduce((acc , curr)=>  acc + curr))
      }

   

    }
  }, [cartItems]);

    return (
        <>

        <div className="w-full py-12 lg:py-0 bg-[#f5f5f5] font-lato px-2 sm:px-6 lg:px-8">

 {

Object.entries(cartItems || {}).map(([,items]) => (
         <div className="h-auto w-auto flex items-center justify-between  pt-8">
        <div className="flex items">
        <div className="relative flex justify-center items-center w-[110px] ">
        <Image 
        src={items.image} 
        alt={items.name}
         width={100}
          height={200}>
        </Image>
        <div className="bg-[#666666] absolute top-[-4px] right-[-3px] font-[600] text-white w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">{items.value}</div>
        </div>

        <div className="w-auto flex justify-center  flex-col pl-0 sm:pl-3 h-auto">
        <p>{items.name}</p>
        <p className="text-[#666666] text-[12px] ">Color : {items.color}</p>
        </div>
        </div>

       
        <p>Rs {(items.price).toLocaleString('en-PK')}</p>
     </div>

    ))}
     <div className="w-full justify-center flex gap-y-3 mt-3  font-lato flex-col">
    <div className="pl-4 flex text-[14px] font-[600]   justify-between w-full">
        <p>Subtotals (quantity {totalItems})</p>
        <p>Rs. {(totalAmount).toLocaleString('en-PK')}</p>
    </div>
    <div className="pl-4 flex text-[14px] font-[600]  justify-between w-full">
        <p>Shipping</p>
        <p>Rs. 199.0</p>
    </div>
    <div className="pl-4 text-[19px] font-[700] flex  justify-between w-full">
        <p>Totals</p>
        <p>Rs. {(totalAmount).toLocaleString('en-PK')}</p>
    </div>
    </div>

     </div>
   
      
        </>
    )
}

export default GridTwoContent