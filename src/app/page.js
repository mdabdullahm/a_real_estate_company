import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import LatestBlog from "@/components/home/LatestBlog";
import LiveRates from "@/components/home/LiveRates";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Partners/>
      <LiveRates/>
      <HowItWorks/>
      <WhyChooseUs/>
      <LatestBlog/>
      <Testimonials/>
    </main>
  );
}
