import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import { projects9 } from "@/data/projects.json";
import RevealText from "@/components/animation/RevealText";
import { PolygonIcon } from "@/public/icons";
export default function ServicesDesignAgency() {
  return (
    <div className="px-[32px]! container max-w-7xl mx-auto ">
      <div className="">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="flex flex-col items-start gap-[20px]! pb-[48px]!">
            <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[18px]! font-medium!">
                Industry Expertise
              </p>
            </div>
            <p className="  text-[48px]! leading-[100%]! font-semibold! text-gray-950">
              Trusted Design
              <br />
              Across <span className=" font-playfair ! ">Every Industry</span>
            </p>
          </div>
          {/* <div className="mxd-block__name mb-4 md:mb-24! space-y-4!">
            <div className="  font-semibold text-[#4939d2] text-4xl! w-fit">
              Industry Expertise
            </div>
            <RevealText as="h2" className="reveal-type anim-uni-in-up">
              Trusted Design Across Every Industry
            </RevealText>
          </div> */}
          <div className="content__block">
            <StackCards className="stack-wrapper mxd-hero-02-stack ">
              {projects9.map((stack) => (
                <div
                  key={stack.id}
                  className={`${stack.wrapperClass} p-[48px]!`}
                >
                  <div className="mxd-services-stack__container">
                    <div className="mxd-services-stack__title showcase-title mb-[8px]!">
                      <h3 className={stack.titleClass}>{stack.title}</h3>
                      {/* <span
                        className={`mxd-services-stack__number ${stack.numberClass}`}
                      >
                        {stack.number}
                      </span> */}
                    </div>
                    <div className="mxd-services-stack__info showcase-info mb-[32px]!">
                      <p className={stack.infoClass}>{stack.info}</p>
                    </div>
                    <div className="mxd-services-stack__works">
                      {stack.works.map((w, i) => (
                        <div
                          key={i}
                          className="mxd-services-stack__work !w-[544px] !max-w-[544px] !min-w-[544px] h-auto!"
                          // href={`/project-details`}
                        >
                          <Image
                            className="mxd-services-stack__preview"
                            alt="Work Preview"
                            src={w.src}
                            width={800}
                            height={600}
                          />
                          <div className="mxd-services-stack__tags tags-absolute">
                            {w.tags.map((t, ti) => (
                              <span
                                key={ti}
                                className="tag tag-default tag-permanent"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          {/* <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon icon-small">
                              <Image
                                alt="Eye Icon"
                                src="/img/icons/icon-eye.svg"
                                width={38}
                                height={21}
                              />
                            </i>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
