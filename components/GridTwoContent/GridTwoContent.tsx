import Image from "next/image"

const GridTwoContent = () => {
    return (
        <>

        <div className="w-full py-12 lg:py-0 bg-[#f5f5f5] font-lato px-2 sm:px-6 lg:px-8">

         <div className="h-auto w-auto flex items-center justify-between  pt-8">
        <div className="flex items">
        <div className="relative flex justify-center items-center w-[110px] ">
        <Image 
        src={'/images/Cantileverchair.svg'} 
        alt="image"
         width={100}
          height={200}>
        </Image>
        <div className="bg-[#666666] absolute top-[-4px] right-[-3px] font-[600] text-white w-[22px] h-[22px] rounded-[50%] flex justify-center items-center">1</div>
        </div>

        <div className="w-auto flex justify-center  flex-col pl-0 sm:pl-3 h-auto">
        <p>Cantilivere Chair</p>
        <p className="text-[#666666] text-[12px] ">Color : Pink</p>
        </div>
        </div>

       
        <p>Rs 300</p>
     </div>

     <div className="w-full justify-center flex gap-y-3 mt-3  font-lato flex-col">
    <div className="pl-4 flex text-[14px] font-[600]   justify-between w-full">
        <p>Subtotals</p>
        <p>Rs. 3000</p>
    </div>
    <div className="pl-4 flex text-[14px] font-[600]  justify-between w-full">
        <p>Shipping</p>
        <p>Rs. 3000</p>
    </div>
    <div className="pl-4 text-[19px] font-[700] flex  justify-between w-full">
        <p>Totals</p>
        <p>Rs. 3000</p>
    </div>
    </div>

     </div>
   
      
        </>
    )
}

export default GridTwoContent