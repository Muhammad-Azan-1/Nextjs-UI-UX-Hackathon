'use client'


import { useState , useEffect } from "react"


const ProductColors = ({colors , id} :{colors : string[] , id:number}) => {

//   console.log(colors,id)

//console.log("product color component renders")

    let storageKey = `color-${id}`
    let [Selectedcolor , setColor] = useState<string>(colors[0])
    // console.log(Selectedcolor, "use state color")

    function changeColor(singleColor:string) {
        localStorage.setItem(storageKey, singleColor)
        setColor(singleColor)
        // console.log(singleColor,"FOR FUNCTION")

    }
   
       useEffect(()=>{
        let savedColor = localStorage.getItem(storageKey)
        if(savedColor){
            setColor(savedColor)
            // console.log('use Effect rund')
        }
        // console.log('use Effect rund')
       },[storageKey]) // this only runs when prop change and prop change when dynamic page re -renders and fetched data and pass data to this components as an prop
        
    
     
    return (
        <div className="pt-4">
        <p className="text-[#151875] pb-2"><span className="font-[600]">Color:</span> {Selectedcolor}</p>
        <div className="flex gap-x-2 ">
         {colors.map((colors:string , index:number)=>(
            <div key={index} className={`p-[2px] rounded-[50%]  ${Selectedcolor === colors ? 'border-[1px] border-[#151875]' : ''}`} >
            <button  onClick={()=> changeColor(colors)} style={{ backgroundColor: colors }} className={`w-[30px] p-1 h-[30px] rounded-[50%] border-[1px] `} ></button>
            </div>
        ))}
          </div>
        </div>
    )
}

export default ProductColors