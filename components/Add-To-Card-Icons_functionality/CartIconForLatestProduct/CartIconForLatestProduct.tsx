"use client";
import useCart from "@/context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useToast } from "@/hooks/use-toast";

const CartIconForLatestProduct = ({
  id,
  stock,
  name,
  price,
  image,
  colors,
}: {
  id: number;
  stock: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}) => {
  const key = `${id}-${colors[0]}`;
  const { setIncrement, cartItems } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
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
    <>
      <div
        onClick={() => handleAddToCart()}
        className="absolute bottom-16 left-2 flex flex-col items-center justify-center gap-3 cursor-pointer w-[30px] h-[30px] hover:text-white hover:bg-[#151875] bg-white rounded-[50%] "
      >
        <AiOutlineShoppingCart size={18} />
      </div>
    </>
  );
};

export default CartIconForLatestProduct;
