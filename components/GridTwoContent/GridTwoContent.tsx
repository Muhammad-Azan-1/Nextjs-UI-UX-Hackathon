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
      <div className="w-full pb-12 pt-2 lg:py-0 bg-[#f5f5f5]  font-lato px-2 sm:px-6 lg:pl-2 lg:pr-10">
        {Object.entries(cartItems || {}).map(([, items]) => (
          <div key={items.id} className="h-auto w-auto  flex items-center justify-between  pt-8">
           
            <div className="flex items justify-start">
              <div className="relative bg-[#f5f5f5] pl-5 w-[70px] ">
                <Image
                  src={items.image}
                  alt={items.name}
                  width={60}
                  height={100}
                   className="bg-white border-[1px] rounded-[5px]"
                ></Image>
                <div className="bg-[#666666] text-[12px] absolute top-[-8px] left-[8px] font-[600] text-white w-[17px] h-[17px] rounded-[50%] flex justify-center items-center">
                  {items.value}
                </div>
              </div>

              <div className=" flex justify-center max12:w-[200px] w-auto flex-col pl-3  h-auto">
                <p className=" truncate text-[14px] sm:text-[16px] max-w-[250px] ">{items.name}</p>
                <p className="text-[#666666] text-[12px] ">
                  Color : {items.color}
                </p>
              </div>
            </div>

            <p>Rs {items.price.toLocaleString("en-PK")}</p>
          </div>
        ))}
        <div className="w-full justify-center flex gap-y-3 mt-6 mb-3   flex-col">
          <div className="pl-4 flex text-[15px] font-[500]   justify-between w-full">
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
