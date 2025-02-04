import HomeIncrementButton from "../HomeAddToCartBtn/HomeIncrementButton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Products } from "../Utilits/Helper.js";

const DiscountItems = ({ Product }: { Product: Products[] }) => {
  return (
    <>
      <div className="w-full pt-[90px]">
        <div className="">
          <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center font-[700]">
            Discount Products
          </h1>
        </div>

        <div className="mt-4">
          <ul className="flex w-full justify-center gap-8 max-w:gap-6 sm:gap-10 text-[#151875] ">
            <li className="hover:text-[#FB2E86] hover:underline   text-[14px] sm:text-[18px]">
              Wood Chair
            </li>
            <li className="hover:text-[#FB2E86] hover:underline text-[15px] sm:text-[18px]">
              Plastic Chair
            </li>
            <li className="hover:text-[#FB2E86] hover:underline text-[15px] sm:text-[18px]">
              Sofa Colletion
            </li>
          </ul>
        </div>

        <div className="w-full h-auto flex  flex-col min3:flex-row items-center justify-center pt-10 px-[10px] lx:px-0">
          <div className="w-full min3:w-[700px] lg:w-[600px] h-[80%] text-center min3:text-left  items-center min3:items-start flex flex-col justify-center min3:ml-6  lg:ml-3 min5:ml-6 gap-6">
            <h1 className="text-[#151875] font-[700] max-w:text-[23px]  text-[30px] lg:text-[35px]  font-josefin">
              20% Discount Of All Products
            </h1>
            <p className="text-[#FB2E86] font-josefin text-[]">
              Eams Sofa Compact
            </p>
            <p className="font-lato text-[#B7BACB] text-[21pz] lg:text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="flex max-w:flex-col max-w:items-center max-w:justify-between max-w:h-[60px]">
              <div className="flex  text-[#B8B8DC] items-center ">
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
                <p className="ml-2 text-[#B8B8DC] text-[14px] lg:text-[16px]  font-lato">
                  Material expose like metals
                </p>
              </div>
              <div className="flex text-[#B8B8DC] items-center ml-12 max-w:ml-0 ">
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
                <p className="ml-2 text-[#B8B8DC] text-[14px] lg:text-[16px]   font-lato">
                  Clear lines and geomatric figures
                </p>
              </div>
            </div>

            <div className="flex max-w:flex-col max-w:items-center max-w:justify-between max-w:h-[60px]">
              <div className="flex text-[#B8B8DC]  items-center">
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
                <p className="ml-2 text-[#B8B8DC] text-[14px] lg:text-[16px] font-lato">
                  Material expose like metals
                </p>
              </div>
              <div className="flex text-[#B8B8DC] items-center ml-12 max-w:ml-0">
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
                <p className="ml-2 text-[#B8B8DC] text-[14px] lg:text-[16px] font-lato">
                  Clear lines and geomatric figures
                </p>
              </div>
            </div>

            <div className="border-none">
              <HomeIncrementButton
                stock={Product[10]?.stockLevel}
                id={Product[10]?.id}
                name={Product[10]?.name}
                price={Product[10]?.price}
                image={Product[10]?.imageUrl}
                colors={Product[10]?.colors}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="">
            <Image
              src="/images/sofa3.svg"
              alt="Discount Image"
              className=" max-w:w-[700px] sm:w-[700px] lg:w-[640px] min5:w-[600px]"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw , 33vw"
              width={600}
              height={600}
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountItems;
