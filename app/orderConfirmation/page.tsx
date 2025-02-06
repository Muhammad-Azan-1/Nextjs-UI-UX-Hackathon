

import GridTwoContent from "@/components/GridTwoContent/GridTwoContent";
import HeaderTopBar from "@/components/HeaderTopBar/HeaderTopBar";
import OrderConfirmationContent from "@/components/OrderConfirmationContent/OrderConfirmationContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you for you Order",
  description:
    "Thank you for shoppingn to Hekhto to access your personalized shopping experience and explore our premium sofa collections please login and stay connceted.",
};
export default function Success() {

    return (
      <>
      <HeaderTopBar/>
      <div className="grid  font-lato pt-[44px] grid-cols-1 lg:grid-cols-[minmax(0,65%)_45%]">

        {/* gridbox2 */}
       <OrderConfirmationContent/>


          {/* gridbox2 */}
          <div className="bg-[#f5f5f5] border-l-[1.4px] pt-8 hidden lg:inline-block relative">
          <div
        className="lg:sticky lg:top-[75px] h-screen "
       id="summaryContainer"
       >
    
         <GridTwoContent />
     </div>
        </div>
      </div>
      </>
    );
  }

