import Link from "next/link"
const CartMessage = () => {
    return (
        <div className="flex flex-col justify-center items-center my-40">
            <h1 className="text-[64px] mb-3 font-[600] text-[#15245E]">Your Cart is Empty</h1>
            <p className="text-[#15245E] font-[500] text-[20px] mb-5">Ready to find your new favorite products?</p>
            <Link href="/" className="ml-3 text-[16px] rounded-[3px] text-white  font-josefin w-[250px] flex justify-center items-center uppercase h-[50px] border-[1px] tracking-wide  border-[#151875]  bg-[#151875] px-4 py-1">Continue Shopping
            </Link>
        </div>
    )
}

export default CartMessage

