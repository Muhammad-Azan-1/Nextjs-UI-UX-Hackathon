"use client";
import Header from "@/components/Header/Header";
import PageBar from "@/components/PageBar/PageBar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import useWishlist from "@/context/WishListContext";
import { CiHeart } from "react-icons/ci";
import Footer from "@/components/Footer/Footer";
import useCart from "@/context/CartContext";
import WishListItemsDeleteBtn from "@/components/WishListItemsDeleteBtn/WishListItemsDeleteBtn";

const WihsList = () => {
  const { wishListItem, deleteItem } = useWishlist();
  const { setIncrement } = useCart();

  return (
    <>
      <Header />
      <PageBar pageName="WishList" name1="Home" name2="Page" name3="WishList" />

      {wishListItem?.length > 0 ? (
        <>
          <div>
            <h1 className="text-[30px] sm:text-[40px] mt-10 text-[#15245E] pl-4 lg:px-28 font-josefin font-bold">
              My Wishlist
            </h1>
          </div>

          {wishListItem?.map((response) => (
            <div key={response.id} className="mt-4 w-full ">
              <div className="w-full flex justify-center">
                <div className="w-full mx-4 md:mx-0 md:w-[710px] mt-8  flex items-end justify-between border-b-[1px] pb-2  relative">
                  <div className="flex ">
                    <div className="relative  w-auto p-1">
                      <Image
                        className={` ${[10, 2, 6].includes(response.id) ? " w-[90px] h-[80px]  " : " w-[85px] h-[80px]  object-cover"}`}
                        src={`${response.image}`}
                        alt={`${response.name}`}
                        width={83}
                        height={87}
                      ></Image>
                      <WishListItemsDeleteBtn id={response.id} color={response.color}/>
                    </div>

                    <div className="text-[14px] max13:w-[150px] ml-2 font-josefin  flex flex-col justify-center items-start">
                      <p>{response.name}</p>
                      <p className="text-[#A1A8C1]">color : {response.color}</p>
                      <p
                        className={`${response.stock > 3 ? "text-[#007600]" : "text-[#B12704]"}`}
                      >
                        {response.stock > 3
                          ? "In Stock"
                          : `Only ${response.stock} Items left`}
                      </p>
                    </div>
                  </div>

                  <div className=" ">
                    <Button
                      onClick={() =>
                        setIncrement(
                          response.stock,
                          response.id,
                          response.name,
                          response.price,
                          response.image,
                          response.color
                        )
                      }
                      className="font-josefin max13:text-[12px] max13:w-[85px] w-[100px] "
                      size={"outline"}
                      variant={"outline"}
                    >
                      Add To Cart
                    </Button>
                  </div>

                  <Link
                    className="absolute cursor-pointer right-0 top-0"
                    href={`/productsDetails/${response.slug}`}
                  >
                    <BsBoxArrowUpRight size={20} color="black" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex h-auto flex-col justify-center items-center font-josefin  mt-10 mb-10">
          <div className="bg-green-100 w-[200px] h-[200px] rounded-[50%] mb-6 flex justify-center items-center">
            <CiHeart size={130} color="green" />
          </div>
          <p className="text-[#15245E] font-[500] text-[20px]  sm:text-[25px] mb-2 text-center">
            Your wishlist is currently empty!
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

export default WihsList;
