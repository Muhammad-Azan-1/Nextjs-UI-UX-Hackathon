'use client'
import { useEffect, useState } from "react"
import { orderHistoryContext  } from "./OrderHistoryContext"

import { orderHistory } from "@/components/Utilits/Helper"

const OrderHistoryContextProvider = () => {
    const [orderHistory ,setOrderHistory]  = useState<orderHistory[]>([])
    console.log(orderHistory , "get order history successfully")
    useEffect(()=>{
        if(typeof window != 'undefined'  && orderHistory.length > 0){
          let storedVal = localStorage.getItem('orderHistory')
          if(storedVal){
           setOrderHistory(JSON.parse(storedVal))
          }
        }
    },[])

    useEffect(()=>{
        if(typeof window != 'undefined'  && orderHistory.length > 0){
            localStorage.setItem('orderHistory' , JSON.stringify(orderHistory))
        }
    },[orderHistory])


    function getOrderHistory(val:orderHistory){
        console.log(val, "get order history successfully")
      setOrderHistory((prev)=>{
            return[
                ...prev,
                {
                    ...val
                }
            ]
      })
    }

    return (

        <orderHistoryContext.Provider value={{orderHistory , getOrderHistory}}>
            
        </orderHistoryContext.Provider>
    )
}

export default OrderHistoryContextProvider