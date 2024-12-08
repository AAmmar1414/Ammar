import Hero from "@/components/Hero";
import IconRow from "@/components/iconrow";
import Navbar from "@/components/Navbar";
import FeaturedProductBar from "@/components/FeaturedProducts";
import Image from "next/image";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import ImageCard from "@/components/imagecard";
import NewImage from "@/components/Image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Hero/> 
      <IconRow/>
      <FeaturedProducts/>
      <ProductCard/>
      <ImageCard/>
      <Footer/>
      {/* <NewImage/> */}
      
    </div>
  );
}