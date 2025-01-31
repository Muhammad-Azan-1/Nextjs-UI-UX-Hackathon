'use client'
import { Button } from "@/components/ui/button";
import useCart from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface IncrementButtonProps {
  stock: number;
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}


const HomeIncrementButton = ({ stock, id, name, price, image, colors }: IncrementButtonProps) => {


  const key = `${id}-${colors ? colors[0] : ''}`
  const { setIncrement, cartItems } = useCart()
  const { toast } = useToast()


  const handleSubmit = () => {
    setIncrement(stock, id, name, price, image, colors[0])
    if (cartItems[key]?.value == stock) {

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
    <div>
      <Button
        variant="outline"
        size={"default"}
        className=" font-josefin"
        onClick={handleSubmit}
      >
        Add to Card
      </Button>
    </div>
  )
}

export default HomeIncrementButton