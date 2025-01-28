'use client'
import { useEffect , useState } from "react"
import ProductsAdder from "../ProductsAdder/ProductsAdder"

const ProductDetailsCart = ({ stock  , Id , name , price , image , colors}:{stock:number , Id:number , name:string , price : number , image:string , colors:string[]}) => {    

   

        //working for porduct colors
         const storageKey = `color-${Id}`
        const [Selectedcolor , setColor] = useState<string>(colors[0])
 
        function changeColor(singleColor:string) {
            localStorage.setItem(storageKey, singleColor)
            setColor(singleColor)
            // console.log(singleColor,"FOR FUNCTION")
        }


       useEffect(()=>{
        let savedColor = localStorage.getItem(storageKey)
        if(savedColor){
            setColor(savedColor)
        }
       },[storageKey]) 

       // color logic ends here

     

       
      
    return (
        <>

           {/* // working for color logic */}

           <div>
              <div className=" pt-4">
        <p className="text-[#151875] pb-2"><span className="font-[600]">Color:</span> {Selectedcolor}</p>
        <div className="flex gap-x-2 ">
         {colors.map((colors:string , index:number)=>(
            <div key={index} className={`p-[2px] rounded-[50%]  ${Selectedcolor === colors ? 'border-[1px] border-[#151875]' : ''}`} >
            <button  onClick={()=> changeColor(colors)} style={{ backgroundColor: colors }} className={`w-[30px] p-1 h-[30px] rounded-[50%] border-[1px] `} ></button>
            </div>
        ))}
          </div>
        </div>
              </div>

                <ProductsAdder stock={stock} Id={Id} name={name} price={price} image={image} colors={Selectedcolor}/>
              
                </>
    )
}

export default ProductDetailsCart




