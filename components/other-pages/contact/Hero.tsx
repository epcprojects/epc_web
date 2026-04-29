
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
          innerPagesText = {
            <span className="text-[72px]! text-white text-center! leading-[86px]! font-semibold">
            Got an  <span className="font-playfair text-white">Idea?</span><br/> Let&apos;s Make It Real.
            </span>
          }
          showSocialLinks={false}  
          showTestimonial={false}
          simpleDescription="We are Global Design Agency specializing in UI/UX, Web, Mobile App & SaaS Design. Crafting digital experiences across 15+ industries that drive real results."
        />

       
      </div>
    </>
  );
}
