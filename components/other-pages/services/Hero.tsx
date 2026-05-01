import Image from "next/image";

import HeroSection from "@/components/HeroComponent/HeroSection";
export default function Hero() {
  return (
    <>
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
        <Image
          src="/img/services/hero-bg.svg"
          alt="hero bg"
          fill
          className="object-cover object-center min-h-[dvh] -z-10"
          priority
        />
        <div className="hidden lg:block">
          <Image
            src="/img/services/services-spring.png"
            alt="spring"
            width={176}
            height={176}
            className="absolute top-[50%] right-[100px] z-10  w-auto! h-auto! "
            priority
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/img/services/services-cube.png"
            alt="cube"
            width={146}
            height={146}
            className="absolute top-[20%] left-[2%] z-10  w-auto! h-auto! "
            priority
          />
        </div>

        <HeroSection
          subtitle=""
          innerPagesText={
            <span className="text-[42px]! md:text-[72px]! text-white text-center! leading-[44px]!  md:leading-[86px]! font-semibold">
              Design <span className="font-playfair text-white">Services</span>
              <br /> Built for Impact
            </span>
          }
          showSocialLinks={false}
          showTestimonial={false}
          simpleDescription="From UI/UX and web design to SaaS platforms and AI-powered products, we deliver end-to-end services that turn bold ideas into measurable business growth."
        />
      </div>
    </>
  );
}
