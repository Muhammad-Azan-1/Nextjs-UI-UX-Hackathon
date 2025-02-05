'use client'
import useCart from "@/context/CartContext"
import { useState } from "react"


const CheckoutBtn = ({paymentMethod} : {paymentMethod : string}) => {

    console.log(paymentMethod , "payment method")
    const {cartItems} = useCart()
   
    const [loading , setLoading] = useState(false)
   let Products = Object.values(cartItems)

    const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        setLoading(true)
        console.log('online method selected')
    try {
        const response = await fetch('api/checkout',{
        method:'POST',
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({Products})
        })

        const data = await response.json()
        if(data.url){
            window.location.href = data.url
        } else {
            alert('Payment failed')
        }
        
    } catch (error) {

        console.log("Checkout Error" , error)
        
    } finally{
        setLoading(false)
    }
      }


      function handleCod(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        console.log("COD selected")
        setLoading(true)
        if(typeof window !== 'undefined'){
        window.location.href = "/"
        setLoading(false)
        }
      }


    return (
      
        <div className=" w-full flex justify-center items-center lg:inline-block ">
           
              <button type="submit" onClick={(e)=> paymentMethod == 'cod' ? handleCod(e) : handleSubmit(e) } className="font-[700]  w-full mt-5 rounded-[4px] text-[18px] h-[50px] bg-black text-white flex justify-center items-center">
              { loading ? 'Procssing...' : 'Pay now'}
              </button>
          </div>
          
    )
}

export default CheckoutBtn