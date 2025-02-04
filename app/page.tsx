
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import LatestProduct from "@/components/LatestProduct/LatestProduct";
import ShopeOffer from "@/components/ShopeOffer/ShopeOffer";
import Banner from "@/components/Banner/Banner";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import DiscountItems from "@/components/DiscountItems/DiscountItems";
import TopCategories from "@/components/TopCategories/TopCategories";
import Banner2 from "@/components/Banner2/Banner2";
import Brands from "@/components/Brands/Brands";
import Blog from "@/components/Blog/Blog";
import { client } from "@/sanity/lib/client";
import Footer from "@/components/Footer/Footer";

const Home = async () => {
  try {
    const query = `
  *[_type == 'product'] | order(id asc) {
 name , 
   id,
 price ,
   discountPrice,
  "slug": slug.current,
  "imageUrl": image.asset->url,
    discountPercentage,
   stockLevel,
 description,
   colors,
   dimensions,
     
}`;
    const response = await client.fetch(query);

    return (
      <>
        <Header />
        <Hero Product={response} />
        <FeaturedProduct Product={response} />
        <LatestProduct Product={response} />
        <ShopeOffer />
        <Banner Product={response} />
        <TrendingProducts Product={response} />
        <DiscountItems Product={response} />
        <TopCategories />
        <Banner2 />
        <Brands />
        <Blog />
        <Footer />
      </>
    );
  } catch (err) {
    console.log(err);
    return (
      <>
        <Header />
        <div className="w-full h-screen flex justify-center bg-black text-white font-lato items-center">
          <p className="text-center text-[16px font-[700] sm:text-[25px]">
            Network Error Fail to load the Products. Please try again later
          </p>
        </div>
        <Footer />
      </>
    );
  }
};

export default Home;
