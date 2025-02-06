'use client'
import Image from "next/image";
import useOrder from "@/context/OrderConfirmationContext";
import { FiCheckCircle } from "react-icons/fi"; // Feather Icons
import Link from "next/link";
import CheckOutAccordin from "../CheckOutAccordin/CheckOutAccordin";
import useCart from "@/context/CartContext";
const OrderConfirmationContent = () => {
  const { order, consumerDetailsSaveOrderToHistory } = useOrder();
  const {cartItemsSaveOrderToHistory}  = useCart()

  function resetValue () {
    consumerDetailsSaveOrderToHistory()
    cartItemsSaveOrderToHistory()
    console.log("Reset Value")
  }

  return (
    <div className=" pt-16 pb-4  lg:px-8 min7:px-12 ">
      
      <div className=" lg:w-full text-[12px] flex flex-col justify-center items-center ">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={200}
          height={200}
          loading="lazy"
        />

        <div className="flex justify-center w-full font-lato font-[600] mt-2">
          <span>Geniune</span>
          <span className="px-2">|</span>
          <span>Quality </span>
          <span className="px-2">|</span>
          <span>Savings</span>
        </div>
      </div>

      <div className="inline-block mt-8 lg:hidden w-full h-[65px]  bg-[#f5f5f5]">
            <CheckOutAccordin />
          </div>

        <div className="flex justify-center lg:inline-block w-full px-2 sm:px-0">
        <div className="w-[600px] lg:w-full">
      <div className="mt-[56px]  font-lato ">
        <div className="flex items-center gap-x-4">
          <FiCheckCircle size={50} className="" />
          <div className="flex justify-center flex-col">
            <h1 className="text-[#707070] font-[600] text-[14px]">
              Confirmation{"  "}
              {`#${order.id}`}
            </h1>
            <h2 className="text-[22px] font-[800]">
              Thank you,{"  "}
              {`${order.firstName}!`}
            </h2>
          </div>
        </div>
      </div>

      <div className="border-[1px] p-3 mt-4 font-lato rounded-[4px]">
        <h1 className="font-[600] mb-4">Your order is confirmed</h1>
        <p className="mb-4 font-[500] text-[15px]">
          This order will be delivered to you within 3 working days (upto 7
          working days during our special sales event/ Eid & Muharram Holidays)
          via Registered Courier.
        </p>
        <p className="text-[15px] font-[500]">
          We have a 30 days Exchange & Refund policy, If you have any problem
          regarding size, color or quality, just send the items back to us and
          get an exchange voucher of the item `&lsquo;`s invoice value or money refunded
          via Easy Paisa. No questions asked Money Back Guarantee!
        </p>
      </div>


      <div className="border-[1px] p-3 mt-4 font-lato rounded-[4px]">
             <div> <h1 className="font-[600] text-[18px]  mb-4">Order details</h1></div> 
     <div className="grid gap-x-5 max10:grid-cols-1 grid-cols-2 h2">

                {/* gird col 1 */}
              <div className="font-lato"> 
                <div className="mb-4">
                <h2 className="font-[600] mb-2">Contact Information</h2>
                <p>{order.email}</p>
                </div>

                <div className="font-lato mb-4">
                <h2 className="font-[600] mb-2">Shipping Address</h2>
                <p className="mb-[1px]">{order.firstName} {order.lastName}</p>
                <p className="mb-[1px]">{order.address}</p>
                <p className="mb-[1px]">{order.city}</p>
                <p className="mb-[1px]">{order.country}</p>
                <p>{order.phoneNumber}</p>
                </div>

                <div className="max10:mb-4">
                <h2 className="font-[600]  mb-2">Shipping Charges</h2>
                <p className="">Rs 199</p>  
                </div>

                </div>

                {/* gird col 2 */}
                <div className="">

                <div className="mb-4 font-lato">
                <h2 className="font-[600] mb-2">Payment Method</h2>
                <Image src={`/images/paymenticon.svg`} className="mb-2" alt="payment Icon" width={40} height={40}/>
                <p className={`${order.paymentMethod == "cod" ? 'text-black' : 'text-[#007600]'}`}>{order.paymentMethod == "cod" ? 'Cash on Delivery (COD)' : 'Paid with Card (Online Payment)' }</p>
                </div>

                <div className="font-lato mb-4">
                <h2 className="font-[600] mb-2">Billing Address</h2>
                <p className="mb-[1px]">{order.firstName} {order.lastName}</p>
                <p className="mb-[1px]">{order.address}</p>
                <p className="mb-[1px]">{order.city}</p>
                <p className="mb-[1px]">{order.country}</p>
                <p>{order.phoneNumber}</p>
                </div>
                </div>

                </div>
              
      </div>

      <div className="mt-3 flex justify-between items-center">
          <div className="flex text-black justify-between text-[14px]">
          <p>need help ? </p>
          <span className="pl-2 underline">Contact us</span>
          </div>

          <Link href={'/shop'} onClick={()=>resetValue()} className="p-4 bg-black text-[15px] font-[600] text-white rounded-[4px]">Continue Shopping</Link>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default OrderConfirmationContent;


