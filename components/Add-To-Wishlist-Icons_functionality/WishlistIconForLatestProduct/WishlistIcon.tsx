'use client'
import { CiHeart } from "react-icons/ci";
import useWishlist from "@/context/WishListContext";
import { useToast } from "@/hooks/use-toast";

const WishlistIcon = ({stock, id, name , image , color , slug, price}:{stock: number, id: number, name: string, image: string, color: string , slug:string ,  price:number }) => {

    const {addItem} = useWishlist()
    const {toast} = useToast()

    function handleWishlistItems(){
        addItem(stock , id , name , image , color ,slug , price)
        toast({
         description: `${name} added to wishlist!`,
          variant: 'custom'
   
       })
 
     }
    return (
      
          <div onClick={handleWishlistItems} className="absolute bottom-6 left-2 flex flex-col items-center justify-center gap-3 cursor-pointer w-[30px] h-[30px] hover:text-white hover:bg-[#151875] bg-white rounded-[50%] ">
          <CiHeart size={18}/>
        </div>
    )
}

export default WishlistIcon