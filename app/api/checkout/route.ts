import product from "@/sanity/schemaTypes/product";
import { NextResponse } from "next/server";
import Stripe from 'stripe'



const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! , {
    apiVersion: "2025-01-27.acacia",
})



export  async function POST(req: Request) {

    try{
        const {Products} = await req.json()
        console.log(Products , 'received data')
       

        if(!Products || !Array.isArray(Products)){  //checking if have we products or not and also checking does products are in Array or not
                return NextResponse.json({
                    status:400,
                    erro:'Invaled Products Formate'
                })

    }else{

        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types:["card"],   //Defines the payment methods allowed in the checkout. // ["card"] allows credit/debit card payments.
            mode:"payment",                  // Defines the type of transaction. // "payment": A one-time payment. // "subscription": For recurring payments.
            line_items:Products.map((item)=>({ // Defines the items being purchased.
             price_data:{
                        currency:"pkr",
                        product_data:{
                            name:item.name,
                            images:[item.image]
                        },
                        unit_amount : Math.round(item.price * 100),// Convert PKR to Paisa (1PKR = 100 paisa)
                    },
                    quantity : item.value,
            })),
            success_url:`${process.env.NEXT_PUBLIC_BASE_URL}/orderConfirmation`,
            cancel_url:`${process.env.NEXT_PUBLIC_BASE_URL}/orderConfirmation`
        });


        return NextResponse.json({status:200 , url:checkoutSession.url}) // Sending the Stripe Checkout URL back to frontend

    }

}catch(errr){
    console.log('cannot procced stripe checkout data is not received' , errr)

    return NextResponse.json({
        status:400,
        error:'Internal server Error'
    })
}
    
}





// When you initialize Stripe like this:

// ts
// Copy
// Edit
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-01-27.acacia",
// });
// it connects your project to Stripe so that you can perform various operations such as:

// 🛒 Creating checkout sessions
// 💰 Processing payments
// 🔄 Managing subscriptions
// 📦 Handling refunds
// 📝 Saving customer details
// Yes, this is just like how Sanity uses an API token to connect with your project
// // for dynamic content, but here you're connecting with Stripe for dynamic payments! 🚀