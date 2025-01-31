'use client'
import React from 'react'
import {wishListContext} from './WishListContext'
import { useEffect , useState } from "react"


 type WihsList = 
    {
        stock: number,
         id: number, 
         name: string, 
         image: string,  
         slug:string,
         color:string
         price:number
    }


const WishlistContextProvider = ({children} : {children:React.ReactNode}) => {

    const [wishListItem , setwishListItem] = useState<WihsList[]>(()=>{
        if (typeof window != 'undefined' && sessionStorage) {
        const WihsListItems = sessionStorage.getItem('wishlists')
       return  WihsListItems ? JSON.parse( WihsListItems) : []
        }
    })



    useEffect(()=>{
      
        sessionStorage.setItem('wishlists',JSON.stringify(wishListItem))

    },[wishListItem])


function addItem(stock: number, id: number, name: string, image: string, color: string , slug:string , price:number){
        
   // If some() returns true, then we return prev, which means the state remains unchanged.
   
  setwishListItem((prev: WihsList[])=>{
    const exsit = prev.some((items)=>{
        return items.id == id
    })

    if(exsit){
        return prev
    }
    
    return[...prev , {id:id , name:name , stock:stock , image:image , color:color , slug:slug , price:price}]
    

  })

       
    
}

function deleteItem(id:number){

    setwishListItem((prev:WihsList[])=>{
       
      const item = prev.findIndex((item)=>{
        return item.id == id
      })

     // The filter() method in JavaScript is used to create a new array containing only the elements that pass a specified test
      const filteredArray = prev.filter((item)=>{
         return   item.id !== id
      })

  

       return[
       ... filteredArray
       ]

            
    })
}

    return (
        <wishListContext.Provider value={{ addItem , deleteItem , wishListItem}}>
                {children}
        </wishListContext.Provider>
    )
}

export default WishlistContextProvider