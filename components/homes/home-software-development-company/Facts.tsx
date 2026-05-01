"use client";
import Image from "next/image";
import factsData from "@/data/facts-simple.json";
import Counter from "@/components/common/Counter";
import { usePathname } from "next/navigation";

export default function Facts() {
  const pathname = usePathname();

  return (
    <div
      className={`mxd-section  ${pathname === "/services" ? "pb-[36px]! md:pb-[96px]!" : " padding-default pb-[36px]! md:pb-[96px]!"}  container max-w-7xl mx-auto px-[16px]! md:px-0! pt-[36px]! md:pt-[64px]!`}
    >
      <div className="mxd-container grid-container px-0! ">
        {/* Block - Statistics Cards Start */}
        <div className="mxd-block">
          <div className="mxd-stats-simple ">
            <div className="container-fluid p-0">
              <div className="grid  xl:grid-cols-5  grid-cols-2  g-0 mxd-stats-simple">
                {factsData.map((fact, index) => (
                  <div
                    key={fact.id}
                    className="col-span-5 md:col-span-1  mxd-grid-item pl-0! md:pl-[15px]! pr-0! md:pr-[15px]! pb-0! md:pb-[15px]! mt-0! md:mt-[30px]!"
                  >
                    <div
                      className={`mxd-stats-simple__inner animate-card-4 flex! md::pb-0! pb-[8px]! border-gray-200! md:border-b-0! border-b!  flex-col! gap-[24px]! md:gap-[32px]! md:p-[24px]! items-center! justify-start! ${
                        index === 0 ? "before:hidden! border-l-0! " : ""
                      }`}
                    >
                      {/* counter */}

                      {/* image */}
                      <Image
                        className="md:w-60! md:h-60! h-30! w-30!"
                        alt="Icon"
                        src={fact.image}
                        width={fact.imageWidth}
                        height={fact.imageHeight}
                      />

                      <div className="flex  flex-col items-center justify-center gap-[12px]! ">
                        <div className="mxd-counter">
                          <p
                            id={fact.counterId}
                            className="mxd-stats-number md:mb-[28px]! mb-0!  text-[36px]! md:text-[56px]! md:leading-[100%]! font-bold! text-center! mxd-stats-simple__counter"
                          >
                            <Counter max={fact.number} />
                            {fact.suffix}
                          </p>
                        </div>

                        <p className="mxd-stats-simple__descr t-140 t-bright text-[18px]! leading-[130%]! font-semibold text-center!">
                          {fact.description.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              {index <
                                fact.description.split("\n").length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Statistics Cards End */}
      </div>
    </div>
  );
}
