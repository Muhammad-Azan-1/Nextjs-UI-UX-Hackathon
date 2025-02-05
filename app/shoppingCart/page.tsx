"use client";
import Pagesbar from "@/components/PageBar/PageBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import useCart from "@/context/CartContext";
import ProductIncrementDecrement from "@/components/ProductIncrementDecrement/ProductIncrementDecrement";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import DeleteItemsBtn from "@/components/CartItemsDeleteBtn/CartItemsDeleteBtn";

const ProductList = () => {
  const { cartItems } = useCart();
  const [items, setItems] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  console.log(cartItems);

  useEffect(() => {
    if (cartItems) {
      const itemsVal = Object.values(cartItems).some((item) => item?.value > 0);
      setItems(itemsVal);
   
      const noOfItems: number[] = Object.values(cartItems).map(
        (items) => items.value
      );
      console.log("Total no of Items", noOfItems);
      if (noOfItems.length > 0) {
        setTotalItems(noOfItems.reduce((acc, curr) => acc + curr));
      }

      const priceOfEachItem: number[] = Object?.values(cartItems).map(
        (items) => items.price
      );
      console.log("total price", priceOfEachItem);

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
      <Header />
      <Pagesbar
        pageName="Shopping Cart"
        name1="Home"
        name2="Page"
        name3="Shopping Cart"
      />

      {items ? (
        <div className="w-full flex-col flex   items-center lg:items-start lg:flex-row justify-center gap-x-8 pt-[30px] max12:px-0 pl-0 min7:px-0  h-auto">
          <div className="w-[98%] md:w-[720px] lg:w-[610px] min7:w-[720px]">
            <div className="flex  max-w2:text-[14px]  max13:text-[16px]  w-full text-[#1D3178] ml-1 font-[700] font-josefin pr-1 text-[20px]">
              <h1>Product</h1>
              <div className="w-full">
                <ul className="flex  max-w2:text-[14px] max13:text-[16px] justify-end  max13:gap-x-[29px] max10:gap-x-[35px]  gap-x-[66px]">
                  <li>Price</li>
                  <li>Quantity</li>
                  <li className="pr-1">Total</li>
                </ul>
              </div>
            </div>

            {Object.entries(cartItems || {}).map(([, items]) => (
              <div
                key={items.id}
                className="flex items-center max-w2:mt-6 mt-10 border-b-[1px] border-[#E1E1E4] pb-4"
              >
                <div className="relative p-1">
                  <Image
                    src={items.image}
                    className="w-[85px] object-cover  "
                    alt={items.name}
                    width={83}
                    height={87}
                  ></Image>
                 <DeleteItemsBtn id={items.id} color={items.color}/>
                </div>
                <div
                  className={`flex flex-col ${"max12:w-[160px] w-[170px] sm:w-[190px]"} text-[14px] max10:ml-3 ml-4 mt-2 font-josefin`}
                >
                  <h1 className="w-full max10:text-[11px] max13:font-[600] text-[12px] sm:text-[14px]">
                    {items.name}
                  </h1>
                  <p className=" text-[#15245E] text-[12px]">
                    {" "}
                    color : {items.color}
                  </p>
                </div>

                <div className=" max12:w-[90%] w-full text-[#15245E] font-josefin text-[14px] ">
                  <ul className="flex  justify-end items-center max-w2:gap-x-4 max13:gap-x-6 max10:gap-x-10 gap-x-[68px]">
                    <li>Rs. {items.price}</li>
                    <li>
                      <ProductIncrementDecrement
                        stock={items.stock}
                        id={items.id}
                        name={items.name}
                        price={items.price}
                        image={items.image}
                        colors={items.color}
                        num={2}
                      />
                    </li>
                    <li>
                      Rs.{" "}
                      {(items.value == 1
                        ? items.price
                        : items.value * items.price
                      ).toLocaleString("en-PK")}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Cart side bxoses */}

          <div className="w-[400px] max12:w-full max12:px-2 mt-10 lg:mt-0 py-2 lg:sticky lg:top-12">
            <div className="w-full  h-[320px] bg-[#F4F4FC]">
              <div className="w-full flex px-5 h-full justify-evenly gap-y-0  flex-col">
                <h1 className="font-[600] text-[18px] font-lato text-[#15245E]">
                  Order Summary
                </h1>
                <div className="flex justify-between font-lato text-[#15245E]  ">
                  <p className="font-[600] text-[14px]">
                    Subtotals ({totalItems} items)
                  </p>
                  <p>Rs. {totalAmount.toLocaleString("en-PK")}</p>
                </div>

                <div className="flex gap-x-3 items-center">
                  <input
                    type="number"
                    placeholder="Enter Voucher Code"
                    className="placeholder:text-gray-400 focus:border-black  focus:outline-none focus:border-[2px] rounded-[4px] focus:ring-0 transition-all duration-300 ease-in-out h-9 w-[240px] text-[14px] pl-2 bg-[#F4F4FC] border"
                  />
                  <Button
                    className="font-josefin max13:text-[12px] h-9 rounded-[4px]  cursor-pointer w-[100px] "
                    size={"outline"}
                    variant={"outline"}
                  >
                    APPLY
                  </Button>
                </div>

                <div className="flex justify-between items-center font-lato text-[#15245E]">
                  <p className="font-[600]">Totals</p>
                  <p>Rs. {totalAmount.toLocaleString("en-PK")}</p>
                </div>

                <div className="flex justify-start">
                  <Image
                    src="/images/check.svg"
                    alt="Tick"
                    width={10}
                    height={10}
                  ></Image>
                  <p className="ml-2 text-[#15245E]">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <div>
                  <Link href={"/checkout"}>
                    <Button
                      variant="outline"
                      size={"default"}
                      className=" w-full rounded-[4px] font-josefin text-[14px] cursor-pointer  "
                    >
                      PROCCED TO CHECKOUT
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-auto flex-col justify-center items-center font-josefin  mt-10 mb-10">
          <div className="bg-green-100 w-[200px] h-[200px] rounded-[50%] mb-6 flex justify-center items-center">
            <AiOutlineShoppingCart size={130} color="green" />
          </div>
          <p className="text-[#15245E] font-[500] text-[20px]  sm:text-[25px] mb-2 text-center">
            Your cart is currently empty!
          </p>
          <p className="text-[#A1A8C1] font-[400] text-[16px] sm:text-[20px] mb-5 text-center">
            Start adding your favorite products to your wishlist now!
          </p>
          <Link
            href="/"
            className="ml-3 text-[16px] rounded-[3px] text-white  font-josefin w-[250px] flex justify-center items-center uppercase h-[50px] border-[1px] tracking-wide  border-[#151875]  bg-[#151875] px-4 py-1"
          >
            Continue Shopping
          </Link>
        </div>
        
      )}
      <Footer/>
    </>
  );
};

export default ProductList;

// this will convert object key and value inside teh cartItems object into an array
// cartItems : { 1:{  ,name , quantity , stock , image , price , value} } ->[ [0:"1" , 1:{,name , quantity , stock , image , price , value}] ,[0:"2" , 1:{,name , quantity , stock , image , price , value}] ] same thing for all objects

// Object.entries(cartItems).map(([key ,item])=>{

//   // When you use [key, item], you are explicitly destructuring the array ['1', {...}]
//   //  into two separate variables (key and item). Without destructuring, the first argument contains the entire entry (the array),
//   //  and the second argument is unused (undefined).

//   console.log(key , item)
// })

//  console.log(" renders")
//  const items = Object.entries(cartItems).some((item)=> item[1]?.value > 0)
// console.log( "items checking true false",items)

// console.log("OBject keys in an array",Object.entries(cartItems))

// // this will convert object key and value inside teh cartItems object into an array
// // cartItems : { 1:{  ,name , quantity , stock , image , price , value} } ->[ [0:"1" , 1:{,name , quantity , stock , image , price , value}] ,[0:"2" , 1:{,name , quantity , stock , image , price , value}] ] same thing for all objects

// // Object.entries(cartItems).map(([key ,item])=>{

// //   // When you use [key, item], you are explicitly destructuring the array ['1', {...}]
// //   //  into two separate variables (key and item). Without destructuring, the first argument contains the entire entry (the array),
// //   //  and the second argument is unused (undefined).

// //   console.log(key , item)
// // })

