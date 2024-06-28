import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Blogs from "@/components/Blog/Blogs";

export default function Home() {
  return (
    <>
    <ScrollUp />
    <Hero />
    <Awards />
    <Features />
    <AboutSectionOne />
    <AboutSectionTwo />
    <Brands />
    <Blogs />
    <Contact />
  </>
  );
}
