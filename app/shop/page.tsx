
 import PageBar from "@/components/PageBar/PageBar";
import Brands from "@/components/Brands/Brands";
 import Header from "@/components/Header/Header";
import ProductList  from "@/components/ProductList/ProductList";
import { client } from "@/sanity/lib/client";
import { Products } from "@/components/Utilits/Helper";


export const revalidate = 10

const page = async() => {


  const query1 = `
  *[_type == 'product'] | order(id asc) {
    name, 
    id,
     stockLevel,
    price,
   "slug": slug.current,
    discountPrice,
    "imageUrl": image.asset->url,
    discountPercentage,
    stockLevel,
    colors
  }
`;
const DataFetched: Products[] = await client.fetch(query1);


  return(
    <>
       <Header/>
        <PageBar pageName="Shop"
          name1="Home"
         name2="Page"
        name3="Shop"/>
      <ProductList DataFetched={DataFetched} />
      <Brands/>

    </>
  )
}

export default page;


// ${items.id ==  19 || 20 ? 'w-[350px]' : ''}
 



// <Header/>
// <PageBar pageName="About Us"
//   name1="Home"
//   name2="Page"
//   name3="About Us"/>

// <div className=" scroll-smooth sm:w-full flex lg:flex-row flex-col justify-between px-3 min7:px-0 min7:justify-center min7:gap-x-40 items-center pt-20">
//   <div className="flex flex-col">
//     <h1 className="text-[#151875] font-josefin max-w:text-[20px] text-center font-[600] text-[22px]">
//       Ecommerce Acceories & Fashion item{" "}
//     </h1>
//     <p className="text-[#8A8FB9] text-[12px] text-center lg:text-left font-lato">
//       About 9,620 results (0.62 seconds)
//     </p>
//   </div>

//   <div className="flex items-center  justify-center text-center flex-wrap gap-x-0 gap-y-8 sm:gap-x-0 sm:gap-y-0 sm:flex-nowrap sm:justify-start w-full sm:w-auto pt-8 lg:pt-0">
//     <div className="flex items-center">
//       <h2 className="font-lato text-[14px] sm:text-[16px] text-[#3F509E]">
//         Per Page:
//       </h2>
//       <input
//         type="text"
//         className=" w-[55px] h-[18px] sm:h-[25px] border-[1px] ml-2 border-[#A4B6C8B2]"
//       />
//     </div>

//     <div className="flex items-center">
//       <h2 className="font-lato ml-6  text-[14px] sm:text-[16px] text-[#3F509E]">
//         Sort By:
//       </h2>
//       <input
//         type="text"
//         placeholder="Best Match"
//         className="placeholder:sm:text-[13px] placeholder:text-[10px] pb-1 placeholder:text-center w-[90px] sm:w-[96px] h-[25px] sm:h-[28px]  border-[1px] ml-2 border-[#A4B6C8B2]"
//       />
//     </div>

//     <div className="flex items-center font-lato text-[#3F509E]">
//       <div className="flex ml-6 items-center">
//         <h2 className=" text-[14px] sm:text-[16px]">View:</h2>
//         <Image
//           src="/images/gridicon.svg"
//           className="ml-1"
//           alt="grid Icon"
//           width={12}
//           height={12}
//         ></Image>
//         <Image
//           src="/images/listicon.svg"
//           className="ml-1"
//           alt="grid Icon"
//           width={12}
//           height={12}
//         ></Image>
//       </div>
//       <input
//         type="text"
//         className="w-[140px] sm:w-[162px] h-[22px] sm:h-[30px] ml-4 border-[1px] border-[#A4B6C8B2]"
//       />
//     </div>
//   </div>
// </div>




// <div className="flex justify-center">
// <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center pt-20">Chair's</h1>
// </div>

// {/* Chair */}

// <div className="relative items-center flex flex-wrap justify-center gap-y-24 gap-x-[25px] sm:gap-x-[35px] lg:gap-x-[50px] min1:gap-x-[85px] h-auto mx-2 lg:mx-4 min1:mx-20 pt-8">

