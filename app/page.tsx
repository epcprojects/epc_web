
import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

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
    <HomePageClient/>
  );
};

export default Page;

