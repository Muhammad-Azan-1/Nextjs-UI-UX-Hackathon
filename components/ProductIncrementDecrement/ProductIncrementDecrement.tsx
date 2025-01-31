
import { FaMinus, FaPlus } from "react-icons/fa6"
import useCart from "@/context/CartContext"
const ProductIncrementDecrement = ({ stock, id, name, price, image, colors }: { stock: number, id: number, name: string, price: number, image: string, colors: string }) => {

    const { setIncrement, setDecrement, cartItems } = useCart()
    const key = `${id}-${colors}`
    return (
        <div className="w-[95px] h-[50px] pt-[5px]  flex p-2 justify-between items-center rounded-[3px] border-[1px] border-[#dedede]">

            <button onClick={() => setDecrement(id, colors)}>
                <FaMinus className="text-[#151875]" size={12} />
            </button>

            <p className="text-[14px] text-[#151875] font-[700]">{cartItems[key]?.value || 0}</p>
            <button onClick={() => setIncrement(stock, id, name, price, image, colors)}>
                <FaPlus className="text-[#151875]" size={12} />
            </button>


        </div>
    )
}

export default ProductIncrementDecrement