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
import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.endpointclients.com";
const ogImagePath = "/img/epc-og-image.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Endpoint Clients - Leading Global UI UX Design Agency",
  description:
    " Endpoint Clients is a global design agency crafting UI UX, web, mobile app, SaaS, branding, and AI products for ambitious brands across 15 plus industries.",
  // keywords: [
  //   "EndPoint Clients",
  //   "software development company",
  //   "web development",
  //   "mobile app development",
  //   "UI UX design",
  //   "digital solutions",
  // ],
  alternates: {
    canonical: "/",
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
      <div className="bg-black!">
        <div className="rounded-t-[50px]! overflow-hidden   bg-[#FAF7F6]!">
          <Partners />
        </div>
      </div>
      <div className="bg-[#FAF7F6]!">
        <ServicesDesignAgency />
      </div>

      <div className="bg-[#FAF7F6] pt-[96px]!">
        <About />
      </div>
      <div className="bg-[#FAF7F6]!">
        <ParallaxBanner
          // bottomSpacerValue={64}
          // topSpacerValue={0}
          videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
        />
      </div>
      <div className="bg-[#FAF7F6]!">
        <Services />
      </div>

      <div className="bg-[#FAF7F6]!">
        <Facts />
      </div>
      <div className="bg-[#FAF7F6]!">
        <Testimonials />
      </div>

      {/* <BottomNav /> */}

      <div
        className="mxd-section overflow-hidden! scroll-mt-32 bg-[#FAF7F6]!"
        id="contactus"
      >
        <div className="container max-w-7xl mx-auto pb-[96px]!">
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Page;
