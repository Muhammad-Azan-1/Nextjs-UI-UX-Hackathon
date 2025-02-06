
import { createContext, useContext } from "react";
import { value } from "@/components/Utilits/Helper";


type context = {
    getOrder : (value:value) => void,
    order:value,
    consumerDetailsSaveOrderToHistory : () => void
}

export const orderConfirmationContext = createContext<context>({
    getOrder:(value:value)=>{},
    order:{},
    consumerDetailsSaveOrderToHistory:()=>{}
})



export default function useOrder() {
return useContext(orderConfirmationContext)
}