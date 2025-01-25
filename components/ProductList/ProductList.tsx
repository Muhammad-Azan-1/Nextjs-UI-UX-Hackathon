import Image from "next/image";
import { Products } from "@/components/Utilits/Helper";
import Link from "next/link";
import { CiHeart, CiStar } from "react-icons/ci";
import CartIcon from "../CartIcon/CartIcon";



const ProductList = ({ DataFetched }: { DataFetched: Products[] }) => {

  return (
    <>
      
      <div className="relative   items-center flex flex-wrap justify-center gap-y-24 gap-x-[25px] sm:gap-x-[35px] lg:gap-x-[50px] min1:gap-x-[85px] h-auto mx-2 lg:mx-4 min1:mx-20 pt-8">
        
        {
          DataFetched?.map((items: Products) => (
            <div key={items.id} className=" cursor-pointer max-w2:w-[300px] max10:w-[350px] w-[249px] sm:w-[270px] h-[365px]  shrink-0 m-0 lg:m-2  rounded-[5px] ">

              <div
                className={`w-full relative   h-[280px] ${items.id == 18 || items.id == 2 || items.id == 6 || items.id == 10 || items.id == 20 ? 'bg-white ' : 'bg-[#F6F7FB]'} cursor-pointer  flex justify-center items-center    rounded-[5px]`}
              >
                <Image
                  className={` ${items.id == 11 || items.id == 12 ? 'w-[360px]' : 'w-[210px] '} ${items.id == 2 || items.id == 6 || items.id == 20 ? 'w-[220px]' : ''} ${items.id == 10 ? 'w-[240px]' : ''} `}
                  src={items.imageUrl}
                  alt={items.name}
                  width={200}
                  height={200}
                  loading="lazy"
                ></Image>
            
            {/*  on Hover */}
                 <div className="absolute z-10 top-0 left-0 w-full h-full bg-[#00000090] opacity-0 transition-opacity duration-500 hover:opacity-95 cursor-pointer">
                    <div className="absolute  left-0 bottom-3 w-full flex justify-center">
                    <Link href={`productsDetails/${items.slug}`} className=" font-[600] bg-[white] text-[#151875] rounded-[5px] py-1 px-3  text-[12px] transition-all duration-300 hover:bg-[#151875] hover:text-white focus:outline-none">
                    View Item
                    </Link>
                    </div>

                    <div className="">
                   <CartIcon id={items.id} stock={items.stockLevel} />
                   </div>

                    <div className="absolute flex items-center justify-center max-w2:right-[65px]  right-[85px]  max-w5:right-[45px] bottom-3 w-[30px] h-[30px] hover:bg-[#151875] bg-white rounded-[50%] group ">
                    <CiHeart size={20} className="text-[#151875] group-hover:text-white" />

                    </div>
             </div>


                <div className={` ${items.discountPercentage != 0 ? 'z-30 absolute rounded-[5px] px-3 py-1 bg-[#151875] top-3 text-white text-[12px] font-josefin -left-2' : ''}`}>{items.discountPercentage == 0 ? '' : `${items.discountPercentage}% OFF`}</div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className={`mt-2 text-[#151875] text-center text-[18px] font-josefin font-[700]`}>
                  {items.name}
                </h1>
                <Image
                  className="mt-2"
                  src={'/images/slidershopitem.svg'}
                  alt="scroller"
                  width={30}
                  height={30}
                  loading="lazy"
                ></Image>
                <div className="mt-2 flex items-center">
                  <p className="text-[#1A0B5B] mr-2 text-[15px] font-josefin font-[400]">
                    {items.discountPrice != null ? `Rs. ${items.discountPrice.toLocaleString('en-PK')}` : ``}
                  </p>
                  <p className={`${items.discountPercentage == 0 ? 'text-[#1A0B5B] mr-2 text-[15px] font-josefin ' : 'text-[#FB2E86] line-through font-[700]'} text-[12px]  font-[400] mb-2 mt-2 font-lato`}>
                    Rs. {items.price.toLocaleString('en-PK')}
                  </p>
                </div>
              </div>
            </div>
          ))}


      </div>
  
    </>
  )
}

export default ProductList;
