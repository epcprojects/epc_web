import Image from "next/image";

import partners from "@/data/partners.json";
import { Partner } from "@/types/partner";
import VelocityMarquee from "../animation/VelocityMarquee";

type PartnersJson = { top: Partner[]; bottom: Partner[] };

const partnersData = partners as unknown as PartnersJson;

export default function Partners() {
  const top = partnersData.top;
  const bottom = partnersData.bottom;

  return (
    <div className="  pt-[64px]! pb-[96px]! bg-[white]">
      <div className=" relative ">
        {/* Block - Marquee Partners Two Lines Start */}
        <div className="container max-w-7xl mx-auto">
          <h2 className="!text-[24px]  !font-bold text-gray-950 text-center !mb-6">
            Chosen by 350+ Premium Brands Worldwide
          </h2>
          {/* <div className="bg-linear-to-r from-[#FCF7F650] to-[#FCF7F6] absolute end-0 z-50 h-full -bottom-9 w-1/3"></div>
          <div className="bg-linear-to-l from-[#FCF7F650] to-[#FCF7F6] absolute left-0 z-50 h-full -bottom-9 w-1/3"></div> */}
          {/* top line */}
          <VelocityMarquee
            direction="left"
            className="marquee marquee--gsap h-[91px]!"
          >
            {top.map((p, idx) => (
              <a
                key={idx}
                className="marquee__item mr-0! h-[68px]! opacity-60 item-partners"
                href={p.href || "#0"}
              >
                <Image
                  alt="Partner Logo"
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  className="grayscale-100 hover:grayscale-0"
                />
              </a>
            ))}
          </VelocityMarquee>
          {/* bottom line */}
          <VelocityMarquee className="marquee marquee--gsap h-[91px]!">
            {bottom.map((p, idx) => (
              <a
                key={idx}
                className="marquee__item mr-0! mt-0! opacity-60 h-[68px]!  item-partners"
                href={p.href || "#0"}
              >
                <Image
                  alt="Partner Logo"
                  src={p.src}
                  width={p.width}
                  height={p.height}
                  className="grayscale-100 hover:grayscale-0"
                />
              </a>
            ))}
          </VelocityMarquee>
        </div>
        {/* Block - Marquee Partners Two Lines End */}
      </div>
    </div>
  );
}
