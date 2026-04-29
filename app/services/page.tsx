import Footer2 from "@/components/footers/Footer2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Hero from "@/components/other-pages/services/Hero";
import About from "@/components/homes/home-software-development-company/About";
import Facts from "@/components/homes/home-software-development-company/Facts";
const Page = () => {
  return (
    <div>
      <Hero />
      <div className="bg-black">
        <div className="rounded-t-[50px]   bg-[white]">
          <About />
        </div>
      </div>

      <ParallaxBanner videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4" />
      <Facts />
      <Testimonials />
      <Footer2 />
    </div>
  );
};

export default Page;
