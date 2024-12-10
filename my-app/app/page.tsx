
import Image from "next/image";
import Hero from "./components/Hero";
import IconRow from "./components/IconRow";
import FeaturedProducts from "./components/FeaturedProduct";
import TopProducts from "./components/ProjectCard";
import ImageCard from "./components/ImageCard";

export default function Home() {
  return (
    <div >
      <Hero/>
      <IconRow/>
      <FeaturedProducts/>
      <TopProducts/>
      <ImageCard/>
    
      {/* <NewImage/> */}
      
    </div>
  );
}