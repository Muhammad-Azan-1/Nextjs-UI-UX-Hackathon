import Pagesbar from "@/components/PageBar/PageBar";
import { BlogData } from "@/Data/Data";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
import { recentPosts,saleProduct } from "@/Data/Data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Brands from "@/components/Brands/Brands";
import Header from "@/components/Header/Header";
const page = () => {
  return (
    <>
     <Header />
      <Pagesbar
        pageName="Blog Page"
        name1="Home"
        name2="Page"
        name3="Blog page"
      />
      {/* min6:w-[550px] lg:w-[650px] min5:w-[750px] */}
      <div className="w-full h-auto  justify-center  flex flex-row max8:flex-col max7:gap-x-8 max6:gap-x-6 gap-x-10 xl:gap-x-16 px-1 min6:px-3 xl:px-0">
        <div className=" h-auto flex flex-col items-center justify-start max7:justify-evenly max7:pt-6 pt-16">
          {BlogData.map((item) => (
            <div key={item.id} className="max8:w-[90%] max7:w-[350px] max6:w-[490px] max5:w-[650px] w-[750px] xl:w-[870px]  mt-10">
              <Image
                src={item.image}
                alt={item.alt}
                width={870}
                height={450}
              ></Image>
              <div className="flex items-center  mt-6 max8:ml-0 max7:ml-1 max8:justify-center ">
                <div className="flex items-center  ">
                  <Image
                    src={item.icon1}
                    alt="pin icon"
                    width={12}
                    height={20}
                  ></Image>
                  <div className="ml-1 bg-[#FFE7F9] max-w2:w-[130px] w-[160px] h-[23px] py-1 text-center rounded-[2px]">
                    <p className="text-[#151875] text-[14px] font-josefin">
                      Surf Auxion
                    </p>
                  </div>
                </div>

                <div className="flex items-center ml-8 max7:ml-4">
                  <Image
                    src={item.icon2}
                    alt="pin icon"
                    width={12}
                    height={20}
                  ></Image>
                  <div className="ml-1 pb-1 bg-[#FFE7F9] max-w2:w-[130px] w-[160px] h-[23px] py-1 text-center rounded-[2px]">
                    <p className="text-[#151875] text-[14px] font-josefin">
                      Surf Auxion
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-y-4">
                <h1 className="text-[#151875] font-josefin font-[700] max7:text-[20px] text-[30px] mt-8 max8:text-center">
                  {item.heading}
                </h1>
                <p className="font-lato max8:text-center max8:text-[16px] max7:text-[12px] text-[#8A8FB9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <div className="flex items-center max8:justify-center justify-start gap-x-1">
                  <p className="font-lato  text-[#151875] max7:text-[14px]  text-[18px] hover:underline">
                    Read More
                  </p>
                  <div className="w-[5px] h-[5px] rounded-[100%] bg-[#FB2E86] "></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-24 flex max8:justify-center ">
          <div className="w-[100%] max8:px-2  max8:mb-10">
            <div className="max8:flex max8:flex-col max8:items-center">
              <h1 className="text-[#151875] max8:text-[35px] text-[22px] max8:text-center font-josefin">
                Search
              </h1>

              <div className="flex max7:h-[30px] h-[40px] mt-3 max8:w-[90%]  w-[270px] border-[1px] border-[#BDBDD8] rounded-[2px] max8:pl-4 max8:px-0  px-4  ">
                <input
                  type="text"
                  className="w-[90%] placeholder:text-[#1518751A]"
                  placeholder="Search For Posts "
                />

                <div className="flex  justify-start max8:justify-end items-center">
                  <MdSearch size={25} className="text-[#CBCBE0]" />
                </div>
              </div>
            </div>

            {/* catogiers section */}
            <div className="mt-12 max8:flex max8:flex-col max8:items-center">
              <h1 className="text-[#151875] text-[22px]  max8:text-[35px] font-[600] font-josefin ">
                Categories
              </h1>
              <div className="w-[254px] max8:w-[90%] flex flex-wrap justify-between   max8:justify-evenly max-w2:gap-x-2 max8:gap-x-6 max8:gap-y-6 max8:mb-10">
                <div className="flex pl-2 pt-1 justify-start mt-6 items-center max8:w-[150px] w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Hobbies (14)
                  </p>
                </div>

                <div className="flex pl-2 pt-1 justify-start mt-6 items-center w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Women (14)
                  </p>
                </div>

                <div className="flex pl-2 pt-1 justify-start mt-6 items-center w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Women (21)
                  </p>
                </div>

                <div className="flex pl-2 pt-1 justify-start mt-6 items-center w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Women (22)
                  </p>
                </div>

                <div className="flex pl-2 pt-1 justify-start mt-6 items-center w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Women (24)
                  </p>
                </div>

                <div className="flex pl-2 pt-1 justify-start mt-6 items-center w-[122px] h-[30px] bg-transparent hover:bg-[#F939BF] rounded-[5px] group">
                  <p className="text-[14px] max8:text-[20px] font-josefin text-[#151875] group-hover:text-white">
                    Women (26)
                  </p>
                </div>
              </div>
            </div>

            {/* recents post */}

            <div className="mt-8 max8:w-full max8:mt-4 max8:flex max8:flex-col max8:items-center max8:mb-14">
              <h1 className="text-[#151875] max8:text-[35px]  text-[22px]  max8:text-center font-[600] font-josefin">
                Recent Post
              </h1>
              <div className="mt-8 max8:mt-2 max8:w-full w-[250px] h-[270px]">
                {recentPosts.map((post) => (
                  <div key={post.id} className="w-[250px] max8:w-full max8:h-[80px]  h-[50px]  flex max8:justify-center max8:gap-x-4 justify-between mt-4">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={70}
                      height={51}
                      className="max8:w-[100px] object-cover" 
                    ></Image>
                    <div className="flex flex-col justify-center ">
                      <p className="text-[14px] max8:text-[16px] font-josefin text-[#3F509E]">
                        It is a long established fact
                      </p>
                      <p className="text-[11px] max8:text-[13px] font-lato text-[#8A8FB9]">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


        {/* sales prodct */}
            <div className="mt-6 max8:mt-[170px] max8:w-full  max8:flex max8:flex-col max8:items-center">
              <h1 className="text-[#151875] max8:text-[35px] text-[22px]  max8:text-center font-[600] font-josefin">
                Sale Product
              </h1>
              <div className="mt-8 max8:mt-4 w-[250px] h-auto max8:w-full">
                {saleProduct.map((post) => (
                  <div key={post.id} className="w-[250px]  max8:w-full max8:justify-center max8:gap-x-4 max8:h-[80px] h-[50px] flex justify-between mt-4">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={70}
                      height={51}
                      className="max8:w-[100px] object-cover" 
                    ></Image>
                    <div className="flex flex-col justify-center">
                      <p className="text-[14px] max8:text-[16px] font-josefin text-[#3F509E]">
                        {post.text}
                      </p>
                      <p className="text-[11px]  max8:text-[13px] font-lato text-[#8A8FB9]">
                        {post.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* offer product section */}

            <div className="mt-10 max8:mt-14   max8:flex max8:flex-col max8:items-center">
              <h1 className="text-[#151875]  max8:text-[35px] text-[22px]  max8:text-center font-[600] font-josefin">
                Offer product
              </h1>
              <div className="flex flex-wrap justify-between max8:justify-evenly gap-x-4 gap-y-6  w-[270px] max8:w-full max8:h-auto h-[280px] mt-8">
                <div className="w-[126px] h-[126px]">
                  <Image
                    src="/images/offerproduct.svg"
                    alt="bag"
                    width={126}
                    height={80}
                  ></Image>
                  <div className="text-center mt-2">
                    <h1 className="text-[#151875] font-[600] font-lato text-[14px]">
                      Duis lectus est.
                    </h1>
                    <p className="text-[#8A8FB9] font-[600] font-lato text-[12px]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>

                <div className="w-[126px] h-[126px]">
                  <Image
                    src="/images/offerproduct2.svg"
                    alt="bag"
                    width={126}
                    height={80}
                  ></Image>
                  <div className="text-center mt-2">
                    <h1 className="text-[#151875] font-[600] font-lato text-[14px]">
                      Sed placerat.
                    </h1>
                    <p className="text-[#8A8FB9] font-[600] font-lato text-[12px]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>

                <div className="w-[126px] h-[126px]">
                  <Image
                    src="/images/offerproduct3.svg"
                    alt="bag"
                    width={126}
                    height={80}
                  ></Image>
                  <div className="text-center mt-2">
                    <h1 className="text-[#151875] font-[600] font-lato text-[14px]">
                      Netus proin.
                    </h1>
                    <p className="text-[#8A8FB9] font-[600] font-lato text-[12px]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>

                <div className="w-[126px] h-[126px]">
                  <Image
                    src="/images/offerproduct4.svg"
                    alt="bag"
                    width={126}
                    height={80}
                  ></Image>
                  <div className="text-center mt-2">
                    <h1 className="text-[#151875] font-[600] font-lato text-[14px]">
                      Platea in.
                    </h1>
                    <p className="text-[#8A8FB9] font-[600] font-lato text-[12px]">
                      $12.00 - $15.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow box */}
            <div className="mt-8 max8:mt-14  max8:flex max8:flex-col max8:items-center">
              <h1 className="text-[#151875] max8:text-[35px] text-[22px] font-[600] font-josefin">
                Follow 
              </h1>

              <div className="flex w-[126px] max8:w-full max8:justify-center ml-2  sm:justify-end max8:mt-6 mt-4 ">
                <div className="bg-[#5625DF]  w-[30px] h-[30px] flex justify-center max8:mr-6 mr-4 items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white max-w:text-[14px]"
                      icon={faFacebookF}
                    />
                  </Link>
                </div>
                <div className="bg-[#FF27B7] w-[30px] h-[30px] flex justify-center  max8:mr-6 mr-4 items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white max-w:text-[14px]"
                      icon={faInstagram}
                    />{" "}
                  </Link>
                </div>
                <div className="bg-[#37DAF3] w-[30px] h-[30px] flex justify-center  items-center rounded-[100%]">
                  <Link href="">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white max-w:text-[14px]"
                      icon={faTwitter}
                    />{" "}
                  </Link>
                </div>
              </div>
            </div>


            <div className="mt-10 max8:mt-14  max8:flex max8:flex-col max8:items-center">
            <h1 className="text-[#151875] max8:text-[35px] text-[22px] font-[600] font-josefin">
               Tags
              </h1>
              <div className="mt-4 max8:mt-6  w-[228px] flex flex-wrap justify-start max8:w-full max8:justify-center gap-x-10 max8:gap-y-6 gap-y-3">
                <p className="text-[#151875] font-lato underline hover:text-[#FB2E86]">General</p>
                <p  className="text-[#151875] font-lato underline hover:text-[#FB2E86]">Atsanil</p>
                <p  className="text-[#151875] font-lato underline hover:text-[#FB2E86]">Insas</p>
                <p  className="text-[#151875] font-lato underline hover:text-[#FB2E86]">Bibsaas</p>
                <p  className="text-[#151875] font-lato underline hover:text-[#FB2E86]">Nulla</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center gap-x-10 mt-16">
        <div className="w-[32px] h-[24px] flex items-center font-lato font-[600] cursor-pointer justify-center text-[#E0D3F5]  border-[1px] border-[#E0D3F5] rounded-[3px] hover:bg-[#FB2E86] hover:text-[white]">1</div>
        <div className="w-[32px] h-[24px] flex items-center font-lato font-[600] cursor-pointer justify-center text-[#E0D3F5]  border-[1px] border-[#E0D3F5] rounded-[3px] hover:bg-[#FB2E86] hover:text-[white]">2</div>
        <div className="w-[32px] h-[24px] flex items-center font-lato font-[600] cursor-pointer justify-center text-[#E0D3F5]  border-[1px] border-[#E0D3F5] rounded-[3px] hover:bg-[#FB2E86] hover:text-[white]">3</div>
        <div className="w-[32px] h-[24px] flex items-center font-lato font-[600] cursor-pointer justify-center text-[#E0D3F5]  border-[1px] border-[#E0D3F5] rounded-[3px] hover:bg-[#FB2E86] hover:text-[white]">4</div>
      </div>
      <Brands/>
    </>
  );
};

export default page;
