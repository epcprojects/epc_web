import Image from "next/image";

import HeroSection, { HeroButton } from "@/components/HeroComponent/HeroSection";
export default function Hero() {
  const defaultButtons:HeroButton[] = [
  {
    text: "Start Project",
    variant: "primary",
    href: "https://calendly.com/endpointclients/30min",
    target: "_blank",
  },
  {
    text: "Explore Our Work",
    variant: "secondary",
    href: "https://www.behance.net/endpointclients",
    target: "_blank",
  },
];

  return (
    <>
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center  mxd-hero-section min-h-dvh mxd-hero-fullheight">
        <Image
          src="/img/about-hero.svg"
          alt="hero bg"
          fill
          className="object-cover object-center min-h-[dvh]  -z-10"
          priority
        />
       <div className="flex flex-col gap-[64px]">
         <HeroSection
          subtitle="About Us"
          firstLinePrefix="Driven by"
          firstLineSuffix="driven"
          secondLinePrefix="and"
          secondLineHighlight="Innovation"
          showSocialLinks={false}
          showTestimonial={false}
          buttons={defaultButtons}
          simpleDescription="We are a creative digital agency specializing in innovative design and cutting-edge development. We help businesses stand out and thrive in the modern landscape."
        />
      </div>
         {/* <div className="hidden lg:block">
          <Image
            src="/img/about-hero-image.png"
            alt="spring"
            width={5130}
            height={400}
            className="absolute  left-0 right-0 z-10  w-auto! h-auto! "
            priority
          />
        </div> */}
       </div>

       
    </>
  );
}
