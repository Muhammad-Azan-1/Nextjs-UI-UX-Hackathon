'use client'
import Pagesbar from "@/components/PageBar/PageBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import useCart from "@/context/CartContext";
import CartMessage from "@/components/CartMessage/CartMessage";
// import ProductsAdder from "@/components/ProductsAdder/ProductsAdder";
import ProductIncrementDecrement from "@/components/ProductIncrementDecrement/ProductIncrementDecrement";
const Cart = () => {

 const {cartItems, deleteItem } = useCart()

 console.log(" renders")
 const items = Object.entries(cartItems).some((item)=> item[1]?.value > 0)
console.log( "items checking true false",items)

console.log("OBject keys in an array",Object.entries(cartItems))

// this will convert object key and value inside teh cartItems object into an array
// cartItems : { 1:{  ,name , quantity , stock , image , price , value} } ->[ [0:"1" , 1:{,name , quantity , stock , image , price , value}] ,[0:"2" , 1:{,name , quantity , stock , image , price , value}] ] same thing for all objects
  
// Object.entries(cartItems).map(([key ,item])=>{

//   // When you use [key, item], you are explicitly destructuring the array ['1', {...}]
//   //  into two separate variables (key and item). Without destructuring, the first argument contains the entire entry (the array), 
//   //  and the second argument is unused (undefined).

//   console.log(key , item)
// })

  return (
    <>
      <Header />
      <Pagesbar
        pageName="Shopping Cart"
        name1="Home"
        name2="Page"
        name3="Shopping Cart"
      />

     { 
     items ?
     
     ( <div className="w-full flex-col items-center lg:flex-row flex justify-center gap-x-10 min7:gap-x-20 pt-[110px] max12:px-0 px-2 min7:px-0  h-auto">
        <div className="w-[98%] md:w-[720px] lg:w-[610px] min7:w-[720px]">
          <div className="flex max-w2:text-[16px] w-full text-[#1D3178] font-[700] font-josefin text-[20px]">
            <h1>Product</h1>
            <div className="w-full">
              <ul className="flex max-w2:text-[16px] max13:text-[18px] justify-end max13:gap-x-[20px] max10:gap-x-[30px]  gap-x-[70px]">
                <li>Price</li>
                <li>Quality</li>
                <li>Total</li>
              </ul>
            </div>
          </div>

         { 
         
         Object.entries(cartItems).map(([key , items])=>(

         items.value !== 0 ?(
         
      
            <div
              key={Number(key)}
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
                <Image
                  src="/images/crosssicon.svg"
                  onClick={()=> deleteItem(items.id , items.color)}
                  className="absolute top-[-2px] right-[-2px] cursor-pointer"
                  alt="cross Icon"
                  width={12}
                  height={12}
                ></Image>
              </div>
              <div
                className={`flex flex-col ${"max12:w-[160px] w-[170px] sm:w-[190px]"} text-[14px] max10:ml-3 ml-4 mt-2 font-josefin`}
              >
                <h1 className="w-full max10:text-[11px] max10:font-[700] text-[12px] sm:text-[14px]">
                {items.name}
                </h1>
                <p className=" text-[#A1A8C1] text-[12px]">{items.color}</p>
                {/* <p className=" text-[#A1A8C1] text-[12px]">{items.size}</p> */}
              </div>

              <div className=" max12:w-[90%] w-full text-[#15245E] font-josefin text-[14px] ">
                <ul className="flex  justify-end items-center max-w2:gap-x-4 max13:gap-x-6 max10:gap-x-10 gap-x-20">
                  <li>{items.price}</li>
                  <li>
             
                 <ProductIncrementDecrement
                  stock={items.stock} id={items.id} name={items.name} 
                  price={items.price} image={items.image} colors={items.color}
                 />
                  </li>
                  <li>{items.value == 1 ? items.price   : items.value * items.price}</li>
                </ul>
              </div>
            </div>) : (
              ''
            )
      
             ))}
          <div className="w-full flex justify-between pt-8">
            <Button
              variant="outline"
              size={"default"}
              className=" font-josefin pb-[6px] h-[40px] max12:text-[14px] max12:w-[130px]"
            >
              Update Cart
            </Button>

            <Button
              variant="outline"
              size={"default"}
              className=" font-josefin  pb-[6px] h-[40px] max12:text-[14px]  max12:w-[130px]"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Cart side bxoses */}

        <div className="flex gap-x-[52px] justify-center md:justify-start flex-wrap lg:flex-nowrap flex-row items-center lg:flex-col mt-14 ">
          <div className=" w-[350px] mt-10 md:mt-0 min7:w-[370px]">
            <h1 className="flex  justify-center  text-[20px] font-[700] font-josefin text-[#15245E]">
              Cart Totals
            </h1>
            <div className="w-full mt-4 lg:mt-8 h-[284px] bg-[#F4F4FC]">
              <div className="w-full flex px-6 h-full justify-evenly  flex-col">
                <div className="flex justify-between font-lato text-[#15245E] border-b-[2px] border-[#E1E1E4] pb-3">
                  <p className="font-[600]">Subtotals:</p>
                  <p>£219.00</p>
                </div>
                <div className="flex justify-between font-lato text-[#15245E]  border-b-[2px] border-[#E1E1E4] pb-3">
                  <p className="font-[600]">Totals:</p>
                  <p>£325.00</p>
                </div>

                <div className="flex justify-start">
                  <Image
                    src="/images/check.svg"
                    alt="Tick"
                    width={10}
                    height={10}
                  ></Image>
                  <p className="ml-2">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size={"default"}
                    className="bg-[#19D16F] w-full font-josefin mt-2  "
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] mt-10 md:mt-0 min7:w-[370px]">
            <h1 className="flex  justify-center lg:mt-8  gap-y-8 text-[20px] font-[700] font-josefin text-[#15245E]">
              Calculate Shopping
            </h1>
            <div className="w-full mt-4 lg:mt-8 h-[284px] bg-[#F4F4FC]">
              <div className="w-full flex px-6 h-full  justify-evenly  flex-col">
                <div className="flex justify-between text-[#C5CBE3] font-lato border-b-[2px] mt-2 border-[#E1E1E4] pb-1">
                  <p className="font-[600] text-[14px]">Bangladesh</p>
                </div>
                <div className="flex justify-between font-lato text-[#C5CBE3]  border-b-[2px] border-[#E1E1E4] pb-1">
                  <p className="font-[600] text-[14px]">Totals</p>
                </div>

                <div className="flex justify-between font-lato text-[#C5CBE3]  border-b-[2px] border-[#E1E1E4] pb-1">
                  <p className="font-[600] text-[14px]">Totals</p>
                </div>

                <Button
                  variant="outline"
                  size={"default"}
                  className=" w-[65%] font-josefin mt-2  "
                >
                  Calculating Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>):(
        <CartMessage/>
      )}
    </>
  );
};

export default Cart;
