/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Services from "@/components/other-pages/services/Services";
import ServiceCard from "@/components/ServiceCard";
import StackCards from "@/components/animation/StackCards";
import { PolygonIcon } from "@/public/icons";
import OfficeContactCard from "@/components/OfficeContactCard.tsx";
import ProcessStepCard from "@/components/ProcessStepCard";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const Page = () => {
  return (
    <div>
      <MobileMenu />

      <div className="bg-black py-24! bg-[url(/img/illustrations/industry.png)]  bg-no-repeat bg-center w-full">
        <div className="container mx-auto max-w-7xl relative overflow-hidden ">
          <div className="mb-[48px]!">
            <div className="flex flex-col items-center gap-4! md:gap-6! px-12!">
              <div className="py-[8px]! px-[20px]! border-b! bg-white/20 border-white! rounded-full flex flex-row items-center gap-[8px]!">
                <PolygonIcon fill="white" />
                <p className="text-white! text-[18px]! font-medium!">
                  Who we are
                </p>
              </div>

              <h2 className="text-[48px]! leading-[120%]! font-semibold! text-white">
                Design trusted across{" "}
                <span className=" font-playfair ! ">every industry.</span>
              </h2>

              <p className="text-gray-300! text-center font-normal text-[20px]!">
                Hire a design team that already understands your space.
                We&apos;ve 15 years of designing products across healthcare,
                fintech, SaaS, e-commerce, enterprise and 10+ more industries so
                you skip the ramp-up and start building faster, smarter, better.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4! md:gap-8! mb-[52px]!">
            <div className="md:col-span-2 ">
              <div className="flex gap-4 mb-4">
                <img
                  src="/img/services/SaaS1.jpg"
                  className="h-[256px]! object-cover rounded-3xl!"
                  alt=""
                />
                <img
                  src="/img/services/HealthcareApp.jpg"
                  className="h-[256px]! object-cover rounded-3xl!"
                  alt=""
                />
              </div>

              <img
                src="/img/services/EnterpriseWeb2.jpg"
                className="h-[408px]! object-cover rounded-3xl!"
                alt=""
              />
            </div>

            <img
              src="/img/services/FintechApp.jpg"
              className="h-full! object-cover rounded-3xl!"
              alt=""
            />
          </div>

          <PrimaryButton
            label="Book a Call"
            onClick={() => {
              console.log("start project clicked");
            }}
          />
        </div>
      </div>

      <div className="bg-white py-24! ">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6! md:gap-12! items-center">
            <div>
              <div className="flex flex-col items-start gap-[20px]! ">
                <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
                  <PolygonIcon />
                  <p className="text-[#4939D2]! text-[18px]! font-medium!">
                    Who we are
                  </p>
                </div>
                <p className="  text-[48px]! leading-[120%]! font-normal! text-gray-950">
                  Global design and development studio for
                  <br />
                  <span className=" font-playfair ! ">products that grow.</span>
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-[20px]!">
                  We&apos;re a global design and development studio crafting
                  products that turn ideas into measurable business growth,
                  shipping high-performing digital products across 15+
                  industries.
                </p>

                <PrimaryButton
                  label="Book a Call"
                  onClick={() => {
                    console.log("start project clicked");
                  }}
                />
              </div>
            </div>

            <div className="">
              <img
                src="img/illustrations/who_we_are.png"
                className="object-cover rounded-4xl!"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* <StackCards> */}

      {/* </StackCards> */}

      <Services />
      <ParallaxBanner videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4" />
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
