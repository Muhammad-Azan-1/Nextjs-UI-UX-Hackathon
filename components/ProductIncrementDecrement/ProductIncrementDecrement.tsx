import { FaMinus, FaPlus } from "react-icons/fa6";
import useCart from "@/context/CartContext";
const ProductIncrementDecrement = ({
  stock,
  id,
  name,
  price,
  image,
  colors,
  num,
}: {
  stock: number;
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string;
  num?: number;
}) => {
  const { setIncrement, setDecrement, cartItems } = useCart();
  const key = `${id}-${colors}`;
  return (
    <div
      className={` ${num ? "w-[70px] max13:w-[60px] max13:p-1  flex p-2 justify-between items-center rounded-[3px] border-[1px] border-[#dedede]" : " w-[95px] h-[50px] pt-[5px]  flex p-2 justify-between items-center rounded-[3px] border-[1px] border-[#dedede]"}`}
    >
      <button onClick={() => setDecrement(id, colors)}>
        <FaMinus aria-label="Decrement" className="text-[#151875]" size={12} />
      </button>

      <p className="text-[14px] max13:text-[12px] text-[#151875] font-[700]">
        {cartItems[key]?.value || 0}
      </p>
      <button
        onClick={() => setIncrement(stock, id, name, price, image, colors)}
      >
        <FaPlus aria-label="Increment" className="text-[#151875]" size={12} />
      </button>
    </div>
  );
};

export default ProductIncrementDecrement;
