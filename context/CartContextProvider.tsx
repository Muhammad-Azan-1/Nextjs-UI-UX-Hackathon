'use client'
import { ReactNode, useState , useMemo } from "react"
import { CartContext } from "./CartContext"
import { useEffect } from "react"




const CartContextProvider = ({children} : {children:ReactNode}) => {
console.log("CartContextProvider render")
 

  
    const [quantity, setQuantity] = useState<{[key:number]:number}>(() => {
        if(typeof window != 'undefined' && sessionStorage){
        const storedAmount = sessionStorage.getItem('amountInLocal');
        // console.log('getting values from local tow persists', storedAmount)
        return storedAmount ? JSON.parse(storedAmount) : {}; // Default to {} if nothing is stored
        }
    });

    console.log(quantity)

     
  
             useEffect(()=>{
              sessionStorage.setItem('amountInLocal',JSON.stringify(quantity))
      
             },[quantity])


    function setDecrement(id:number ){
        setQuantity((prev)=>{
      
       const currentAmount : number = prev[id] || 0 
       
       return{
       ...prev,
        [id]: currentAmount > 0 ? currentAmount - 1 : 0
       }

        }
    )
      
    }


    function setIncrement(stock:number , id:number ){
        setQuantity((prev)=>{
          
        const currentAmount : number = prev[id] || 0
        console.log(currentAmount , "on increment")
        return{
            ...prev,
            [id]: currentAmount < stock ? currentAmount + 1 : stock
           
        }
        })

        
    }

    const contextValue = useMemo(() => {
        return { quantity, setIncrement, setDecrement, setQuantity };
      }, [quantity]);
    return (

        <CartContext.Provider value={{quantity , setIncrement , setDecrement , setQuantity}}>
                    {children}
         </CartContext.Provider>
    )
}

export default CartContextProvider



// FLOW


//jab component sab se phele run kry ga to state ke andr initally jo value hu ge wohe value amount main save hu jaye ge or UI per a jaye ge
// pher os ke bad agr increment wala function call huta hay to amount ki jo useState hay ose se value UI per show hu ge but in cass or sath
// he sath jb jb increment waly function ke call hune se amount change hu ge to tab tab useEffect bhe run kry ga or use Effect amount ki
// value ko session storage main save kry ga or jab user kese dosre page per navigate kry ga ya page refresh hu ga to amount ke andr 
//value session storage se bheji jaye ge

///When the state (quantity in this case) changes, React triggers a re-render of any component that consumes that state. 
// This is because React's state is directly linked to the component's rendered output. 
// So, whenever the state changes, React needs to update the UI to reflect the new state.

//
//even though only a single key inside the quantity object changes, 
// React considers the entire quantity object as "new" because a new reference is 
// created. 
// This triggers a re-render in all components consuming quantity




//// whyb re render the cart context provider on page re fresh or any change in components

// Since CartContextProvider is at the top of the component tree (wrapped around the children), it will re-render every time the children change, leading to re-renders in any components that consume the context (like Cart).

// Breakdown of What Happens:
// Layout Structure:

// In your layout component, the CartContextProvider is wrapping everything, including the children prop that changes with the navigation.
// Since CartContextProvider is a context provider and it’s re-rendered on changes to the children, this will trigger all child components inside the CartContextProvider to re-render (including the Cart component).
// Why Does This Happen?:

// React re-renders a component when any of its props or state changes. Even though the CartContextProvider might not directly change its state based on children, React still re-renders it because the children prop (the content) is changing when the page transitions.
// This is standard behavior for React, as any change in the parent (in this case, CartContextProvider wrapping the layout) triggers a re-render of its children.
