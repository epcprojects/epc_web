import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Hero from "@/components/other-pages/contact/Hero";
import Facts from "@/components/homes/home-software-development-company/Facts";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
const Page = () => {
  return (
    <>
      {/* <MobileMenu /> */}
      <Hero />
      <div className="bg-black">
        <div className="rounded-t-[50px]   bg-[white]">
          <div className="mxd-section loading-wrap relative flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
            <div className="mxd-container max-w-8xl! mx-auto mxd-hero-01">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Facts />
      {/* <ParallaxBanner /> */}
      {/* <>
        <div className="mxd-section loading-wrap relative flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
          <div className="mxd-container max-w-8xl! mx-auto mxd-hero-01">
            <ContactForm />
          </div>
        </div>
      </> */}
      <BottomNav />

      <Footer2 />
    </>
  );
};

export default Page;
