"use client";

import useCart from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon2 = ({
  stock,
  id,
  name,
  price,
  image,
  colors,
}: {
  stock: number;
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}) => {
  const key = `${id}-${colors ? colors[0] : ""}`;
  const { setIncrement, cartItems } = useCart();
  const { toast } = useToast();

  const handleSubmit = () => {
    setIncrement(stock, id, name, price, image, colors[0]);
    if (cartItems[key]?.value == stock) {
      toast({
        description: `No items left in stock`,
        variant: "customDestructive",
      });
    } else {
      toast({
        description: `${name} added to cart successfully.`,
        variant: "custom",
      });
    }
  };

  return (
    <div
      onClick={() => handleSubmit()}
      className="absolute  justify-center items-center  top-2 left-10 flex object-cover w-[25px] h-[25px] hover:bg-[#151875] bg-white rounded-[50%] group"
    >
      <AiOutlineShoppingCart
        size={16}
        className="text-[#151875] group-hover:text-white"
      />
    </div>
  );
};

export default CartIcon2;
