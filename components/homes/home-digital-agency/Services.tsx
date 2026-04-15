import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import { projects9 } from "@/data/projects.json";
export default function ServicesDesignAgency() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="mb-4 md:mb-8 space-y-4! md:space-y-8!">
            <div className="px-4 py-3 font-semibold text-[#4338CA] border-2! border-[#4338CA] w-fit rounded-full">
              Industry Expertise
            </div>
            <h2 className="text-5xl! leading-normal!">
              Trusted Design Across <br /> Every Industry
            </h2>
          </div>
          <div className="content__block">
            <StackCards className="stack-wrapper mxd-hero-02-stack">
              {projects9.map((stack) => (
                <div key={stack.id} className={stack.wrapperClass}>
                  <div className="mxd-services-stack__container">
                    <div className="mxd-services-stack__title showcase-title">
                      <h3 className={stack.titleClass}>{stack.title}</h3>
                      {/* <span
                        className={`mxd-services-stack__number ${stack.numberClass}`}
                      >
                        {stack.number}
                      </span> */}
                    </div>
                    <div className="mxd-services-stack__info showcase-info">
                      <p className={stack.infoClass}>{stack.info}</p>
                    </div>
                    <div className="mxd-services-stack__works">
                      {stack.works.map((w, i) => (
                        <div
                          key={i}
                          className="mxd-services-stack__work"
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
