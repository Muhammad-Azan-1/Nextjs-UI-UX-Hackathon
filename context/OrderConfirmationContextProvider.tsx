'use client'
import { useEffect, useState , useCallback } from 'react'
import {orderConfirmationContext} from './OrderConfirmationContext'

import { value } from "@/components/Utilits/Helper";
import useHistory from "./OrderHistoryContext";

const OrderConfirmationContextProvider = ({children} : {children: React.ReactNode}) => {

    const [order , setOrder] = useState<value>({})
    const {getOrderHistory} = useHistory()
    console.log(order , "order from context")

        useEffect(()=>{
            if(typeof window !== 'undefined'){
                let storedInfo = sessionStorage.getItem('Info')
                console.log(storedInfo , "storedInfo")
                if(storedInfo){
                    setOrder(JSON.parse(storedInfo))
                }
            }
        },[])


    useEffect(()=>{
        if(typeof window != 'undefined' && Object.values(order).length > 0){
            sessionStorage.setItem('Info' , JSON.stringify(order))
        }
    },[order])


    function getOrder( value:value)
     {
  setOrder((prev:value)=>{
    return{ 
        id: prev.id || (Math.floor(Math.random()*10000000)),
        email: value.email,
        country:"Pakistan" ,
        firstName: value.firstName,
        lastName: value.lastName,
        address: value.address,
        city: value.city,
        postalCode: value.postalCode,
        phoneNumber: value.phoneNumber,
        paymentMethod: value.paymentMethod
    }
  })  
    }

 


      const consumerDetailsSaveOrderToHistory = useCallback(()=>{
        if(typeof window != 'undefined' && Object.values(order).length > 0){
            getOrderHistory({
                consumerData:order
            })
            console.log("Value is set to order history")
            setOrder({})
            sessionStorage.removeItem("Info");
        }
    
      },[order])


    return (
        <orderConfirmationContext.Provider value={{getOrder , order ,consumerDetailsSaveOrderToHistory}}>
                {children}
        </orderConfirmationContext.Provider>
    )
}

export default OrderConfirmationContextProvider






