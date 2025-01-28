
import {createContext , useContext} from "react";
import {Quantity} from '@/components/Utilits/Helper'


type Cart = {
    cartItems:Quantity,
    setIncrement: (stock:number , id:number , name:string , price:number , image:string , color:string ) => void,
    setDecrement: (id:number , color:string) => void,
    setcartItems: (amount : Quantity) => void,
    deleteItem:(id:number , color:string)=>void,
    id:number
 
    
}

export const CartContext = createContext<Cart>({
    cartItems:{}, 
    setIncrement:()=>{},
     setDecrement:()=>{}, 
        deleteItem:()=>{}, 
     setcartItems:({})=>{},
    
     id:0
    
     }  
    )



    const useCart = () => {
        const context = useContext(CartContext);
        if (context === undefined) {
            throw new Error('useCart must be used within a CartContextProvider');
        }
        return context;
    };
    
    export default useCart;