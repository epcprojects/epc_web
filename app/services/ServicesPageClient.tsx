"use client";

import Footer2 from "@/components/footers/Footer2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Hero from "@/components/other-pages/services/Hero";
import About from "@/components/homes/home-software-development-company/About";
import Facts from "@/components/homes/home-software-development-company/Facts";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ServiceCard from "@/components/ServiceCard";
import { PolygonIcon } from "@/public/icons";
import { servicescards } from "@/data/services/servicescards";
import { useIsMobile } from "@/hooks/useIsMobile";

const ServicesPageClient = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <Hero />
      <div className="lg:bg-black">
        <div className="lg:rounded-t-[50px]! rounded-t-[32px]! lg:mt-0! -mt-10!  bg-[white]">
          <div className="py-[32px]! md:pb-[96px]! md:pt-[64px]! container mx-auto max-w-7xl space-y-[40px]!">
            <div className="flex flex-col items-start gap-[20px]! px-4">
              <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
                <PolygonIcon />
                <p className="text-[#4939D2]! text-[18px]! font-medium!">
                  Our Services
                </p>
              </div>
              <p className="  text-[36px]! lg:text-[48px]! leading-[120%]! font-normal! text-gray-950">
                We turn bold ideas into
                <br />
                <span className=" font-playfair ! text-[#4939D2]!">
                  products that convert.
                </span>
              </p>
            </div>

            <div className="space-y-[48px]! md:space-y-[96px]!">
              {servicescards.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  features={service.features}
                  avatars={service.avatars}
                  buttonIcon={service.buttonIcon}
                  onClick={service.onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF7F6] pt-[64px]! md:pt-[96px]!">
        <About />
      </div>

      <ParallaxBanner
        bottomSpacerValue={isMobile ? 0 : 30}
        topSpacerValue={isMobile ? 0 : 30}
        className="bg-gradient-to-t from-white to-[#faf7f6]"
        videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
      />
      <Facts />
      <div className="bg-[#FAF7F6] pt-[96px]!">
        <Testimonials />
      </div>
      <div className="bg-[#FAF7F6]">
        <div className="container mx-auto max-w-7xl py-[64px]! md:py-[96px]!">
          <div className="w-full! relative md:flex-row flex-col gap-12 flex items-center md:overflow-visible! overflow-hidden justify-between bg-linear-to-b from-[#0568BF] to-[#070928]  rounded-[32px]  md:rounded-[50px]! md:py-[72px]! md:px-[60px]! px-[12px]! pt-[32px]!">
            <div className="space-y-[28px]! flex md:items-start items-center md:justify-start justify-center flex-col">
              <p className="  text-[32px]! md:text-[48px]! md:text-start! text-center leading-[120%]! font-semibold! text-white">
                Got a product idea? <br />
                <span className=" font-playfair ! text-white">
                  {" "}
                  Let&apos;s design it..
                </span>
              </p>

              <PrimaryButton
                label="Book a Call"
                onClick={() => {
                  console.log("start project clicked");
                }}
                className="bg-white! text-black!"
                fill="black"
              />
            </div>

            <img
              src="/img/backgrounds/ceo-mohsin.png"
              className="md:absolute w-auto! end-32 bottom-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default ServicesPageClient;
