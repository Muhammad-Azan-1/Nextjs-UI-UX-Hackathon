
import {createContext , useContext} from "react";


type Quantity = {
    [key:number] : {
        name:string,
        stock:number,
        price:number,
        image:string,
        id:number,
        value:number
    },
}

type Cart = {
    cartItems:Quantity,
    setIncrement: (stock:number , id:number , name:string , price:number , image:string , color?:string , value?:number) => void,
    setDecrement: (id:number) => void,
    setcartItems: (amount : Quantity) => void,
    
}

export const CartContext = createContext<Cart>({
    cartItems:{}, 
    setIncrement:()=>{},
     setDecrement:()=>{}, 
     setcartItems:({})=>{} 
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