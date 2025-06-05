import Image from "next/image";
import Hero from "../components/landing/Hero";
import { div } from "framer-motion/client";
import Landing from "../components/landing/Card-landing"
import Providers from "../components/landing/providers"

export default function Home() {
  return (
    <>
      <Hero />
      <Landing />
      <Providers />
    </>
  );
}
