import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Hero from "@/components/other-pages/services/Hero";
import Services from "@/components/other-pages/services/Services";
import ServicesDesignAgency from "@/components/homes/home-digital-agency/Services";
import About from "@/components/homes/home-software-development-company/About";
import Facts from "@/components/homes/home-software-development-company/Facts";
const Page = () => {
  return (
    <div>
      {/* <MobileMenu /> */}
      <Hero />
      <div className="bg-black">
        <div className="rounded-t-[50px]   bg-[white]">
          <About />
        </div>
      </div>

      <ParallaxBanner />
      <Facts />
      <Testimonials />
      {/* 
     
      <ParallaxDivider />
      <Blogs />
      <Cta /> */}
      {/* <Services />
      <ParallaxBanner />
      <Testimonials /> */}

      <BottomNav />

      {/* <div className="mxd-section overflow-hidden! scroll-mt-32" id="contactus">
        <div className="mxd-container max-w-8xl! mx-auto ">
          <ContactForm />
        </div>
      </div> */}
      <Footer2 />
    </div>
  );
};

export default Page;
