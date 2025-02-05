"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckoutBtn from "../CheckoutBtn/CheckoutBtn";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(()=>{
    if(typeof window !== "undefined"){
      const storedVal = sessionStorage.getItem('paymentMethod')
      if(storedVal) setSelectedOption(storedVal)
      }
  },[])

  useEffect(() => {
    sessionStorage.setItem("paymentMethod", (selectedOption));
  }, [selectedOption]);

  return (
    <>
    <div className="flex flex-col">
      <div className="mt-4">
        <h2 className="text-[21px] font-[700]">Payment method</h2>
        <p className="text-[14px]  mb-1 font-[500] text-[#707070]">
          Your payment method’s billing address must match the shipping address.
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className="mt-2 flex w-full flex-col">
        {/* COD BOX */}
        <div>
          <div
            className={`w-full font-[600]  flex items-center gap-x-2 h-[50px]  bg-[#f6f6f6] p-3 sm:p-5 rounded-t-[4px]   border-[1px] ${selectedOption == "cod" ? "border-[1px] border-black" : "border-b-0"}`}
          >
            <input
              type="radio"
              className="accent-black p-1 scale-110  cursor-pointer"
              value={"cod"}
              checked={selectedOption === "cod"}
              onChange={() => setSelectedOption("cod")}
            />
            <p className="text-[14px]">
              Cash On Delivery (C{""}O{""}D)
            </p>
          </div>

          <div
            className={`w-full border-l border-r font-[500]   bg-[#f6f6f6] text-[14px] ${selectedOption == "cod" ? "p-[14px] h-auto" : "p-0 h-0"} `}
          >
            <p>
              COD (Cash on Delivery) is a payment option that allows the buyer
              to pay when the product is delivered to him. Once the courier has
              received the money, only then will he give the parcel to the
              customer.
            </p>
          </div>
        </div>

        {/* Online Payment */}
        <div>
          <div
            className={`w-full flex max10:flex-col max10:items-start items-center  justify-between gap-x-1 sm:gap-x-3 h-auto ${selectedOption == "onlinePay" ? "border-[1px] border-black" : ""}  bg-[#f6f6f6] p-3 sm:p-5 border-[1px] `}
          >
            <div className="flex  items-center  font-[600] gap-x-2">
              <input
                type="radio"
                value={"onlinePay"}
                checked={selectedOption === "onlinePay"}
                onChange={() => {
                  setSelectedOption("onlinePay");
                }}
                className="accent-black  p-1 scale-110 cursor-pointer"
              />
              <p className="text-[14px] flex justify-center">
                PAYFAST (Debit/Credit/Bank Account)
              </p>
            </div>

            <div className="flex w-auto max10:w-full max10:flex max10:justify-center max10:mt-1 gap-x-2">
              <Image
                src={"/images/visa.svg"}
                alt="Visa pay"
                width={38}
                height={24}
              ></Image>
              <Image
                src={"/images/unionpay.svg"}
                alt="Visa pay"
                width={38}
                height={24}
              ></Image>
              <Image
                src={"/images/master.svg"}
                alt="Visa pay"
                width={38}
                height={24}
              ></Image>
            </div>
          </div>

          <div
            className={`w-full  text-[14px]  font-[500] flex  flex-col items-center rounded-b-[4px] border bg-[#f6f6f6] ${selectedOption == "onlinePay" ? "p-4 max13:p-2 h-auto" : "p-0 h-0 hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-270.8 371 102 52"
              width="90"
              height="50"
              stroke="grey"
              fill="grey"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M-182 404v16.8c0 .7-.4 1.2-1 1.2h-75.7c-.7 0-1.2-.6-1.2-1.2v-47.6c0-.7.6-1.2 1.2-1.2h75.7c.7 0 1 .6 1 1.2V395m-78-14h78m-17 18h27m-3.9-4.6 4.5 4.6-4.5 4.6"
              ></path>{" "}
              <circle
                cx="-255.5"
                cy="376.5"
                r="1.5"
                fill="currentColor"
              ></circle>{" "}
              <circle
                cx="-250.5"
                cy="376.5"
                r="1.5"
                fill="currentColor"
              ></circle>{" "}
              <circle
                cx="-245.5"
                cy="376.5"
                r="1.5"
                fill="currentColor"
              ></circle>
            </svg>
            <p className="text-center mt-2 w-full sm:w-[400px]">
              After clicking “Pay now”, you will be redirected to PAYFAST(Pay
              via Debit/Credit/Wallet/Bank Account) to complete your purchase
              securely
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
      <CheckoutBtn paymentMethod={selectedOption}/>
      </div>
    </div>

     {/* checkout button */}

      
   
    </>
  );
};

export default PaymentMethod;

//


