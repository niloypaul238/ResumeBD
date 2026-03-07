import Image from "next/image";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
