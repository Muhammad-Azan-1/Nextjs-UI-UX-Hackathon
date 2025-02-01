
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

// }

const Home = async () => {

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
     
}`
const response =  await client.fetch(query);


  return (
    <>
   <Header/> 
    <Hero Product={response}/>
    <FeaturedProduct Product={response}/>
    <LatestProduct Product={response } />
    <ShopeOffer />
    <Banner Product={response } />
    <TrendingProducts Product={response} />
    <DiscountItems Product={response} />
    <TopCategories  />
    <Banner2 />
    <Brands />
    <Blog />
    </>
  );
}

export default Home
