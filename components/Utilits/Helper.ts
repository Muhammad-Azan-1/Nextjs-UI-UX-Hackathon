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
    

   