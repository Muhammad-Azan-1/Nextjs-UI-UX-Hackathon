
import {createContext , useContext} from "react";


type Quantity = {
    [key:number] : number,
}

type Cart = {
    quantity:Quantity,
    setIncrement: (stock:number , id:number) => void,
    setDecrement: (id:number) => void,
    setQuantity: (amount : Quantity) => void,
    
}

export const CartContext = createContext<Cart>({
    quantity:{}, 
    setIncrement:(stock:number , id:number)=>{},
     setDecrement:(id:number)=>{}, 
     setQuantity:({})=>{} 
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