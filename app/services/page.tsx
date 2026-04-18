import BottomNav from "@/components/BottomNav";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Hero from "@/components/other-pages/services/Hero";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import Services from "@/components/other-pages/services/Services";
import React from "react";

const Page = () => {
  return (
    <div>
      <MobileMenu />
      <Hero />
      <Services />
      <ParallaxDivider />
      <Blogs />
      <Cta />
      <BottomNav />
      <Footer2 />
    </div>
  );
};

export default Page;
