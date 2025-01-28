'use client'
import { ReactNode, useState , useMemo } from "react"
import { CartContext } from "./CartContext"
import { useEffect } from "react"

import { Quantity } from "@/components/Utilits/Helper"
import { useCallback } from "react"


// cartItems : {
//1:{  ,name , quantity , stock , image , price , value}
//}
  
// prev:{
//     [id]: { /* object properties */ }
//   }

const CartContextProvider = ({children} : {children:ReactNode}) => {
console.log("CartContextProvider render")
 


    // const [id , setId] = useState<number>(0)
    const [cartItems, setcartItems] = useState<Quantity>(() => {
        if(typeof window != 'undefined' && sessionStorage){
        const storedAmount = sessionStorage.getItem('amountInLocal');
         console.log('getting values from local tow persists', storedAmount)
        return storedAmount ? JSON.parse(storedAmount) : {}; // Default to {} if nothing is stored
        }
    });

    const [id , setId] = useState<number>(0)

    console.log("Cart value updated",cartItems)
     console.log(Object.keys(cartItems))

     
  
             useEffect(()=>{
              sessionStorage.setItem('amountInLocal',JSON.stringify(cartItems))
      
             },[cartItems])


    const  setDecrement = useCallback((id:number , color:string )=>{
        setcartItems((prev:Quantity)=>{
            console.log("running decrement function from cart context provider")
            const key = `${id}-${color}`;
            setId(id)
       
        const currentAmount : number = prev[key]?.value || 0
       const updatedObj = {
       ...prev,
        [key]:{ 
            ...prev[key],
            value:currentAmount > 0 ? currentAmount - 1 : 0
        }
       }

       if(updatedObj[key].value === 0){
        delete updatedObj[key]
       }
     

      return updatedObj
       
    }
    )
      
    } , [])

  


    const setIncrement = useCallback((stock:number , id:number , name:string , price:number , image:string , color:string ) =>{
        setcartItems((prev:Quantity)=>{
            setId(id)
            const key = `${id}-${color}` 
            
        const currentAmount : number = prev[key]?.value || 0
        console.log({...prev} , "prev all objects");
        console.log({...prev[key]} , "prev object of specific id")

        console.log(currentAmount , "on increment")

        if(currentAmount){
            const newAmount : number = currentAmount < stock ? currentAmount + 1 : stock
            console.log('if statment run')
            return{
                ...prev,
                [key]:{
                    ...prev[key],
                    value: newAmount,
                   

                }
            }
        } else{
            console.log("else run")
        return{
            ...prev,  
            [key]:{ 
                value:1,
                name:name,
                price:price,
                image:image,
                color:color,
                id:id,
                stock:stock
            } // for each id a new object created 1:{ name , price , image , id , stock , value  }
        }
    }
    });

        
    },[])


    function deleteItem(id:number , color:string){
        console.log("running")
        const key = `${id}-${color}` 
        setcartItems((prev:Quantity)=>{
            if(key){
            
            delete prev[key]
            }

            return{
                ...prev
            }


                
        })
    }

    const contextValue = useMemo(() => ({
        cartItems,
        setIncrement,
        setDecrement,
        setcartItems,
      }), [cartItems, setIncrement, setDecrement]);


    return (

        <CartContext.Provider value={{cartItems , setIncrement , setDecrement , setcartItems , id , deleteItem }}>
                    {children}
         </CartContext.Provider>
    )
}

export default CartContextProvider



