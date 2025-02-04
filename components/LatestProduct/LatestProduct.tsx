"use client";
import Image from "next/image";
import { Products } from "../Utilits/Helper";
import { useState } from "react";
import CartIconForLatestProduct from "../Add-To-Card-Icons_functionality/CartIconForLatestProduct/CartIconForLatestProduct";
import Link from "next/link";
import WishlistIcon from "../Add-To-Wishlist-Icons_functionality/WishlistIconForLatestProduct/WishlistIcon";


const LatestProduct = ({ Product }: { Product: Products[] }) => {
  const [SelectedCategory, setSelectedCategory] = useState("New Arrival");
  const [displayCount, setDisplayCount] = useState(3);

  // runs when ever user click category
  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setDisplayCount(3);
  };

  // after user select cateogry we get products based on catogory
  const getFilteredProduct = () => {
    switch (SelectedCategory) {
      case "New Arrival":
        return Product.slice(0, displayCount); // (0,3) so slice retuns items from index 0 to 2 means 3 items
      case "Best Seller":
        return Product.slice(3, 3 + displayCount); // (3 , 6) slice return next three products from 3 to 5 means 3 items
      case "Featured":
        return Product.slice(6, 6 + displayCount);
      case "Special Offer":
        return Product.slice(9, 9 + displayCount);
    }
  };

  const filteredProducts = getFilteredProduct();

  if(Product.length < 0) return <p>Loading</p>

  return (
    <>
      <div className="w-full h-auto  pt-[90px] ">
        <div className="">
          <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center font-[700]">
            Latest Products
          </h1>
        </div>

        <div className="mt-2">
          <ul className="flex w-full max-w:flex-wrap  justify-center gap-8 max-w:gap-6 sm:gap-10 text-[#151875] ">
            {["New Arrival", "Best Seller", "Featured", "Special Offer"].map(
              (category: string, index) => (
                <li
                  key={index}
                  onClick={() => handleCategory(category)}
                  className={`hover:text-[#FB2E86] cursor-pointer   text-[15px] sm:text-[18px]
             ${category === SelectedCategory ? "underline" : ""} `}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="relative   items-center flex flex-wrap lg:flex-nowrap justify-center gap-y-24 gap-x-[25px] sm:gap-x-[40px] lg:gap-x-[50px] min1:gap-x-[85px] h-auto mx-2 lg:mx-4 min1:mx-20 pt-10">
          {filteredProducts?.map((items: Products) => (
            <div
              key={items.id}
              className="h-[310px] w-[350px] sm:w-[320px] lgm:w-[360px]  group cursor-pointer"
              data-aos="fade-up"
            >
              <div
                className={`w-full relative shadow-md lgm2:shadow-none  h-[280px] ${[18, 2, 6, 10, 20].includes(items.id) ? "bg-white " : "bg-[#F6F7FB]"} cursor-pointer  flex justify-center items-center  rounded-[5px]`}
              >
                <Link key={items.id} href={`/productsDetails/${items.slug}`}>
                  <Image
                    src={items.imageUrl}
                    alt={items.name}
                    width={230}
                    height={230}
                    className={`  ${items.id == 10 ? "w-[230px]" : ""} `}
                  />{" "}
                </Link>

                {/* icons */}

                <div>
                  <CartIconForLatestProduct
                    id={items.id}
                    stock={items.stockLevel}
                    name={items.name}
                    price={items.price}
                    image={items.imageUrl}
                    colors={items.colors}
                  />

                  <WishlistIcon
                    stock={items.stockLevel}
                    id={items.id}
                    name={items.name}
                    image={items.imageUrl}
                    color={items.colors[0]}
                    slug={items.slug}
                    price={items.price}
                  />
                </div>

                {/* icons */}
              </div>

              <div className="w-full font-josefin flex justify-between py-2 pr-3 ">
                <p className="text-[#151875]  w-40 truncate border-b-[2px] border-b-[#EEEFFB]">
                  {items.name}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-[14px] text-[#151875] ">
                    Rs.{items.price.toLocaleString("en-PK")}
                  </p>
                  <p className=" text-[12px] line-through text-[#FB2448]">
                    {items.discountPrice == null
                      ? ``
                      : ` Rs.${items.discountPrice?.toLocaleString("en-PK")}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
