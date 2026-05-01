import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://endpointclients.com/contact";
const ogImagePath = "/img/epc-og-image.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Us - Hire Senior UI UX, SaaS & AI Design Experts",
  description:
    "Get in touch with Endpoint Clients for UI UX, SaaS, web, mobile, and AI design services. 15 plus years of experience, 1200 plus projects delivered.",
  alternates: {
    canonical: "https://endpointclients.com/contact",
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
  return <ContactPageClient />;
};

export default Page;
