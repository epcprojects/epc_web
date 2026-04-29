
import Image from "next/image";

import HeroSection from "@/components/HeroComponent/HeroSection";
export default function Hero() {
  return (
    <>
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
        <Image
          src="/img/contactus-hero.svg"
          alt="hero bg"
          fill
          className="object-cover object-center min-h-[dvh] -z-10"
          priority
        />
        

        <HeroSection
        subtitle="Contact"
          firstLinePrefix="Have a"
          firstLineSuffix="tech"
          secondLinePrefix="or Just"
          secondLineHighlight="Want to Chat?"
          showSocialLinks={false}  
          showTestimonial={false}
          simpleDescription="We are Global Design Agency specializing in UI/UX, Web, Mobile App & SaaS Design. Crafting digital experiences across 15+ industries that drive real results."
        />

       
      </div>
    </>
  );
}
