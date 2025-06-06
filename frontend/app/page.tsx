import Image from "next/image";
import Hero from "../components/landing/Hero";
import { div } from "framer-motion/client";
import Carousel from "@/components/landing/Carousel";
import Providers from "../components/landing/providers"

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Providers />
    </>
  );
}
