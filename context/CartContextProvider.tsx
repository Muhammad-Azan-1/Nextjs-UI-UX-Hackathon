'use client'
import { ReactNode, useState , useMemo } from "react"
import { CartContext } from "./CartContext"
import { useEffect } from "react"

type Quantity =  {    
    [key:number] : {
        name:string,
        stock:number,
        price:number,
        image:string,
        id:number,
        value:number,
        values:number,
        color?:string
    },
}



// cartItems : {
//1:{  ,name , quantity , stock , image , price , value}
//}
  
// prev:{
//     [id]: { /* object properties */ }
//   }

const CartContextProvider = ({children} : {children:ReactNode}) => {
console.log("CartContextProvider render")
 


    const [valueOfCard , setValue] = useState<number>(0)
    const [id , setId] = useState<number>(0)
    const [cartItems, setcartItems] = useState<Quantity>(() => {
        if(typeof window != 'undefined' && sessionStorage){
        const storedAmount = sessionStorage.getItem('amountInLocal');
        // console.log('getting values from local tow persists', storedAmount)
        return storedAmount ? JSON.parse(storedAmount) : {}; // Default to {} if nothing is stored
        }
    });

    console.log("Cart",cartItems)
    // console.log(Object.keys(cartItems))

     
  
             useEffect(()=>{
              sessionStorage.setItem('amountInLocal',JSON.stringify(cartItems))
      
             },[cartItems])


    function setDecrement(id:number){
        setcartItems((prev:Quantity)=>{
      
    const currentAmount : number = prev[id]?.value || 0
       
       return{
       ...prev,
        [id]:{ 
            ...prev[id],
            value:currentAmount > 0 ? currentAmount - 1 : 0
        }
       }

        }
    )
      
    }

  


    function setIncrement(stock:number , id:number , name:string , price:number , image:string , color?:string  , value?:number){
        setcartItems((prev:Quantity)=>{
        setId(id)
        const currentAmount : number = prev[id]?.value || 0
        console.log(value , 'value')
        if(value){
            setValue(value)
        }
        console.log(currentAmount , "on increment")
        return{
            ...prev,  // as a new id comes then the previous object will first spread here so that structure will be like { 1:{ name , price , image , id , stock , value  } , 2:{ name , price , image , id , stock , value  } }
            [id]:{ 
                ...prev[id],
                value:currentAmount < stock ? currentAmount + 1 : stock ,
                name:name,
                price:price,
                image:image,
                color:color
            } // for each id a new object created 1:{ name , price , image , id , stock , value  }
        }
    });

        
    }

    const contextValue = useMemo(() => ({
        cartItems,
        setIncrement,
        setDecrement,
        setcartItems,
      }), [cartItems, setIncrement, setDecrement]);
    return (

        <CartContext.Provider value={{cartItems , setIncrement , setDecrement , setcartItems , id}}>
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

///When the state (cartItems in this case) changes, React triggers a re-render of any component that consumes that state. 
// This is because React's state is directly linked to the component's rendered output. 
// So, whenever the state changes, React needs to update the UI to reflect the new state.

//
//even though only a single key inside the cartItems object changes, 
// React considers the entire cartItems object as "new" because a new reference is 
// created. 
// This triggers a re-render in all components consuming cartItems




//// whyb re render the cart context provider on page re fresh or any change in components

// Since CartContextProvider is at the top of the component tree (wrapped around the children), it will re-render every time the children change, leading to re-renders in any components that consume the context (like Cart).

// Breakdown of What Happens:
// Layout Structure:

// In your layout component, the CartContextProvider is wrapping everything, including the children prop that changes with the navigation.
// Since CartContextProvider is a context provider and it’s re-rendered on changes to the children, this will trigger all child components inside the CartContextProvider to re-render (including the Cart component).
// Why Does This Happen?:

// React re-renders a component when any of its props or state changes. Even though the CartContextProvider might not directly change its state based on children, React still re-renders it because the children prop (the content) is changing when the page transitions.
// This is standard behavior for React, as any change in the parent (in this case, CartContextProvider wrapping the layout) triggers a re-render of its children.
