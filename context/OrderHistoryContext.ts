import { createContext , useContext } from "react";
import { orderHistory } from "@/components/Utilits/Helper";


type context = {
  orderHistory:orderHistory[],
  getOrderHistory:(value:orderHistory)=>void,
}

 export const orderHistoryContext = createContext<context>({
    orderHistory:[],
    getOrderHistory:()=>{},
})



export default function useHistory(){
    return useContext(orderHistoryContext)
}