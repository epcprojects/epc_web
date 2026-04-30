import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Hero from "@/components/other-pages/contact/Hero";
import Facts from "@/components/homes/home-software-development-company/Facts";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import About from "@/components/homes/home-software-development-company/About";
import { PolygonIcon } from "@/public/icons";
import OfficeContactCard from "@/components/OfficeContactCard.tsx";
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
      <About />
      <ParallaxBanner
        bottomSpacerValue={0}
        videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1775646599/d_dcnt5q.mp4"
      />
      <div className="bg-[#FAF7F6] relative flex items-start justify-center flex-col py-[64px]! md:py-[96px]!">
        <img
          src="/img/services/services-cube.png"
          className="w-auto! -left-1/12 absolute"
          alt=""
        />

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10!">
          <div className="flex flex-col items-start gap-[20px]! pb-[48px]!">
            <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[18px]! font-medium!">
                Industry Expertise
              </p>
            </div>
            <p className="  text-[48px]! leading-[120%]! font-normal! text-gray-950">
              One Office
              <br />
              <span className=" font-playfair ! ">Global Reach</span>
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-4! md:gap-8!">
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
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