//   {response2.map((items:Sofa) => (
//     <div className=" max-w2:w-[300px] max10:w-[350px] w-[249px] sm:w-[270px] h-[365px]  shrink-0 m-0 lg:m-2 cursor-pointer ">
//       <div
//         className={`w-full relative  h-[280px] bg-[#F6F7FB] hover:bg-[#EBF4F3] flex justify-center items-center scroll-smooth  group`}
//       >
//         <Image
//           className={`group-hover:scale-110 ease-in-out transition-all duration-300 `}
//           src={items.imageUrl}
//           alt={items.name}
//           width={200}
//           height={200}
//         ></Image>
//       <div className="absolute top-2 text-[#151875] text-[18px] font-josefin left-2 ">{items.discountPercentage == 0 ? '' : `-${items.discountPercentage}%`}</div>
//       </div>
//       <div className="flex flex-col items-center ">
//         <h1 className={`mt-2 text-[#151875] text-[18px] font-josefin font-[700] ${items.price == '780'? 'truncate max-w-xs' : ''}`}>
//           {items.name}
//         </h1>
//         <Image
//           className="mt-2"
//           src={'/images/slidershopitem.svg'}
//           alt="scroller"
//           width={30}
//           height={30}
//         ></Image>
//         <div className="mt-2 flex items-center">
//           <p className="text-[#1A0B5B] mr-2 text-[15px] font-josefin font-[700]">
//             ${items.price}
//           </p>
//           <p className="text-[#FB2E86] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
//                {items.price === '1800' ?  '$2000' : ''}
//          </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

// <div className="flex justify-center">
// <h1 className="font-josefin max-w:text-[32px] text-[42px] text-[#1A0B5B] text-center pt-20">Sofa's</h1>
// </div>


// {/* ///Sofas */}

// <div className="relative items-center flex flex-wrap justify-center gap-y-24 gap-x-[25px] sm:gap-x-[35px] lg:gap-x-[50px] min1:gap-x-[85px] h-auto mx-2 lg:mx-4 min1:mx-20 pt-8">

// {response.map((items:Sofa) => (
// <div  className=" max-w2:w-[300px] max10:w-[350px] w-[249px] sm:w-[270px] h-[365px]  shrink-0 m-0 lg:m-2 cursor-pointer ">
// <div
// className={`w-full relative  h-[280px] bg-[#F6F7FB] hover:bg-[#EBF4F3] flex justify-center items-center scroll-smooth  group`}
// >
// <Image
//   className={`group-hover:scale-110 ease-in-out transition-all duration-300 `}
//   src={items.imageUrl}
//   alt={items.name}
//   width={200}
//   height={200}
// ></Image>
// <div className="absolute top-2 text-[#151875] text-[18px] font-josefin left-2 ">{items.discountPercentage == 0 ? '' : `-${items.discountPercentage}%`}</div>
// </div>
// <div className="flex flex-col items-center ">
// <h1 className={`mt-2 text-[#151875] text-[18px] font-josefin font-[700] ${items.price == '780'? 'truncate max-w-xs' : ''}`}>
//   {items.name}
// </h1>
// <Image
//   className="mt-2"
//   src={'/images/slidershopitem.svg'}
//   alt="scroller"
//   width={30}
//   height={30}
// ></Image>
// <div className="mt-2 flex items-center">
//   <p className="text-[#1A0B5B] mr-2 text-[15px] font-josefin font-[700]">
//     ${items.price}
//   </p>
//   <p className="text-[#FB2E86] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
//        {items.price === '1800' ?  '$2000' : ''}
//  </p>
// </div>
// </div>
// </div>
// ))}
// </div>




