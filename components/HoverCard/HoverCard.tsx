import { BsQuestion } from "react-icons/bs"
import {HoverCard,HoverCardContent,HoverCardTrigger,} from "@/components/ui/hover-card"
const Hovercard = () => {
    return (
        <HoverCard>
            <HoverCardTrigger> 
        <div className=" w-5 h-5  right-3 flex justify-center items-center bottom-4 border-[#707070] border-[2px] rounded-[50%]">
        <BsQuestion className="cursor-pointer text-[20px]" color="#707070"/>
        </div>
        </HoverCardTrigger>
            <HoverCardContent>
        <p className="text-[14px] text-center">In case we need to contact you about your order</p>
        </HoverCardContent>
        </HoverCard>
    )
}

export default Hovercard