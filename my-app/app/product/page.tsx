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
import Indexx from "@/components/ProductGird";
import ProductGrid from "@/components/ProductGird";
import Instagram from "@/components/Istagram";

export default function Home() {
  return (
    <div >
      <ProductGrid/>
      <Instagram />
      <Footer/>
    </div>
  );
}
