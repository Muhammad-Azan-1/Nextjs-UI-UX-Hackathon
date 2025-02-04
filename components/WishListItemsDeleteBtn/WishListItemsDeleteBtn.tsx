"use client"
import Image from "next/image"
import useCart from "@/context/CartContext"

const WishListItemsDeleteBtn = ({id , color} :  {id:number , color:string}) => {

    const  {deleteItem} = useCart()
    return (
        <div>
              <Image
             src="/images/crosssicon.svg"
             onClick={() => deleteItem(id,color)}
             className="absolute top-[-2px] right-[-2px] cursor-pointer"
            alt="cross Icon"
             width={12}
            height={12}
             ></Image>
        </div>
    )
}

export default WishListItemsDeleteBtn