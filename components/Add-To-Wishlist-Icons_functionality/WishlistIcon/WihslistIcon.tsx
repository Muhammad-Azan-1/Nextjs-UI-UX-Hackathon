"use client";
import { CiHeart } from "react-icons/ci";
import useWishlist from "@/context/WishListContext";
import { useToast } from "@/hooks/use-toast";

const HeartIcon = ({ stock,
  id,
  name,
  image,
  color,
  slug,
  price,
}: {
  stock: number;
  id: number;
  name: string;
  image: string;
  color: string;
  slug: string;
  price: number;
}) => {
  const { toast } = useToast();
  function handleWishlistItems() {
    addItem(stock, id, name, image, color, slug, price);
    toast({
      description: `${name} added to wishlist!`,
      variant: "custom",
    });
  }
  const { addItem } = useWishlist();
  return (
    <div
     data-testid="wishlist-icon"
      onClick={handleWishlistItems}
      className="absolute flex items-center justify-center max-w2:right-[65px]  right-[85px]  max-w5:right-[45px] bottom-3 w-[30px] h-[30px] hover:bg-[#151875] bg-white rounded-[50%] group "
    >
      <CiHeart size={20} className="text-[#151875] group-hover:text-white" />
    </div>
  );
};

export default HeartIcon;
