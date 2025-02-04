"use client"
import Image from "next/image"
import useWishlist from "@/context/WishListContext"
const WishListItemsDeleteBtn = ({id } :  {id:number}) => {

    const  {deleteItem} = useWishlist()
    return (
        <div>
              <Image
             src="/images/crosssicon.svg"
             onClick={() => deleteItem(id)}
             className="absolute top-[-2px] right-[-2px] cursor-pointer"
            alt="cross Icon"
             width={12}
            height={12}
             ></Image>
        </div>
    )
}

export default WishListItemsDeleteBtn