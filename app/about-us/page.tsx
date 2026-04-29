import BottomNav from "@/components/BottomNav";
import Facts from "@/components/homes/home-software-development-company/Facts";
import Footer2 from "@/components/footers/Footer2";
import Hero2 from "@/components/other-pages/about/Hero2";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import React from "react";
import Partners from "@/components/other-pages/Partners";
import Testimonials from "@/components/homes/home-1/Testimonials";
const Page = () => {
  return (
    <div>
      {/* <MobileMenu />
     
      <Marquee />
      <ParallaxBanner />
      <Awards />
      <MarqueeSlider />
      <Team />
      <Facts />
      <Approch />
      <ParallaxBackround />
      <Blogs />
      <Cta /> */}
       <Hero2 />
       <div className="bg-black">
               <div className="rounded-t-[50px]   bg-[white]">
                   <Facts />
               </div>
             </div>
      <Partners />
      <ParallaxBanner />
      <Testimonials />
      <BottomNav />
      <Footer2 />
    </div>
  );
};

export default Page;
