import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import About from "@/components/homes/home-software-development-company/About";
import Hero from "@/components/homes/home-1/Hero";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Services from "@/components/homes/home-web-agency/EPCServices";
import Partners from "@/components/other-pages/Partners";
import ServicesDesignAgency from "@/components/homes/home-digital-agency/Services";
import Facts from "@/components/homes/home-software-development-company/Facts";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/homes/home-1/Testimonials";

const Page = () => {
  return (
    <div >
      {/* <MobileMenu /> */}

      <Hero />
      <Partners />
      <ServicesDesignAgency />
      <About />
      <ParallaxBanner />
      <Services />

      <Facts />
      <Testimonials />

      <BottomNav />

      <div className="mxd-section overflow-hidden! scroll-mt-32" id="contactus">
        <div className="mxd-container max-w-8xl! mx-auto ">
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Page;
