import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import { projects9 } from "@/data/projects.json";
import RevealText from "@/components/animation/RevealText";
import { PolygonIcon } from "@/public/icons";
export default function ServicesDesignAgency() {
  return (
    <div className=" container max-w-7xl mx-auto px-[16px]! lg:px-0! ">
      <div className="">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin px-0! ">
          <div className="flex flex-col items-start gap-[20px]!  ">
            <div className="py-[8px]! lg:px-[20px]! px-[16px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[16px]! lg:text-[18px]! font-medium!">
                Industry Expertise
              </p>
            </div>
            <p className="  lg:text-[48px]! text-[30px]! leading-[100%]! font-semibold! text-gray-950">
              Trusted Design
              <br />
              Across <span className=" font-playfair ! ">Every Industry</span>
            </p>
          </div>

          <div className="content__block">
            <div className="stack-wrapper mxd-hero-02-stack h-[100%]! mt-[20px]! lg:mt-[48px]! space-y-[20px]! lg:space-y-[48px]!">
              {projects9.map((stack) => (
                <div
                  key={stack.id}
                  className={`${stack.wrapperClass} lg:px-[48px]! px-[16px]! lg:pt-[48px]! pt-[16px]! lg:pb-[32px]!  pb-[16px]! `}
                >
                  <div className="mxd-services-stack__container">
                    <div className="mxd-services-stack__title showcase-title  mb-[8px]!">
                      <h3 className={stack.titleClass}>{stack.title}</h3>
                    </div>
                    <div className="mxd-services-stack__info showcase-info lg:max-w-[824px]! w-full! mb-[16px]! lg:mb-[32px]! pb-4! md:pb-8">
                      <p className={stack.infoClass}>{stack.info}</p>
                    </div>
                    <div className="mxd-services-stack__works !relative !z-10 !flex md:flex-row! flex-col! justify-between! !items-start !gap-[32px] !overflow-visible !opacity-100 !visible">
                      {stack.works.map((w, i) => (
                        <div
                          key={i}
                          className="mxd-services-stack__work !relative !z-10 !block !shrink-0   h-full! !opacity-100 !visible !overflow-visible"
                        >
                          <Image
                            className="mxd-services-stack__preview !relative !z-10 !block lg:min-h-[447px]! md:min-h-[234px]!  !opacity-100 !visible rounded-[24px]! object-cover!"
                            alt="Work Preview"
                            src={w.src}
                            fill
                          
                            // width={800}
                            // height={600}
                          />

                          <div className="mxd-services-stack__tags absolute px-[8px]! lg:bottom-[20px]! lg:left-[20px]! left-[5px]! bottom-[10px]!  !flex flex-wrap! !items-center !gap-[8px] !z-[40] !opacity-100 !visible"
                          >
                            {w.tags.map((t, ti) => (
                              <span
                                key={ti}
                                className="tag tag-default tag-permanent border! lg:text-[14px]! text-[12px]! lg:px-[12px]! px-[6px]! border-white! bg-black/30! text-white! backdrop-blur-[30px]! !opacity-100 !visible"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
