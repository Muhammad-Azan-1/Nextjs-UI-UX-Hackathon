"use client"
import useCart from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const AddToCartBtnWishlist = ({stock , id , name , price , image , colors} : {stock:number , id :number , name :string , price:number , image:string , colors:string}) => {

const {setIncrement , cartItems} = useCart()
const {toast} = useToast()
const key = `${id}-${colors}`;
    const handleAddToCart = () => {
        console.log("running handle function");
        setIncrement(stock, id, name, price, image, colors);

        if (cartItems[key]?.value == stock) {
          console.log(
            "Cart value from each items inside if statement",
            cartItems[id]?.value
          );
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
        <div>
               <Button
                      onClick={handleAddToCart}
                      className="font-josefin max13:text-[12px] max13:w-[85px] w-[100px] "
                      size={"outline"}
                      variant={"outline"}
                    > Add To Cart
                    </Button>
        </div>
    )
}

export default AddToCartBtnWishlist