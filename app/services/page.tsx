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
import { servicescards } from "@/data/services/servicescards";
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.endpointclients.com";
const ogImagePath = "/img/epc-og-image.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Trusted UI UX, SaaS and AI Design Services for Modern Brands",
  description:
    "Boost your business with expert UI UX, web, mobile app, SaaS, and AI design services.15 years of experience, 1200 plus projects delivered, top rated design agency.",
  // keywords: [
  //   "EndPoint Clients",
  //   "software development company",
  //   "web development",
  //   "mobile app development",
  //   "UI UX design",
  //   "digital solutions",
  // ],
  alternates: {
    canonical: "/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "EndPoint Clients",
    title: "Endpoint Clients - Global UI UX Design Agency ",
    description: "We craft digital products that Perform",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 800,
        alt: "EndPoint Clients digital services showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EndPoint Clients | Professional Digital Solutions",
    description:
      "EndPoint Clients builds modern websites, web apps, mobile apps, and UI/UX experiences that help businesses scale confidently.",
    images: [ogImagePath],
  },
};

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="bg-black">
        <div className="rounded-t-[50px]   bg-[white]">
          <div className="pt-[64px]! pb-[64px]! md:pb-[96px]! md:pt-[64px]! container mx-auto max-w-7xl space-y-[40px]!">
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
        className="bg-gradient-to-t from-white to-[#faf7f6]"
        // bottomSpacerValue={0}
        // topSpacerValue={0}
        videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
      />
      <Facts />
      <div className="bg-[#FAF7F6] pt-[96px]!">
        <Testimonials />
      </div>
      <div className="bg-[#FAF7F6]">
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
      </div>

      {/* <BottomNav /> */}
      <Footer2 />
    </div>
  );
};

export default Page;
