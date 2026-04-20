"use client";
import Image from "next/image";
import factsData from "@/data/facts-simple.json";
import Counter from "@/components/common/Counter";
import { usePathname } from "next/navigation";

export default function Facts() {
  const pathname = usePathname();

  return (
    <div
      className={`mxd-section  ${pathname === "/services" ? "pb-24! xl:pb-52!" : " padding-default"}  `}
    >
      <div className="mxd-container grid-container">
        {/* Block - Statistics Cards Start */}
        <div className="mxd-block">
          <div className="mxd-stats-simple">
            <div className="container-fluid p-0">
              <div className="grid  xl:grid-cols-5  grid-cols-2 lg:grid-cols-3 g-0 mxd-stats-simple">
                {factsData.map((fact) => (
                  <div
                    key={fact.id}
                    className="col-span-5 md:col-span-1  mxd-grid-item"
                  >
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* counter */}

                      {/* image */}
                      <Image
                        className="w-60! h-60! "
                        alt="Icon"
                        src={fact.image}
                        width={fact.imageWidth}
                        height={fact.imageHeight}
                      />

                      <div className="mxd-counter">
                        <p
                          id={fact.counterId}
                          className="mxd-stats-number lg:text-[52px]!  xl:text-[80px]!  mxd-stats-simple__counter"
                        >
                          <Counter max={fact.number} />
                          {fact.suffix}
                        </p>
                      </div>
                      {/* description */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">
                        {fact.description.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            {index <
                              fact.description.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </p>
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
