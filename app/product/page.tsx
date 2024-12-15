import Pagesbar from "@/components/PageBar/PageBar";
import Image from "next/image";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { productDetails } from "@/Data/Data";
import Brands from "@/components/Brands/Brands";
import Header from "@/components/Header/Header";
const Shop = () => {
  // w-[90%] min3:w-[900px] lg:w-[1000px] min7:
  return (
    <>
    <Header />
      <Pagesbar pageName="Products" name1="Home" name2="Page" name3="Product" />
      <div className="w-full flex-col h-auto  pt-[60px] flex justify-center items-center  ">
        <div
          id="shadow"
          className="max12:w-[350px] max10:w-[400px] w-[500px] sm:w-[630px] md:w-[765px] lg:w-[1000px] min7:w-[1170px]  md:h-auto flex-col md:flex-row  flex bg-white max12:py-[8px] max10:py-2  py-3 xl:px-0"
        >
          <div className="flex flex-row   md:flex-col md:gap-y-[10px] justify-between md:justify-center  md:gap-x-12 px-2 md:px-0 md:ml-2 lg:ml-3 ">
            <Image
              src="/images/product2.svg"
              alt="product1"
              width={151}
              height={155}
              className=" max12:w-[105px]  max12:h-[120px]  max10:w-[120px]  max10:h-[140px] w-[155px] sm:w-[200px] sm:h-[175px] object-cover md:object-cover md:h-auto  md:w-[250px] lg:object-contain lg:h-auto lg:w-[151px]"
            ></Image>
            <Image
              src="/images/product3.svg"
              className=" max12:w-[105px]  max12:h-[120px]  max10:w-[120px]  max10:h-[140px] w-[155px] sm:w-[200px] sm:h-[175px] object-cover md:object-cover md:h-auto  md:w-[250px] lg:object-contain lg:h-auto lg:w-[151px]"
              alt="product2"
              width={151}
              height={155}
            ></Image>
            <Image
              src="/images/product4.svg"
              className=" max12:w-[105px]  max12:h-[120px] max10:w-[120px]  max10:h-[140px]  w-[155px] sm:w-[190px] sm:h-[175px] object-cover md:object-cover md:h-auto  md:w-[250px] lg:object-contain lg:h-auto  lg:w-[151px]"
              alt="product3"
              width={151}
              height={155}
            ></Image>
          </div>
          {/* w-[800px] object-contain */}
          <div className="flex ml-0 md:ml-3 py-2 px-2 md:px-0 md:py-0">
            <Image
              src="/images/product1.svg"
              alt="product 4"
              width={375}
              height={490}
              className="max10:h-[350px] w-full h-[650px] object-cover md:w-[500px] md:h-auto md:object-cover lg:object-contain lg:w-[375px]"
            ></Image>
          </div>

          <div className="flex flex-col justify-start md:justify-center gap-y-3 p-4 md:p-0 md:ml-4 lg:ml-6 pt-0 min7:pt-14 mr-2 lg:mr-0 w-full md:w-[350px] lg:w-auto h-full">
            <h1 className="text-[#0D134E] font-josefin max10:text-[30px] text-[40px] md:text-[30px] lg:text-[36px]">
              Playwood arm chair
            </h1>

            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                className="text-[#FFC416] text-[16px] md:text-[12px]"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#FFC416] text-[16px] md:text-[12px] ml-1"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#FFC416] text-[16px] md:text-[12px] ml-1"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#FFC416] text-[16px] md:text-[12px] ml-1"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#FFC416] text-[16px] md:text-[12px] ml-1"
                icon={faStar}
              />
              <p className="text-[#151875] text-[16px] ml-2  md:text-[14px] font-josefin">
                (22)
              </p>
            </div>

            <div className="flex w-[120px] justify-between font-josefin">
              <p className="text-[#151875]">$32.00</p>
              <p className="line-through text-[#FB2E86]">$32.00</p>
            </div>

            <div className="font-josefin">
              <h1 className="text-[#0D134E] text-[20px] md:text-[16px]">
                Color
              </h1>
              <p className="max10:w-full w-[440px] max12:text-[14px] max10:text-[16px] md:w-[360px] text-[18px] md:text-[14px] lg:text-[16px] lg:w-[500px] mt-2 text-[#C4C4C4] font-josefin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
            </div>

            <div className="w-[280px] mt-[20px] flex  items-center justify-start md:justify-center">
              <h1 className="text-[#151875] font-josefin text-[20px] md:text-[16px]">
                Add To Cart
              </h1>
              <FontAwesomeIcon className="text-[#535399] ml-4" icon={faHeart} />
            </div>

            <div className="flex h-[100px] flex-col text-[#151875] font-josefin gap-y-4">
              <h1 className="text-[18px] md:text-[16px]">Categories:</h1>
              <h1 className="text-[18px] md:text-[16px]">Tags</h1>
              <div className="flex items-center">
                <h1 className="text-[18px] md:text-[16px]">Share</h1>
                <div className="ml-3 bg-[#5625DF]  w-[20px] h-[20px] flex justify-center  mr-3 items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white text-[10px] "
                      icon={faFacebookF}
                    />
                  </Link>
                </div>
                <div className="bg-[#FF27B7] w-[20px] h-[20px] flex justify-center  mr-3 items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white text-[10px]"
                      icon={faInstagram}
                    />{" "}
                  </Link>
                </div>
                <div className="bg-[#37DAF3] w-[20px] h-[20px] flex justify-center  mr-3 items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white text-[10px]"
                      icon={faTwitter}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center h-auto  md:h-[650px] max10:mt-[80px] mt-[110px] bg-[#F9F8FE]">
          <div className="w-full md:w-[750px] lg:w-[1000px] min7:w-[1153px] py-10 md:py-6 min7:py-0 h-full flex flex-col justify-center ">
            <div className="w-full">
              <ul className="w-full max10:px-1 max10:gap-y-8 text-[#151875] font-josefin max10:text-[18px] text-[20px] md:text-[24px] flex justify-center md:justify-start max10:flex-wrap max10:gap-x-8 gap-x-12 md:gap-x-16 min7:gap-x-24">
                <li className="hover:underline">Description</li>
                <li className="hover:underline">Additional Info</li>
                <li className="hover:underline">Reviews</li>
                <li className="hover:underline">Video</li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start w-full px-2 md:px-0 md:w-auto mt-12">
              <h1 className="text-[#151875] font-josefin text-[22px]">
                Varius tempor.
              </h1>
              <p className="text-[#A9ACC6] text-center md:text-start text-[14px]  sm:text-[16px] font-josefin mt-4 leading-7">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="flex flex-col w-full  md:w-auto px-2 md:px-0  mt-12">
              <h1 className="text-[#151875] font-josefin md:text-start text-center text-[22px]">
                More details
              </h1>
              <div className="text-[#A9ACC6] font-josefin mt-4 min7:leading-10">
                <div className="flex items-start  min7:items-center text-center md:text-start">
                  <Image
                    src="/images/arrowupIcon.svg"
                    alt="arrow up"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="ml-0 sm:ml-2  text-[14px]  sm:text-[16px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>

                <div className="flex mt-4 md:mt-2 items-start min7:items-center  text-center md:text-start ">
                  <Image
                    src="/images/arrowupIcon.svg"
                    alt="arrow up"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="ml-0 sm:ml-2  text-[14px]  sm:text-[16px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
                <div className="flex mt-4 md:mt-3 items-start min7:items-center  text-center md:text-start">
                  <Image
                    src="/images/arrowupIcon.svg"
                    alt="arrow up"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="ml-0 sm:ml-2  text-[14px]  sm:text-[16px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
                <div className="flex mt-4 md:mt-3 items-start min7:items-center  text-center md:text-start ">
                  <Image
                    src="/images/arrowupIcon.svg"
                    alt="arrow up"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="ml-0 sm:ml-2  text-[14px]  sm:text-[16px]">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    ds diam arcu, nulla lobortis justo netus dis. Eu in
                    fringilla vulputate nunc nec. Dui, massa viverr .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-[110px] justify-center items-center px-2 xl:px-0">
          <div className="w-full  font-[700] text-[#101750] font-josefin text-[36px] flex justify-center">
            <div className="w-full flex justify-center min7:w-[1200px]">
              <h1>Related Products</h1>
            </div>
          </div>

          <div className="w-full pt-10 flex justify-center flex-wrap gap-y-14 min7:gap-y-0 min7:flex-nowrap items-center gap-x-[35px] lg:gap-x-14 min7:gap-x-10">
            {productDetails.map((items) => (
              <div
                key={items.id}
                className={`max11:w-[330px] w-[270px] h-[400px] ${
                  items.id === "1" ? "mt-0" : "max11:mt-12"
                } `}
              >
                <div className="">
                  <Image
                    src={items.image}
                    alt={items.alt}
                    width={270}
                    className=" max11:w-[330px]  w-[270px]"
                    height={340}
                  ></Image>
                </div>
                <div className="w-full p-2">
                  <div className="flex font-josefin text-[#151875] justify-between items-center">
                    <h1>{items.heading}</h1>
                    <div>
                      <FontAwesomeIcon
                        className="text-[#FFC416] text-[10px]"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[#FFC416] text-[10px] ml-1"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[#FFC416] text-[10px] ml-1"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-[#FFC416] text-[10px] ml-1"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className={` text-[10px] ml-1 ${
                          items.id === "1" || items.id === "3"
                            ? "text-[#B2B2B2]"
                            : "text-[#FFC416]"
                        }`}
                        icon={faStar}
                      />
                    </div>
                  </div>
                  <p className="mt-1 font-josefin text-[#151875] font-[13px]">
                    {items.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brands/>
    </>
  );
};

export default Shop;
