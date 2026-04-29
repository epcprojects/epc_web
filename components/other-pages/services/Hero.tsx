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
          subtitle="Services"
          firstLinePrefix="New"
          firstLineSuffix="tech"
          secondLinePrefix="in Digital"
          secondLineHighlight="Excellence"
          showSocialLinks={false}
          showTestimonial={false}
          simpleDescription="We are Global Design Agency specializing in UI/UX, Web, Mobile App & SaaS Design. Crafting digital experiences across 15+ industries that drive real results."
        />
      </div>
    </>
  );
}
