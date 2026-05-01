"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import services from "@/data/services/services-web-agency.json";
import { Service } from "@/types/services";
import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import { PolygonIcon } from "@/public/icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function EPCServices() {
  const router = useRouter();
  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pinnedRef.current;
    if (!root) return;

    const textItems = Array.from(
      root.querySelectorAll<HTMLElement>(".mxd-pinned__text-item"),
    );
    const imgItems = Array.from(
      root.querySelectorAll<HTMLElement>(".mxd-pinned__img-item"),
    );

    // Guard if lists mismatch/empty
    const count = Math.min(textItems.length, imgItems.length);
    if (count === 0) return;

    const setActive = (idx: number) => {
      textItems.forEach((el) => el.classList.remove("is-active"));
      imgItems.forEach((el) => el.classList.remove("is-active"));
      textItems[idx]?.classList.add("is-active");
      imgItems[idx]?.classList.add("is-active");
    };

    // Initial active
    setActive(0);

    // Create ScrollTriggers for each text item
    const triggers: ScrollTrigger[] = [];
    textItems.slice(0, count).forEach((el, idx) => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActive(idx);
        },
      });
      triggers.push(st);
    });

    // Optional: refresh after mount to measure correctly
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="container  padding-pinned-img-pre-mtext px-[16px]! lg:px-0!">
      <div className=" space-y-[10px]! lg:space-y-0!">
        <div className="mxd-block__name flex flex-col gap-[20px]! ">
          <div className="py-[8px]! px-[16px]! lg:px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!  w-fit ">
            <PolygonIcon />
            <p className="text-[#4939D2]! text-[16px]! lg:text-[18px]! font-medium!">
              Our Services
            </p>
          </div>
          <RevealText
            as="h2"
            className="reveal-type anim-uni-in-up text-[36px]! lg:text-[48px]!"
          >
            We Design Digital <br /> Solutions{" "}
            <span className="font-playfair !">That Perform</span>
          </RevealText>
        </div>
        {/* Block - Services Pinned Image Start */}
        <div className="mxd-block">
          <div className="mxd-pinned" ref={pinnedRef}>
            <div className="mxd-pinned__visual page-padding pt-[48px]!">
              <div className="mxd-pinned__img-wrap">
                <div className="mxd-pinned__img-list" role="list">
                  {services.map((item: { img: string }, idx: number) => (
                    <div
                      className="mxd-pinned__img-item"
                      role="listitem"
                      key={idx}
                    >
                      <Image
                        className="mxd-pinned__img w-full! h-full!"
                        alt="Image"
                        src={item.img}
                        width={800}
                        height={800}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mxd-pinned__content page-padding">
              <div className="mxd-pinned__text-wrap">
                <div
                  className="mxd-pinned__text-list lg:gap-[70px]! gap-[24px]!"
                  role="list"
                >
                  {services.map((item: Service, idx: number) => (
                    <div
                      className="mxd-pinned__text-item "
                      role="listitem"
                      key={idx}
                    >
                      <div className="mxd-pinned__img-mobile anim-uni-in-up h-full! lg:h-auto!  ">
                        <Image
                          alt="Image"
                          src={item.img}
                          width={800}
                          height={800}
                          className=" h-full! lg:h-auto! w-full! lg:w-auto! lg:rounded-[38px]! rounded-[20px]!"
                        />
                      </div>

                      <h2 className="mxd-pinned__title h2-small anim-uni-in-up lg:mb-[34px]! mb-[16px]! text-[24px]! lg:text-[48px]!">
                        {item.title}
                      </h2>

                      <div className="mxd-pinned__tags lg:mb-[32px]! mb-[16px]!">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            className="tag tag-default tag-outline anim-uni-in-up text-[14px]! text-gray-900!"
                            key={tagIdx}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="anim-uni-in-up text-[16px]! lg:text-[20px]!">
                        {item.desc}
                      </p>

                      <div className="mt-[16px]! lg:mt-12!">
                        <PrimaryButton
                          label="Start a Project"
                          onClick={() => {
                            router.push("/contact");
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Pinned Image End */}
      </div>
    </div>
  );
}
