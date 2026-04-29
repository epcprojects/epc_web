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
            subtitle="About Us"
            innerPagesText={
              <span className="text-[72px]! text-white text-center! leading-[86px]! font-semibold">
                A{" "}
                <span className="font-playfair text-white">Design Studio</span>
                <br /> Built on Innovation
              </span>
            }
            showSocialLinks={false}
            showTestimonial={false}
            buttons={defaultButtons}
            simpleDescription="We are a creative digital agency specializing in innovative design and cutting-edge development. We help businesses stand out and thrive in the modern landscape."
          />
        </div>
        <div>
          <VelocityMarquee direction="left" className="overflow-visible ">
            {aboutMarqueeImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mr-[30px]! z-10 w-auto! h-auto!"
                priority
              />
            ))}
          </VelocityMarquee>
        </div>
      </div>
    </>
  );
}
