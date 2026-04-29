import VelocityMarquee from "@/components/animation/VelocityMarquee";
import TrustedClients from "./TrustedClients";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Image from "next/image";
import { ArrowIcon, ArrowUpIcon, StarIcon } from "@/public/icons";
export default function Hero() {
  return (
    <>
      <div className="mxd-section pb-31!  relative! flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
        <Image
          src="/img/hero/hero-bg.svg"
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

        <div className="mxd-hero-01 z-[100]">
          <div className="mxd-hero-01__wrap loading-wrap ">
            {/* top group */}
            <div className="mxd-hero-01__top flex flex-col gap-16">
              <div className=" items-center flex flex-col gap-4 ">
                <Image
                  src="/img/hero/logo.svg"
                  alt="ring"
                  width={172}
                  height={48}
                  className=" w-auto! h-auto! "
                  priority
                />
                <p className="text-2xl text-white font-normal">
                  Global UI/UX Design Agency
                </p>
                {/* <TrustedClients />

                <h1 className="text-center text-4xl!">
                  Global UI/UX Design Agency
                </h1> */}
              </div>
              <div className="flex flex-col gap-10 items-center">
                <div className="mxd-hero-01__title-wrap">
                  <div className="mxd-hero-01__marquee loading__item bg-black/30! border-0!">
                    <VelocityMarquee className="marquee marquee-right--gsap">
                      {/* single item */}
                      {[
                        "UI/UX",
                        "Web",
                        "Apps",
                        "SaaS",
                        "Product",
                        "Dashboards",
                      ].map((text, index) => (
                        <div
                          key={index}
                          className="marquee__item item-regular text items-center! flex!"
                        >
                          <div className="flex items-center gap-2 relative">
                            <p className="md:text-[80px]! pe-22! font-playfair!">
                              {text}{" "}
                            </p>
                            <div className="absolute top-10 -right-20!">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 128 128"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M64 32.0007C38.0951 35.3677 35.3662 38.0966 31.9993 64.0015C28.6338 38.0951 25.9049 35.3662 0 32.0007C25.9049 28.6338 28.6338 25.9049 32.0007 0C35.3677 25.9049 38.0966 28.6338 64.0015 32.0007H64Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                          {/* <Image class="inject-me" src="/img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
                        </div>
                      ))}
                    </VelocityMarquee>
                  </div>
                  {/* title text */}
                  <h1 className="hero-01-title md:text-[80px]!  font-manrope!">
                    <span className="hero-01-title__row loading__item">
                      <em className="hero-01-title__item font-manrope !">
                        We{" "}
                        <span className="ml-8! font-playfair ! inline-block">
                          Design
                        </span>
                      </em>
                      <em className="hero-01-title__item title-item-transparent font-playfair!">
                        tech
                      </em>
                    </span>
                    <span className="hero-01-title__row loading__item">
                      <em className="hero-01-title__item font-manrope !">
                        Solutions That{" "}
                        <span className="ml-8! font-playfair ! inline-block">
                          Performs
                        </span>
                      </em>
                    </span>
                  </h1>
                </div>
                <div className="py-2 px-5 flex flex-col lg:flex-row gap-2.5 items-center bg-black/30 rounded-full">
                  <div className="relative !w-[136px] !h-[40px] shrink-0">
                    <Image
                      src="/img/hero/hero-section-testimonials.png"
                      alt="testimonials"
                      fill
                      sizes="136px"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-stretch gap-1">
                    <div className="flex flex-row items-center gap-1.5">
                      <p className="text-lg font-medium text-white">
                        What Clients Say About Us
                      </p>
                      <ArrowIcon />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-2">
                      <div className="flex flex-row gap-0.5">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>

                      <span className="text-sm font-normal text-white">
                        based on 100+ reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" space-y-12! md:min-w-[1200px]! max-w-[1200px]!">
                <div className=" space-y-8 md:space-y-16! md:min-w-[1200px]! max-w-[1200px]!">
                  {/* <p className="text-center text-5xl! leading-normal ">
                    We are Global Design Agency specializing in UI/UX, Web,
                    Mobile App & SaaS Design. Crafting digital experiences
                    across 15+ industries that drive real results.
                  </p> */}
                  <div className="flex lg:flex-row flex-col items-center gap-6 justify-center">
                    <AnimatedButton
                      text="Book a 30 min call"
                      variant="primary"
                      target="_blank"
                      className="min-w-[272px]  rounded-[12px] px-8! py-4! text-lg font-medium flex items-center justify-center gap-4 slide-right"
                      href="https://calendly.com/endpointclients/30min"
                    >
                      {/* <i className="ph-bold ph-arrow-up-right" /> */}
                      <ArrowUpIcon />
                    </AnimatedButton>

                    <AnimatedButton
                      text="Explore Our Work"
                      variant="secondary"
                      target="_blank"
                      className="min-w-[264px]  rounded-[12px] px-8! py-4! text-xl text-gray-950 font-medium flex items-center justify-center gap-3  slide-right"
                      href="https://www.behance.net/endpointclients"
                    >
                      <ArrowUpIcon fill="white" />
                    </AnimatedButton>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-12! md:mt-24!">
                  <div className="relative group">
                    <a
                      href="https://www.upwork.com/agencies/1735503164466835456/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Upwork"
                        src={"/img/icons/upwork.svg"}
                        width={24}
                        height={24}
                        className="w-24! h-24!"
                      />
                    </a>

                    <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                      <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                        Top Rated Plus
                        <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a
                      href="https://pro.fiverr.com/freelancers/templateplanet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Fiverr"
                        src={"/img/icons/fiverr.svg"}
                        width={24}
                        height={24}
                        className="w-24! h-24!"
                      />
                    </a>

                    <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                      <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                        Pro Seller Agency
                        <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a
                      href="https://clutch.co/profile/endpoint-clients"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Fiverr"
                        src={"/img/icons/clutch.svg"}
                        width={24}
                        height={24}
                        className="w-24! h-24! rounded-full"
                      />
                    </a>

                    <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                      <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                        Leading Design Agency
                        <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a
                      href="https://clutch.co/profile/endpoint-clients"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        alt="Fiverr"
                        src={"img/icons/techbehemothsSvg.svg"}
                        width={20}
                        height={20}
                        className=" h-24! rounded-full"
                      />
                    </a>

                    <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                      <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                        Leading Design Agency
                        <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
