
import Image from "next/image";
import Pagesbar from "@/components/PageBar/PageBar";
import { Button } from "@/components/ui/button";
import ShopeOffer from "@/components/ShopeOffer/ShopeOffer";
import { clientsImages } from "@/Data/Data";
import Header from "@/components/Header/Header";

const page = () => {
  return (
    <>
      <Header/>
      <Pagesbar pageName="About Us"
        name1="Home"
        name2="Page"
        name3="About Us"/>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-6 min5:gap-x-8 mt-[90px] px-2 xl:px-0">
          <div className="relative w-[290px] h-[218px] min-w3:w-[410px] md:w-[400px] lg:w-[465px] min5:w-[560px] min-w3:h-[295px] lg:h-[335px] min5:h-[405px] bg-[#2B3CAB] rounded-[10px]">
            <Image
              src="/images/aboutus.svg"
              alt="about us"
              width={555}
              height={390}
              className=" h-[93%] w-[300px] md:h-auto min-w3:w-[390px] lg:w-[450px] min5:w-[555px] absolute   min-w3:right-0 left-3 min-w3:left-6 md:left-4 "
            ></Image>
          </div>
          <div className=" w-[95%] text-center md:text-left md:h-auto md:w-[50%] lg:w-[550px] mt-8 md:mt-0 ml-0 md:ml-3">
            <div className="h-[70%] mt-0 lg:mt-4">
              <h1 className="text-[#151875] max-w:text-[25px] text-[30px] md:text-[25px] min6:text-[29px] min3:text-[36px] font-josefin font-[600]">
                Know About Our Ecomerce Business, History
              </h1>
              <p className="text-[#8A8FB9] font-[600] mt-4 font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <Button
                variant="outline"
                size={"default"}
                className=" font-josefin"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8"><ShopeOffer heading="Our Features" /></div>


        <div className="bg-[#FBFBFF] h-[503px] w-full mt-[130px]">
          <div className="w-full text-center pt-14">
          <h1 className="text-[35px] md:text-[42px] text-[#151875] font-[700] font-josefin">Our Client Say!</h1>
          </div>

          <div className="w-full flex justify-center gap-x-3 mt-12">
            {clientsImages.map(({image,id,alt}) =>(
            <div key={id}>
            <Image src={image} alt={alt} width={55}  className={`rounded-[5px] ${id === '2' ? 'w-[65px] ' : 'w-[60px] mt-[12px]'} `} height={55}></Image>
            </div>
         )) }

          </div>

          <div className="w-full flex flex-col justify-center items-center mt-6">
          <h1 className="text-[#151875] text-[25px] font-[600] font-lato tracking-wide">Selina Gomez</h1>
          <h3 className="font-lato font-[600] text-[#8A8FB9] mt-1 text-[12px]">Ceo At Webecy Digital</h3>
          <p className="w-full px-4 md:px-0 md:w-[700px] mt-6 text-center font-[700] font-lato text-[#8A8FB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
          </p>
          <div className="w-full pb-4 h-5 flex justify-center mt-10">
        <Image
          src="/images/scroller.svg"
          alt="scroller"
          width={100}
          height={40}
        ></Image>
      </div>
         </div>
       

        </div>
      </div>
    
    </>
  );
};

export default page;


// <div className="flex justify-center items-center">
//          <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5
//           } }

//           // pagination={{ el: '.swiper-pagination', clickable: true }}
//           // navigation={{
//           //   nextEl: '.swiper-button-next',
//           //   prevEl: '.swiper-button-prev',
            
//           // }}
//           // modules={[EffectCoverflow, Pagination, Navigation]}
//           // className="swiper container "
//          >
//           { cilentsImages.map(({id,image , alt})=>(
//             <div key={id} className="flex justify-center w-[55px]">
//             <SwiperSlide>
//            <Image src={image} alt={alt} width={100} height={400} className="w-[55px]"></Image>
//             </SwiperSlide> 
//             </div> 
// ))} 
//          </Swiper>
          
//         </div>