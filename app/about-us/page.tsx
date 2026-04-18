import BottomNav from "@/components/BottomNav";
import Approch from "@/components/common/Approch";
import Awards from "@/components/common/Awards";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Facts from "@/components/common/Facts";
import MarqueeSlider from "@/components/common/MarqueeSlider";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Marquee from "@/components/homes/home-1/Marquee";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Hero2 from "@/components/other-pages/about/Hero2";
import ParallaxBackround from "@/components/other-pages/about/ParallaxBackround";
import Team from "@/components/other-pages/about/Team";
import React from "react";

const Page = () => {
  return (
    <div>
      <MobileMenu />
      <Hero2 />
      <Marquee />
      <ParallaxBanner />
      <Awards />
      <MarqueeSlider />
      <Team />
      <Facts />
      <Approch />
      <ParallaxBackround />
      <Blogs />
      <Cta />
      <BottomNav />
      <Footer2 />
    </div>
  );
};

export default Page;
