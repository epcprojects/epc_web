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
      {/* <div className="bg-black!">
        <div className="rounded-t-[50px]! overflow-hidden   bg-[#FAF7F6]!">
          <Partners />
        </div>
      </div> */}
      {/* <div className="bg-[#FAF7F6]!">
        <ServicesDesignAgency />
      </div> */}

      {/* <div className="bg-[#FAF7F6] pt-[96px]!">
        <About />
      </div> */}
      {/* <div className="bg-[#FAF7F6]!">
        <ParallaxBanner
          // bottomSpacerValue={64}
          // topSpacerValue={0}
          videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
        />
      </div> */}
      {/* <div className="bg-[#FAF7F6]!">
        <Services />
      </div> */}

      {/* <div className="bg-[#FAF7F6]!">
        <Facts />
      </div> */}
      {/* <div className="bg-[#FAF7F6]!">
        <Testimonials />
      </div> */}

      {/* <BottomNav /> */}

      {/* <div
        className="mxd-section overflow-hidden! scroll-mt-32 bg-[#FAF7F6]!"
        id="contactus"
      >
        <div className="container max-w-7xl mx-auto pb-[96px]!">
          <ContactForm />
        </div>
      </div> */}
      {/* <Footer2 /> */}
    </div>
  );
};

export default Page;
