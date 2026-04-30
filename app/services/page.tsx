"use client";
import Footer2 from "@/components/footers/Footer2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Hero from "@/components/other-pages/services/Hero";
import About from "@/components/homes/home-software-development-company/About";
import Facts from "@/components/homes/home-software-development-company/Facts";
import BottomNav from "@/components/BottomNav";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ServiceCard from "@/components/ServiceCard";
import { PolygonIcon } from "@/public/icons";
const Page = () => {
  return (
    <div>
      <Hero />
      <div className="bg-black">
        <div className="rounded-t-[50px]   bg-[white]">
          <div className="py-[64px]! md:py-[96px]! container mx-auto max-w-7xl space-y-[40px]!">
            <div className="flex flex-col items-start gap-[20px]! px-4">
              <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
                <PolygonIcon />
                <p className="text-[#4939D2]! text-[18px]! font-medium!">
                  Our Services
                </p>
              </div>
              <p className="  text-[48px]! leading-[120%]! font-normal! text-gray-950">
                We turn bold ideas into
                <br />
                <span className=" font-playfair ! text-[#4939D2]!">
                  products that convert.
                </span>
              </p>
            </div>

            <div className="space-y-[96px]!">
              <ServiceCard
                title="UI/UX & Product Design."
                description="We design intuitive, user-centered digital experiences that keep people engaged. From research and wireframes to high-fidelity prototypes, every interaction is crafted with purpose to solve real user problems and drive business results."
                image="/img/illustrations/uiux_bg.jpg"
                imageAlt="UI UX product design"
                features={[
                  { label: "Research-Driven Decisions" },
                  { label: "Scalable Systems" },
                  { label: "Strategic UX Thinking" },
                  { label: "Data-Informed Design" },
                  { label: "UI/UX Design" },
                  { label: "Usability Design" },
                ]}
                avatars={[
                  {
                    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    alt: "Client 1",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    alt: "Client 2",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
                    alt: "Client 3",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    alt: "Client 4",
                  },
                ]}
                buttonIcon="/img/illustrations/actBtn.png"
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
          <About />
        </div>
      </div>

      <ParallaxBanner videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4" />
      <Facts />
      <Testimonials />
      <div className="container mx-auto max-w-7xl py-[64px]! md:py-[96px]!">
        <div className="w-full! relative  flex items-center justify-between bg-linear-to-b from-[#0568BF] to-[#070928]   rounded-[50px]! py-[72px]! px-[60px]!">
          <div className="space-y-[28px]!">
            <p className="  text-[48px]! leading-[120%]! font-semibold! text-white">
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
            src={"/img/backgrounds/ceo-mohsin.png"}
            className="absolute w-auto! end-32 bottom-0"
          />
        </div>
      </div>
      <BottomNav />
      <Footer2 />
    </div>
  );
};

export default Page;
