
import Image from "next/image";
import productData from '@/Data/Data';
import { Products } from "../Utilits/Helper";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import CartIcon2 from "../CartIconForFeaturedProducts/CartIcon2";



const FeaturedProduct = ({Product} : {Product:Products[]}) => {
    //The filter method in JavaScript is used to create a new array containing only the elements from the original array that meet a specified condition.

const filteredArray = Product.filter((items:Products)=>{
 return [5 ,19 , 4 ,12].includes(items.id)
})






  return (
    <>
      <div className="w-full h-auto pt-20 font-[700] px-4 xl:px-0">
        <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center">
          Featured Products
        </h1>

        <div className="w-full h-full flex justify-center gap-x-[30px] md:gap-x-[45px] min3:gap-x-[35px] gap-y-[100px] lg:gap-[28px] flex-wrap lg:flex-nowrap pt-6">
          {filteredArray?.map((product) => (
           

            
       
              <div
                key={product.id} // Use index as a fallback if id is missing
                className="w-[350px] min3:w-[300px] bg-[#F6F7FB] shadow-lg"
                data-aos="fade-up"
              >
                <div className=" relative w-full h-[60%] flex justify-center items-center cursor-pointer">
                  <Image
                    src={product.imageUrl}
                    alt={product.name|| "Product Image"}
                    width={190}
                    height={180}
                   
                  />
                 
                
                  <div className="absolute gap-x-2 top-2 left-2  justify-center items-center flex object-cover w-[25px] h-[25px] hover:text-white hover:bg-[#151875] bg-white rounded-[50%] group">
                    <CiHeart size={15}/>
                    </div>
                    <CartIcon2 stock={product.stockLevel} id={product.id} name={product.name} price={product.price} image={product.imageUrl} colors={product.colors}/>
                  
                  
                </div>

                <Link href={`/productsDetails/${product.slug}`}>
                <div className="group pb-6 p-4 h-[150px] w-full bg-white hover:bg-[#1A0B5B] hover:text-[#ffff] cursor-pointer flex flex-col mt-1 mb-1 items-center gap-2 shadow-lg">
                  <h1 className=" text-center text-[15px] text-[#FB2E86] text-inherit font-lato  font-[700]">
                    {product.name || "Unnamed Chair"}
                  </h1>


                    <div>
                  <div className="mt-1 mb-1 inline-block group-hover:hidden">
                    <Image
                      src={productData[0].colorImage1}
                      alt="Color Image 1"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="hidden group-hover:inline">
                    <Image
                      src={productData[0].colorImage2}
                      alt="Color Image 2"
                      width={50}
                      height={50}
                    />
                  </div>
                  </div>
            
                  
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-[#1A0B5B] text-inherit font-[400] mb-2 mt-2 font-lato">
                     Rs.{(product.price).toLocaleString('en-PK')}
                    </h3>
                  </div>
                </div>
                </Link>
              </div>

           
          ))}
        </div>
      </div>

      <div className="w-full bg-white h-5 flex justify-center mt-16">
        <Image
          src="/images/scroller.svg"
          alt="scroller"
          width={100}
          height={40}
        />
      </div>
    </>
  );
};

export default FeaturedProduct;
