import Footer2 from "@/components/footers/Footer2";
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
    <div>
      <Hero />
      <div className="bg-black!">
        <div className="rounded-t-[50px]! overflow-hidden   bg-[white]!">
          <Partners />
        </div>
      </div>

      <ServicesDesignAgency />
      <div className="bg-[#FAF7F6] pt-[96px]!">
        <About />
      </div>

      <ParallaxBanner
        topSpacerValue={0}
        bottomSpacerValue={0}
        videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
      />

      <Services />

      <Facts />
      <Testimonials />

      <BottomNav />

      <div
        className="mxd-section overflow-hidden! scroll-mt-32 "
        id="contactus"
      >
        <div className="mxd-container max-w-8xl! mx-auto pb-[96px]!">
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Page;
