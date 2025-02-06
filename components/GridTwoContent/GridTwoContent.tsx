"use client";

import Image from "next/image";
import useCart from "@/context/CartContext";
import { useState, useEffect } from "react";
const GridTwoContent = () => {
  const { cartItems } = useCart();

  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);


  useEffect(() => {
    if (cartItems) {

      // console.log("Updated Cart Items:", cartItems);
  
      const noOfItems: number[] = Object.values(cartItems).map(
        (items) => items.value
      );
      // console.log("Total no of Items", noOfItems);
      if (noOfItems.length > 0) {
        setTotalItems(noOfItems.reduce((acc, curr) => acc + curr));
      }

      const priceOfEachItem: number[] = Object?.values(cartItems).map(
        (items) => items.price
      );
      // console.log("total price", priceOfEachItem);

      const totalPrice = noOfItems.map(
        (items, index) => items * priceOfEachItem[index]
      );
      if (totalPrice.length > 0) {
        setTotalAmount(totalPrice.reduce((acc, curr) => acc + curr));
      }
    }
  }, [cartItems]);

  return (
    <>
    <div className= " flex justify-center   lg:inline-block border-b-[1px] font-[500]  overflow-visible lg:overflow-y-scroll h-auto lg:max-h-[320px] font-josefin w-full bg-[#f5f5f5] lg:py-0  pl-0 pr-2 sm:px-4 lg:pl-2 lg:pr-12 min5:pr-24">
      <div className="flex flex-col items-start justify-center pb-6 pt-3 lg:pt-0 lg:pb-0 w-[600px] lg:w-full lg:inline-block">
        {Object.entries(cartItems || {}).map(([, items]) => (
          <div key={items.id} className="h-auto w-full lg:w-auto mb-3 lg:mb-2   flex   items-center justify-between   lg:gap-x-0  pt-3">
            <div className="flex  justify-start">
              <div className="relative bg-[#f5f5f5]  pl-5 max13:w-[75px] w-[80px] ">
                <Image
                  src={items.image}
                  alt={items.name}
                  width={70}
                  height={0}
                   className="bg-white border-[1px] rounded-[5px]"
                />
                <div className="bg-[#666666] text-[12px] absolute top-[-8px] left-[8px] font-[600] text-white w-[18px] h-[18px] rounded-[50%] flex justify-center items-center">
                  {items.value}
                </div>
              </div>

              <div className=" flex justify-center max12:w-[200px]  flex-col pl-3  h-auto">
                <p className=" truncate text-[14px] sm:text-[16px]  max-w-[250px] ">{items.name}</p>
                <p className="text-[#666666] text-[12px] ">
                  Color : {items.color}
                </p>
              </div>

            </div>
            <p  className="mb-3 max max-w2:text-[12px] lg:pl-3 font-[600]">Rs {items.price.toLocaleString("en-PK")}</p>

  
          </div>
        ))}
          </div>
          </div>

        <div className="flex justify-center lg:inline-block w-full  bg-[#f5f5f5] pt-4 pb-8 border-b-[1px] lg:border-none lg:mt-4 mb-3 pr-2 sm:px-4 lg:pl-4 lg:pr-12 min5:pr-24 ">
      <div className="justify-center flex-col w-[600px] lg:w-auto flex gap-y-4">
          <div className="pl-4 flex text-[15px] font-[500]  justify-between w-full">
            <p>Subtotals - {totalItems} items</p>
            <p>Rs. {totalAmount.toLocaleString("en-PK")}</p>
          </div>
          <div className="pl-4 flex text-[15px] font-[500]  justify-between w-full">
            <p>Shipping</p>
            <p>Rs. 199.0</p>
          </div>
          <div className="pl-4 text-[19px] font-[700] flex   justify-between w-full">
            <p>Totals</p>
            <p>Rs. {totalAmount.toLocaleString("en-PK")}</p>
          </div>
         </div>
        </div>
    
    </>
  );
};

export default GridTwoContent;
