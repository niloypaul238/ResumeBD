import Image from "next/image";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import FetaureProducts from "./Component/FetaureProducts";
import Category from "./Component/Category";
import Work from "./Component/Work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category/>
      <FetaureProducts/>
      <Work/>
    </div>
  );
}
