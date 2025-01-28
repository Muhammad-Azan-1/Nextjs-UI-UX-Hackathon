'use client'
import useCart from "@/context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useToast } from "@/hooks/use-toast";


const CartIcon = ({ id, stock, name, price, image, colors }: { id: number, stock: number, name: string, price: number, image: string, colors: string[] }) => {
   const key = `${id}-${colors[0]}`
  const { setIncrement , cartItems } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    console.log("running handle function")
    setIncrement(stock, id, name, price, image, colors[0]);

    // console.log(cartItems)
    // console.log(cartItems[id])
    // console.log(cartItems[id]?.value, "outside the if statement")
    
    if(cartItems[key]?.value  == stock){
      console.log( "Cart value from each items inside if statement",cartItems[id]?.value)
    toast({
      description:`No items left in stock`,
      variant:'customDestructive'
    })
  }else{
    toast({
      description:`${name} added to cart successfully.`,
      variant:'custom'
    })
  }
  

  };

  return (
    <>

      <div
     onClick={() => handleAddToCart()}
        className="absolute flex items-center justify-center max-w2:left-[65px] left-[85px] max-w5:left-[45px] bottom-3 w-[30px] h-[30px] hover:bg-[#151875] bg-white rounded-[50%] group"
      >
        < AiOutlineShoppingCart size={18}   className="text-[#151875] group-hover:text-white" />
    
      </div>


    </>
  )
}

export default CartIcon