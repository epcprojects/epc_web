import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import About from "@/components/homes/home-software-development-company/About";
import Hero from "@/components/homes/home-1/Hero";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Services from "@/components/homes/home-web-agency/Services";
import React from "react";
import Partners from "@/components/other-pages/Partners";
import ServicesDesignAgency from "@/components/homes/home-digital-agency/Services";
import Facts from "@/components/homes/home-software-development-company/Facts";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";

const Page = () => {
  return (
    <div>
      <MobileMenu />
      <Hero />
      <Partners />
      {/* <MarqueeSlider2 /> */}
      <ParallaxBanner />
      <Services />
      <About />
      <ServicesDesignAgency />

      <Facts />

      <BottomNav />

      <Blogs />
      <Cta />
      <Footer2 />
    </div>
  );
};

export default Page;
