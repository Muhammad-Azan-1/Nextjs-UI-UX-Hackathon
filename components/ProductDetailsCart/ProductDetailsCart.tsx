'use client'
import { FaMinus , FaPlus } from "react-icons/fa6"
import useCart from "@/context/CartContext"
import { useEffect , useState } from "react"


const Cart = ({ stock  , Id , name , price , image , colors}:{stock:number , Id:number , name:string , price : number , image:string , colors:string[]}) => {    

    let {setIncrement , setDecrement , cartItems} = useCart()
    let [value , setValue] = useState(0)




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



              {/* // working for add to cart logic */}
         <div className="flex   h-auto  pt-5">
         <div className="w-[95px] h-[50px] pt-[5px]  flex p-2 justify-between items-center rounded-[3px] border-[1px] border-[#dedede]">

         <button onClick={()=>setDecrement(Id)}>
             <FaMinus className="text-[#151875]" size={12}/>
             </button>

             <p className="text-[14px] text-[#151875] font-[700]">{cartItems[Id]?.value || 0}</p>
             <button  onClick={()=>setIncrement(stock , Id , name , price , image , Selectedcolor)}>
            <FaPlus className="text-[#151875]" size={12}/>
            </button>
            

            </div>
            <button
            
             className="ml-3 rounded-[3px] text-white  font-josefin w-full h-[50px] border-[1px]  border-[#151875]  bg-[#151875] px-4 py-1">ADD TO CART
             </button>
                </div>

              
                </>
    )
}

export default Cart




{/* <div className="flex flex-col">
<Cart stock={items.stockLevel} Id={items.id} name={items.name} price={items.price} image={items.imageUrl} colors={items.colors} />
<button className=" ml-3 rounded-[3px] text-white  font-josefin w-full h-[50px] border-[1px]  border-[#151875]  bg-[#151875] px-4 py-1">ADD TO CART</button>
</div>
<div className="flex flex-col  w-full items-baseline">
<div className="w-full">
 
{/* <button className=" ml-3 rounded-[3px] text-white  font-josefin w-full h-[50px] border-[1px]  border-[#151875]  bg-[#151875] px-4 py-1">ADD TO CART</button> */}

// </div>
// </div> */}