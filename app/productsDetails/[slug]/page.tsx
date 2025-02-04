import Header from "@/components/Header/Header";
import PageBar from "@/components/PageBar/PageBar";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { ProductsDetails } from "@/components/Utilits/Helper";
import ProductDetailsCart from "@/components/ProductDetailsCart/ProductDetailsCart";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details - Playwood Arm Chair",
  description:
    "Explore the Playwood Arm Chair, a stylish and comfortable addition to your home decor. Available for purchase with various options.",
  keywords:
    "Furniture, Armchair, Playwood, Chair, Home Decor, Premium Furniture",
};

const page = async ({ params }: { params: { slug: string } }) => {

  try{

  const query = `
   *[_type == 'product' && slug.current == "${params?.slug}"] | order(id asc) {
  name , 
    id,
  price ,
    discountPrice,
   "imageUrl": image.asset->url,
     discountPercentage,
    stockLevel,
  description,
    colors,
    dimensions,
      
}`;

  const response: ProductsDetails[] = await client.fetch(query);
    console.log(response, "Product detials data")
  return (
    <>
      <Header />
      <PageBar
        pageName="Product Details"
        name1="Home"
        name2="Page"
        name3="Product Details"
      />
      <div data-testid="product" className="w-full h-auto">
        {response.map((items: ProductsDetails) => (
          <div
            key={items.id}
            className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-4 lg:gap-x-12 pb-6 mt-20 md:mt-32"
          >
            <div className="max-w4:w-[100%] w-[550px] md:w-[500px] px-4 flex justify-center items-center ">
              <Image
                src={items.imageUrl}
                alt={items.slug}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto"
              ></Image>
            </div>

            <div className=" md:hidden w-full">
              <div className="w-full border-[0.8px]"></div>
            </div>

            <div className="flex flex-col w-full  sm:w-[620px] md:w-[540px] px-4 sm:pr-6 ">
              <h1 className="text-[#151875] font-josefin  max-w4:text-[25px] text-[40px] lg:text-[35px] font-[600] pb-1">
                {items.name}
              </h1>
              <div className="flex gap-x-2">
                <h2 className="text-[20px] text-[#FB2E86]  font-lato font-[900] pb-1 line-through">
                  {items.discountPrice == null
                    ? ``
                    : ` Rs.${items.discountPrice?.toLocaleString("en-PK")}`}
                </h2>
                <h2 className="text-[20px] text-[#151875] font-lato font-[900] pb-1">
                  {" "}
                  Rs.{items.price.toLocaleString("en-PK")}
                </h2>
                <div
                  className={` ${items.discountPercentage != 0 ? " rounded-[5px] px-3 py-1 h-6 bg-[#151875]  text-white text-[12px] font-josefin " : ""}`}
                >
                  {items.discountPercentage == 0
                    ? ""
                    : `${items.discountPercentage}% OFF`}
                </div>
              </div>
              <h2
                className={`${items.stockLevel > 3 ? "text-[#007600]" : "text-[#B12704]"} pb-2`}
              >
                {items.stockLevel > 3
                  ? "In Stock"
                  : `Only ${items.stockLevel} left in stock - order soon`}
              </h2>
              <p className="text-[#151875] font-josefin pb-2 text-[14px]">
                <span className="underline">Shipping</span> calculated at
                checkout.
              </p>
              <p className="text-[14px] font-josefin  text-red-500 pb-4">
                Free delivery only in Karachi, Lahore, Islamabad and Rawalpindi
                Delivery to other cities subject to additional charges
              </p>

              <div className="w-full">
                <div className="border-[0.5px] w-full"></div>
              </div>

              <div>
                <ProductDetailsCart
                  stock={items.stockLevel}
                  Id={items.id}
                  name={items.name}
                  price={items.price}
                  image={items.imageUrl}
                  colors={items.colors}
                />
              </div>

              <div className="mt-[20px] tracking-wide">
                <h1 className="text-[18px] text-[#151875] font-[600] mb-1">
                  Specification :
                </h1>
                {response.map((items, index) => {
                  const ObjectValues: string[] = Object.values(
                    items?.dimensions
                  );
                  return (
                    <div className="flex gap-x-3" key={index}>
                      <span className="text-[#151875]" key={index}>
                        {ObjectValues[0]} W |{" "}
                      </span>
                      <span className="text-[#151875]">
                        {ObjectValues[1]} D |
                      </span>
                      <span className="text-[#151875]">
                        {ObjectValues[2]} H (inches)
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-[20px] tracking-wide">
                <h1 className="text-[18px] text-[#151875] font-[600] mb-1">
                  Procduct description :
                </h1>
                <p className="text-[#151875]">{items.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}catch(err){
  console.log(err)
  return(
  <>
 <Header/>
 <div className="w-full h-screen flex justify-center bg-black text-white font-lato items-center">
  <p className="text-center text-[16px font-[700] sm:text-[25px]">Fail to load the Products. Please try again later</p>
  </div>
  <Footer/>
  </>
  )
}
};

export default page;
