'use client'
import useCart from "@/context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";



const CartIcon = ({id , stock}: {id:number , stock:number}) => {

  
    
    const {setIncrement} = useCart()
    
    const handleAddToCart = () => {
      
        setIncrement(stock, id);

        

      
      };

    return (
        <>
                 
        <div  
        className="absolute flex items-center justify-center max-w2:left-[65px] left-[85px] max-w5:left-[45px] bottom-3 w-[30px] h-[30px] hover:bg-[#151875] bg-white rounded-[50%] group"
        >
        < AiOutlineShoppingCart size={18}  onClick={()=> handleAddToCart()} className="text-[#151875] group-hover:text-white"/>
         </div>


          </>
    )
}

export default CartIcon