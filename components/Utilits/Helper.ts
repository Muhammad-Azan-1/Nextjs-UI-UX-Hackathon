

export type Products = {
name:string,
price:number,
discountPrice:number,
slug:string,
imageUrl:string,
discountPercentage:number,
stockLevel:number,
id:number
colors:string[]
}

export type Dimensions =  {
    depth:'number',
    width:'number',
    height:'number'
}
export type ProductsDetails = {
    name:string,
    price:number,
    discountPrice:number,
    slug:string,
    imageUrl:string,
    discountPercentage:number,
    stockLevel:number,
    id:number,
    colors:string[],
    dimensions:Dimensions,
    description:string
  
    }
    

   export type Quantity = {
        [key:string] : {
            name:string,
            stock:number,
            price:number,
            image:string,
            id:number,
            value:number,
            color:string,
        },
    }
    

    export type Product = 
        {
            stockLevel:number,
            id:number,
            name:string,
            price:number,
            image:string,
            colors:string[]
        }
    

     


export type value = {
    id?:number
    email?:string,
    country?:string,
    firstName?:string,
    lastName?:string,
    address?:string,
    city?:string,
    postalCode?:string,
    phoneNumber?:string,
    paymentMethod?:string,


}



export type orderHistory = {
   ProductsData? : Quantity,
    consumerData? : value

}
