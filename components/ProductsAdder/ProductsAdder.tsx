
'use client'
import { FaMinus , FaPlus } from "react-icons/fa6"
import useCart from "@/context/CartContext"
import ProductIncrementDecrement from "../ProductIncrementDecrement/ProductIncrementDecrement"

const ProductsAdder = ({stock  , Id , name , price , image , colors}:{stock:number , Id:number , name:string , price : number , image:string , colors:string}) => {
    let {setIncrement , setDecrement , cartItems} = useCart()
    return (
        <div className="flex   h-auto  pt-5">
                <ProductIncrementDecrement stock={stock}  id={Id} name={name} price={price} image={image} colors={colors}/>
                   <button
                   onClick={()=>setIncrement(stock , Id , name , price , image , colors)}
                    className="ml-3 rounded-[3px] text-white  font-josefin w-full h-[50px] border-[1px]  border-[#151875]  bg-[#151875] px-4 py-1">ADD TO CART
                    </button>
                       </div>
       
    )
}

export default ProductsAdder