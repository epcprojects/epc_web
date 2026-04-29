
import Image from "next/image";

import HeroSection from "@/components/HeroComponent/HeroSection";
export default function Hero() {
  return (
    <>
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center h-fit! mxd-hero-section  mxd-hero-fullheight">
        <Image
          src="/img/contactus-hero.svg"
          alt="hero bg"
          fill
          className="object-cover object-center min-h-[dvh] -z-10"
          priority
        />
        

        <HeroSection
        subtitle=""
          innerPagesText = {
            <span className="text-[72px]! text-white text-center! leading-[86px]! font-semibold">
            Got an  <span className="font-playfair text-white">Idea?</span><br/> Let&apos;s Make It Real.
            </span>
          }
          showSocialLinks={false}  
          showTestimonial={false}
          showButtons={false}
          simpleDescription="Tell us what you're building. Our team will get back within 24 hours to schedule a call, understand your goals, and shape the right approach."
        />

       
      </div>
    </>
  );
}
