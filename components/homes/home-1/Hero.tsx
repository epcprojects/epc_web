import VelocityMarquee from "@/components/animation/VelocityMarquee";
import TrustedClients from "./TrustedClients";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Image from "next/image";
import { ArrowIcon, ArrowUpIcon, StarIcon } from "@/public/icons";
import HeroSection from "@/components/HeroComponent/HeroSection";
export default function Hero() {
  return (
    <>
      <div className="md:mxd-section lg:pb-31! pt-12!  relative! flex flex-col md:justify-center md:items-center h-fit! md:mxd-hero-section min-h-dvh md:mxd-hero-fullheight">
        <Image
          src="/img/contactus-hero.svg"
          alt="hero bg"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <div className="hidden lg:block">
          <Image
            src="/img/hero/hero-section-mobile.png"
            alt="mobile mockup"
            width={211}
            height={437}
            className="absolute top-[25%] right-[2px] z-10  w-auto! h-auto! "
            priority
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/img/hero/hero-section-cube.png"
            alt="cube"
            width={107}
            height={107}
            className="absolute top-[59%] right-48 z-5  w-auto! h-auto! "
            priority
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/img/hero/hero-section-macbook.png"
            alt="macbook"
            width={315}
            height={368}
            className="absolute top-[28%] left-0 z-10  w-auto! h-auto! "
            priority
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/img/hero/hero-section-ring.png"
            alt="ring"
            width={88}
            height={88}
            className="absolute top-[25%] left-60 z-5  w-auto! h-auto! "
            priority
          />
        </div>

        <HeroSection
          firstLinePrefix="We"
          firstLineHighlight="Design"
          firstLineSuffix="tech"
          secondLinePrefix="Solutions That"
          secondLineHighlight="Performs"
        />

        {/* <div className="absolute!  inset-0  -z-10 pointer-events-none overflow-hidden">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dgbdcdqd1&public_id=Gradient_04_HR_mfj88z&autoplay=true&muted=true&loop=true"
            width="640"
            // height="360"
            style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div> */}

        {/* <div className="absolute inset-0 bg-[#FCF7F670] -z-10 pointer-events-none overflow-hidden"></div> */}

        {/* <div className="absolute w-full top-0 h-dvh  bg-linear-to-t from-[#FCF7F6] to-[#FCF7F670] -mb-20 z-80 pointer-events-none overflow-hidden"></div> */}
      </div>
    </>
  );
}
