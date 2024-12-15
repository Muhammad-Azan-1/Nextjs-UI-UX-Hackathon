import React from 'react'
import Image from 'next/image'
const Brands = () => {
  return (
   <>
   <div className="w-full flex justify-center items-center mt-[90px] px-1">
            <Image src='/images/brands.svg' alt="brand logo" className=" w-[900px] object-cover" width={900} height={100}></Image>
        </div>
   </>
  )
}

export default Brands