import Image from "next/image";
import Hero from "./components/Hero";
import TopProducts from "./components/TopProducts";

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <TopProducts></TopProducts>
    </div>
  );
}
