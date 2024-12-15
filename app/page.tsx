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

export default function Home() {
  return (
    <>
  <Header/>
    <Hero />
    <FeaturedProduct />
    <LatestProduct />
    <ShopeOffer />
    <Banner />
    <TrendingProducts />
    <DiscountItems />
    <TopCategories />
    <Banner2 />
    <Brands />
    <Blog />
    </>
  );
}



