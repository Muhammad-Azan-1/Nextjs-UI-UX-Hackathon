import { useContext , createContext } from "react";

type WihsListItems = 
{
    stock: number,
     id: number, 
     name: string, 
     image: string,  
     slug:string,
     color:string,
     price:number,
}

type wishlist = {

    addItem:(stock: number, id: number, name: string,  image: string, color: string , slug:string , price: number)=>void,
    deleteItem:(id:number )=>void,
    wishListItem : WihsListItems[],
}

export const wishListContext = createContext<wishlist>({
    addItem:()=>{},
    deleteItem:()=>{},
    wishListItem:[],
});



export default function useWishlist(){
    return useContext(wishListContext)
}