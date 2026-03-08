import Image from "next/image";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import FetaureProducts from "./Component/FetaureProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FetaureProducts/>
    </div>
  );
}
