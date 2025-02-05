import GridTwoContent from "../GridTwoContent/GridTwoContent"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const CheckOutAccordin = () => {
    return (
        <div className="">
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Order Summary </AccordionTrigger>
    <AccordionContent>
   <GridTwoContent/>
    </AccordionContent>
  </AccordionItem>
</Accordion>

        </div>
    )
}

export default CheckOutAccordin