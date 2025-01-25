'use client'
import { FaMinus , FaPlus } from "react-icons/fa6"
import useCart from "@/context/CartContext"
const Cart = ({ stock  , Id}:{stock:number , Id:number}) => {    

    let {setIncrement , setDecrement , quantity} = useCart()

 
    return (
         <div className="flex w-auto h-auto  pt-5">
         <div className="w-[95px] h-[50px] pt-[5px]  flex p-2 justify-between items-center rounded-[3px] border-[1px] border-[#dedede]">

         <button onClick={()=>setDecrement(Id)}>
             <FaMinus className="text-[#151875]" size={12}/>
             </button>

        <p className="text-[14px] text-[#151875] font-[700]">{quantity[Id] || 0}</p>

        <button  onClick={()=>setIncrement(stock , Id)}>
            <FaPlus className="text-[#151875]" size={12}/>
            </button>
            
            </div>
                </div>
    )
}

export default Cart