// const page = async() => {
  // return (
  //   <>
    // <Header/>
    //   <PageBar pageName="About Us"
    //     name1="Home"
    //     name2="Page"
    //     name3="About Us"/>
    //   <div className=" scroll-smooth sm:w-full flex lg:flex-row flex-col justify-between px-3 min7:px-0 min7:justify-center min7:gap-x-40 items-center pt-20">
    //     <div className="flex flex-col">
    //       <h1 className="text-[#151875] font-josefin max-w:text-[20px] text-center font-[600] text-[22px]">
    //         Ecommerce Acceories & Fashion item{" "}
    //       </h1>
    //       <p className="text-[#8A8FB9] text-[12px] text-center lg:text-left font-lato">
    //         About 9,620 results (0.62 seconds)
    //       </p>
    //     </div>

    //     <div className="flex items-center  justify-center text-center flex-wrap gap-x-0 gap-y-8 sm:gap-x-0 sm:gap-y-0 sm:flex-nowrap sm:justify-start w-full sm:w-auto pt-8 lg:pt-0">
    //       <div className="flex items-center">
    //         <h2 className="font-lato text-[14px] sm:text-[16px] text-[#3F509E]">
    //           Per Page:
    //         </h2>
    //         <input
    //           type="text"
    //           className=" w-[55px] h-[18px] sm:h-[25px] border-[1px] ml-2 border-[#A4B6C8B2]"
    //         />
    //       </div>

    //       <div className="flex items-center">
    //         <h2 className="font-lato ml-6  text-[14px] sm:text-[16px] text-[#3F509E]">
    //           Sort By:
    //         </h2>
    //         <input
    //           type="text"
    //           placeholder="Best Match"
    //           className="placeholder:sm:text-[13px] placeholder:text-[10px] pb-1 placeholder:text-center w-[90px] sm:w-[96px] h-[25px] sm:h-[28px]  border-[1px] ml-2 border-[#A4B6C8B2]"
    //         />
    //       </div>

    //       <div className="flex items-center font-lato text-[#3F509E]">
    //         <div className="flex ml-6 items-center">
    //           <h2 className=" text-[14px] sm:text-[16px]">View:</h2>
    //           <Image
    //             src="/images/gridicon.svg"
    //             className="ml-1"
    //             alt="grid Icon"
    //             width={12}
    //             height={12}
    //           ></Image>
    //           <Image
    //             src="/images/listicon.svg"
    //             className="ml-1"
    //             alt="grid Icon"
    //             width={12}
    //             height={12}
    //           ></Image>
    //         </div>
    //         <input
    //           type="text"
    //           className="w-[140px] sm:w-[162px] h-[22px] sm:h-[30px] ml-4 border-[1px] border-[#A4B6C8B2]"
    //         />
    //       </div>
    //     </div>
    //   </div>

      // <div className="relative items-center flex flex-wrap justify-center gap-y-24 gap-x-[25px] sm:gap-x-[35px] lg:gap-x-[50px] min1:gap-x-[85px] h-auto mx-2 lg:mx-4 min1:mx-20 pt-20">
      //   {shopItems.map((items) => (
      //     <div key={items.id} className=" max-w2:w-[300px] max10:w-[350px] w-[249px] sm:w-[270px] h-[365px]  shrink-0 m-0 lg:m-2 cursor-pointer ">
      //       <div
      //         className={`w-full  h-[280px] bg-[#F6F7FB] hover:bg-[#EBF4F3] flex justify-center items-center scroll-smooth ${items.image} group`}
      //       >
      //         <Image
      //           className={`group-hover:scale-110 ease-in-out transition-all duration-300 ${
      //             items.id === "5" || items.id === "7" || items.id === "9"
      //               ? "w-[150px]"
      //               : "w-[200px]"
      //           }`}
      //           src={items.image}
      //           alt={items.alt}
      //           width={200}
      //           height={200}
      //         ></Image>
      //       </div>
      //       <div className="flex flex-col items-center ">
      //         <h1 className="mt-2 text-[#151875] text-[18px] font-josefin font-[700]">
      //           {items.name}
      //         </h1>
      //         <Image
      //           className="mt-2"
      //           src={items.image2}
      //           alt="scroller"
      //           width={30}
      //           height={30}
      //         ></Image>
      //         <div className="mt-1 flex items-center">
      //           <p className="text-[#1A0B5B] text-[15px] font-josefin font-[700]">
      //             {items.price}
      //           </p>
      //           <p className="text-[#FB2E86] line-through text-[12px]  font-[400] mb-2 mt-2 font-lato ">
      //             {items.originalPrice}
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
//       <Brands/>
//     </>
//   );
// };

// export default page;
