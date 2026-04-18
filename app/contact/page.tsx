import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Hero from "@/components/homes/home-1/Hero";

const Page = () => {
  return (
    <>
      <MobileMenu />
      {/* <Hero /> */}
      <>
        <div className="mxd-section loading-wrap relative flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
          <div className="mxd-container max-w-8xl! mx-auto mxd-hero-01">
            <ContactForm />
          </div>
        </div>
      </>

      <Footer2 />
      <BottomNav />
    </>
  );
};

export default Page;
