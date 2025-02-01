'use client'
import useCart from "@/context/CartContext"
import ProductIncrementDecrement from "../ProductIncrementDecrement/ProductIncrementDecrement"
import { useToast } from "@/hooks/use-toast";
const ProductsAdder = ({ stock, Id, name, price, image, colors }: { stock: number, Id: number, name: string, price: number, image: string, colors: string }) => {

    const key =  `${Id}-${colors}`
    const { toast } = useToast()
    const { setIncrement , cartItems } = useCart()


    function handleAddItem(){
        setIncrement(stock, Id, name, price, image, colors)
        if (cartItems[key]?.value == stock) {
            console.log("Cart value from each items inside if statement", cartItems[Id]?.value)
            toast({
              description: `No items left in stock`,
              variant: 'customDestructive'
            })
          } else {
            toast({
              description: `${name} added to cart successfully.`,
              variant: 'custom'
            })
          }
    }

    return (
        <div className="flex   h-auto  pt-5">
            <ProductIncrementDecrement stock={stock} id={Id} name={name} price={price} image={image} colors={colors} />
            <button
                onClick={handleAddItem}
                className="ml-3 rounded-[3px] text-white  font-josefin w-full h-[50px] border-[1px]  border-[#151875]  bg-[#151875] px-4 py-1">ADD TO CART
            </button>
        </div>

    )
}

export default ProductsAdder