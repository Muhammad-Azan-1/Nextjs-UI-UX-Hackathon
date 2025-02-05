import Image from "next/image";
import Link from "next/link";
import HeaderTopBar from "@/components/HeaderTopBar/HeaderTopBar";
import ContactInputField from "@/components/ContactInputField/ContactInputField";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import GridTwoContent from "@/components/GridTwoContent/GridTwoContent";
import CheckOutAccordin from "@/components/CheckOutAccordin/CheckOutAccordin";
import CheckoutBtn from "@/components/CheckoutBtn/CheckoutBtn";


const page = () => {



  return (
    <>
      <HeaderTopBar />

      <div className="grid  font-lato pt-[44px] grid-cols-1 lg:grid-cols-[minmax(0,65%)_45%]">
        {/* grid box1 */}
        <form action=""> 
        <div className=" pt-16 pb-4  lg:px-8 min7:px-12 ">
          <div className="w-full text-[12px] flex flex-col justify-center items-center ">
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

          <div className="w-full flex justify-center items-center lg:w-auto">
            <div className="lg:w-full w-[600px] px-3 inline-block mt-8 lg:mt-14">
              <div className="flex flex-col w-full">
                {/* email input field */}
                <div className="w-full flex justify-between">
                  <label className="text-[21px] mb-[6px] font-[700]">
                    Contact
                  </label>
                  <label className="font-[500] underline cursor-pointer">
                    Login
                  </label>
                </div>
                <input
                  type="Email"
                  placeholder="Email"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  className="h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                />

                {/* checkbox */}
                <div className="mt-2 ml-1 flex items-center">
                  <label htmlFor="" className="relative block  cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-black p-1 scale-110 cursor-pointer"
                      id="checkbox"
                    />
                    <span className="pl-2 text-[14px] font-[500]">
                      Email me with news and offers
                    </span>
                  </label>
                </div>

                {/* seletecl box */}
                <div className="mt-8 flex flex-col">
                  <label className="text-[21px]   font-[700]" htmlFor="">
                    Delivery
                  </label>
                  <label
                    className="text-[14px]  mb-1 font-[500] text-[#707070]"
                    htmlFor=""
                  >
                    This will also be used as your billing address for this
                    order.
                  </label>
                </div>

                <div className="h-[53px] relative mt-2 placeholder:text-[#707070] appearance-none focus-within:border-black  focus:outline-none focus-within:border-[2px]  focus-within:ring-0 transition-all duration-300  ease-in-out   text-[14px] pl-1 pr-2 border rounded-[4px]">
                  <label
                    className="absolute text-[12px] top-[6px] left-3 text-[#707070]"
                    htmlFor=""
                  >
                    Country/Region
                  </label>
                  <select className="w-full h-full pt-3 pl-1 focus:outline-none peer ">
                    <option value="">Pakistan</option>
                  </select>
                </div>
                
                <div className="flex gap-y-3 flex-col mt-4">
                  <div className="flex gap-x-3 justify-between">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                        className="w-full h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                      />
                    </div>

                    <div className="flex gap-x-3 justify-between">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                      />
                      <input
                        type="number"
                        placeholder="Postal code (Optional)"
                        className="w-full h-[50px] placeholder:text-[#707070] focus:border-black  focus:outline-none focus:border-[2px]  focus:ring-0 transition-all duration-300 ease-in-out   text-[14px] pl-[10px] border rounded-[4px]"
                      />
                  </div>

                  {/* contact field */}
                  <div>
                    <ContactInputField />
                  </div>

                  {/* shipping fee */}
                  <div className="mt-4">
                    <h2 className="text-[18px]  font-[700]">Shipping method</h2>
                    <div className="w-full bg-[#f6f6f6] flex justify-between items-center  mt-2 h-[50px] placeholder:text-[#707070] border-black border-[1px]  text-[14px] px-[10px]  rounded-[4px]">
                      <p className="text-[14px] font-[500]">Shipping Charges</p>
                      <p className="font-[600]">Rs. 199.0</p>
                    </div>
                  </div>

                  {/* payment */}
                  <PaymentMethod />
                </div>
              </div>
            </div>
          </div>


    

        </div>
        </form>



        {/* gridbox2 */}
        <div className="bg-[#f5f5f5] border-l-[1px] hidden lg:inline-block relative">
        <div
    className="lg:sticky lg:top-[75px] h-screen "
    id="summaryContainer"
  >
    {/* max-h-[calc(100vh-10px)] */}
    <GridTwoContent />
  </div>
        </div>
      </div>
    </>
  );
};

export default page;
