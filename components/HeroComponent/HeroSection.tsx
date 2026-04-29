import { ArrowIcon, ArrowUpIcon, StarIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";
import AnimatedButton from "../animation/AnimatedButton";
import VelocityMarquee from "../animation/VelocityMarquee";

export type HeroButton = {
  text: string;
  variant: "primary" | "secondary";
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
};

type SocialLink = {
  href: string;
  src: string;
  alt: string;
  tooltip: string;
  className?: string;
};

type HeroSectionProps = {
  subtitle?: string;
  marqueeItems?: string[];

  firstLinePrefix?: string;
  firstLineHighlight?: string;
  firstLineSuffix?: string;

  secondLinePrefix?: string;
  secondLineHighlight?: string;

  showTestimonial?: boolean;
  simpleDescription?: string;

  showButtons?: boolean;
  buttons?: HeroButton[];

  showSocialLinks?: boolean;
  socialLinks?: SocialLink[];
};

const defaultMarqueeItems = [
  "UI/UX",
  "Web",
  "Apps",
  "SaaS",
  "Product",
  "Dashboards",
];

const defaultButtons: HeroButton[] = [
  {
    text: "Book a 30 min call",
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

const defaultSocialLinks: SocialLink[] = [
  {
    href: "https://www.upwork.com/agencies/1735503164466835456/",
    src: "/img/icons/upwork.svg",
    alt: "Upwork",
    tooltip: "Top Rated Plus",
    className: "w-24! h-24!",
  },
  {
    href: "https://pro.fiverr.com/freelancers/templateplanet",
    src: "/img/icons/fiverr.svg",
    alt: "Fiverr",
    tooltip: "Pro Seller Agency",
    className: "w-24! h-24!",
  },
  {
    href: "https://clutch.co/profile/endpoint-clients",
    src: "/img/icons/clutch.svg",
    alt: "Clutch",
    tooltip: "Leading Design Agency",
    className: "w-24! h-24! rounded-full",
  },
  {
    href: "https://techbehemoths.com/company/endpoint-clients",
    src: "/img/icons/techbehemothsSvg.svg",
    alt: "Tech Behemoths",
    tooltip: "Leading Design Agency",
    className: "h-24! rounded-full",
  },
];

export default function HeroSection({
  subtitle = "Global UI/UX Design Agency",
  marqueeItems = defaultMarqueeItems,

  firstLinePrefix ,
  firstLineHighlight ,
  firstLineSuffix ,

  secondLinePrefix ,
  secondLineHighlight,

  showTestimonial = true,
  simpleDescription = "We are Global Design Agency specializing in UI/UX, Web, Mobile App & SaaS Design. Crafting digital experiences across 15+ industries that drive real results.",

  showButtons = true,
  buttons = defaultButtons,

  showSocialLinks = true,
  socialLinks = defaultSocialLinks,
}: HeroSectionProps) {
  return (
    <div className="mxd-hero-01 min-h-[dvh] z-[100]">
      <div className="mxd-hero-01__wrap loading-wrap">
        <div className="mxd-hero-01__top flex flex-col container max-w-7xl mx-auto gap-[64px]">
          <div className="items-center flex flex-col gap-[16px]">
            <Image
              src="/img/hero/logo.svg"
              alt="ring"
              width={172}
              height={48}
              className="w-auto! h-auto!"
              priority
            />

            <p className="text-2xl text-white font-normal">{subtitle}</p>
          </div>

          <div
            className={`flex flex-col items-center ${
              showTestimonial ? "gap-[40px]!" : "gap-[12px]!"
            }`}
          >
            <div className="mxd-hero-01__title-wrap">
              <div className="mxd-hero-01__marquee loading__item bg-black/30! border-0!">
                <VelocityMarquee direction="left" className="marquee marquee-right--gsap">
                  {marqueeItems.map((text, index) => (
                    <div
                      key={`${text}-${index}`}
                      className="marquee__item item-regular text items-center! flex!"
                    >
                      <div className="flex items-center gap-2 relative">
                        <p className="md:text-[80px]! pe-22! font-playfair!">
                          {text}
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
                    </div>
                  ))}
                </VelocityMarquee>
              </div>

              <h1 className="hero-01-title md:text-[80px]! font-manrope!">
                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item font-manrope!">
                    {firstLinePrefix}{" "}
                    <span className="ml-8! font-playfair ! inline-block">
                      {firstLineHighlight}
                    </span>
                  </em>

                  {firstLineSuffix && (
                    <em className="hero-01-title__item title-item-transparent font-playfair !">
                      {firstLineSuffix}
                    </em>
                  )}
                </span>

                <span className="hero-01-title__row loading__item">
                  <em className="hero-01-title__item font-manrope!">
                    {secondLinePrefix}{" "}
                    <span className="ml-8! font-playfair ! inline-block">
                      {secondLineHighlight}
                    </span>
                  </em>
                </span>
              </h1>
            </div>

            {showTestimonial ? (
              <div className="py-[8px]! pr-[20px]! pl-[16px]! flex flex-col lg:flex-row gap-[10px]! items-center bg-black/30 rounded-full">
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
            ) : (
              <p className="max-w-[832px]! text-center text-[20px]! leading-[140%] text-gray-200!">
                {simpleDescription}
              </p>
            )}
          </div>

          {(showButtons || showSocialLinks) && (
            <div className="space-y-12! md:min-w-[1200px]! max-w-[1200px]!">
              {showButtons && buttons.length > 0 && (
                <div className="flex lg:flex-row flex-col items-center gap-6 justify-center">
                  {buttons.map((button, index) => (
                    <AnimatedButton
                      key={`${button.text}-${index}`}
                      text={button.text}
                      variant={button.variant}
                      target={button.target ?? "_blank"}
                      href={button.href}
                      onClick={button.onClick}
                      className={
                        button.className ??
                        getDefaultButtonClassName(button.variant)
                      }
                    >
                      <ArrowUpIcon
                        fill={button.variant === "secondary" ? "white" : undefined}
                      />
                    </AnimatedButton>
                  ))}
                </div>
              )}

              {showSocialLinks && socialLinks.length > 0 && (
                <div className="flex items-center justify-center gap-4 mt-12! md:mt-24!">
                  {socialLinks.map((item, index) => (
                    <div key={`${item.alt}-${index}`} className="relative group">
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <img
                          alt={item.alt}
                          src={item.src}
                          width={24}
                          height={24}
                          className={item.className}
                        />
                      </a>

                      <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                        <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                          {item.tooltip}
                          <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getDefaultButtonClassName(variant: HeroButton["variant"]) {
  if (variant === "secondary") {
    return "min-w-[264px] rounded-[12px] px-8! py-4! text-xl text-gray-950 font-medium flex items-center justify-center gap-3 slide-right";
  }

  return "min-w-[272px] rounded-[12px] px-8! py-4! text-lg font-medium flex items-center justify-center gap-4 slide-right";
}
