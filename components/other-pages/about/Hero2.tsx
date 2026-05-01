import Image from "next/image";

import HeroSection, {
  HeroButton,
} from "@/components/HeroComponent/HeroSection";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import { aboutMarqueeImages } from "@/data/about/aboutmarqueeimages";
export default function Hero() {
  const defaultButtons: HeroButton[] = [
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
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center  mxd-hero-section min-h-dvh">
        <Image
          src="/img/about-hero.svg"
          alt="hero bg"
          fill
          className="object-cover object-center min-h-[dvh]  -z-10"
          priority
        />
        <div className="flex flex-col gap-[64px]">
          <HeroSection
            subtitle=""
            innerPagesText={
              <span className="lg:text-[72px]! text-[40px]! text-white text-center! lg:leading-[86px]! font-semibold">
                A{" "}
                <span className="font-playfair text-white">Design Studio</span>
                <br /> Built on Innovation
              </span>
            }
            showSocialLinks={false}
            showTestimonial={false}
            buttons={defaultButtons}
            simpleDescription="We started with a simple belief that great design has the power to change how people experience the world. Today, we're a global team helping brands across 15+ industries design products that truly matter."
          />
        </div>
        <div className="w-full overflow-hidden mt-[20px]! lg:mt-0!">
          <VelocityMarquee
            direction="left"
            duration={20}
            className="lg:overflow-visible lg:w-auto!  overflow-hidden!"
          >
            {aboutMarqueeImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mr-[30px]! lg:w-120! w-90! h-90! lg:h-120! z-10 "
                priority
              />
            ))}
          </VelocityMarquee>
        </div>
      </div>
    </>
  );
}
