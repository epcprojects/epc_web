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
        <div className="rounded-t-[50px]  bg-[white]">
          <Facts />
        </div>
      </div>
      <div className="-mt-80!">
        <Partners />
      </div>
      <ParallaxBanner videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1775646599/d_dcnt5q.mp4" />
      <Testimonials />
      <BottomNav />
      <Footer2 />
    </div>
  );
};

export default Page;
