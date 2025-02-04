
import PageBar from "@/components/PageBar/PageBar";
import Brands from "@/components/Brands/Brands";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import { client } from "@/sanity/lib/client";
import { Products } from "@/components/Utilits/Helper";
import Footer from "@/components/Footer/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - Hekhto Sofas - chairs',
  description: 'Browse through our exclusive collection of premium sofas at Hekhto. Find the perfect sofa for your home.',
  keywords: 'Sofas, Furniture, Home Decor, Shop, Premium Sofas, E-commerce',
};

export const revalidate = 10

const page = async () => {

 try{

  const query1 = `
  *[_type == 'product'] | order(id asc) {
    name, 
    id,
     stockLevel,
    price,
   "slug": slug.current,
    discountPrice,
    "imageUrl": image.asset->url,
    discountPercentage,
    stockLevel,
    colors
  }
`;
  const DataFetched: Products[] = await client.fetch(query1);


  return (
    <>
      <Header />
      <PageBar pageName="Shop"
        name1="Home"
        name2="Page"
        name3="Shop" />
      <ProductList DataFetched={DataFetched} />
      <Brands />
      <Footer/>

    </>
  )
}catch(err){
  console.log(err)
  return(
  <>
 <Header/>
 <div className="w-full h-screen flex justify-center bg-black text-white font-lato items-center">
  <p className="text-center text-[16px font-[700] sm:text-[25px]">Network Error Fail to load the Products. Please try again later</p>
  </div>
  <Footer/>
  </>
  )
}
}

export default page;
