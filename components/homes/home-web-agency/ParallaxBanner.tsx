"use client";
import BackgroundParallax from "@/components/animation/BackgroundParallax";

// export default function ParallaxBanner() {
//   return (
//     <div className="mxd-section padding-pre-manifest">
//       <div className="mxd-container">
//         <div className="mxd-divider">
//           {/* <BackgroundParallax
//             scale={1.5}
//             className="mxd-divider__image divider-image-10 parallax-img"
//           /> */}
//           <iframe
//             src="https://player.cloudinary.com/embed/?cloud_name=dgbdcdqd1&public_id=Endpoint_Video_Compressed_jfvvui&autoplay=true&muted=true&loop=true"
//             width="640"
//             height="360"
//             style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
//             allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
//             allowFullScreen
//             frameBorder="0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
type ParallaxBannerProps = {
  videoUrl: string;
  className?: string;
  bottomSpacerValue?: number;
  topSpacerValue?: number;
};

export default function ParallaxBanner({
  videoUrl,
  className = "",
  bottomSpacerValue = 250,
  topSpacerValue = 120,
}: ParallaxBannerProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const topSpacerRef = useRef<HTMLDivElement | null>(null);
  const bottomSpacerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const divider = dividerRef.current;
    const topSpacer = topSpacerRef.current;
    const bottomSpacer = bottomSpacerRef.current;

    if (!section || !container || !divider || !topSpacer || !bottomSpacer)
      return;

    const ctx = gsap.context(() => {
      const getFinalScale = () => window.innerWidth / container.offsetWidth;

      gsap.set([topSpacer, bottomSpacer], {
        height: 0,
      });

      gsap.set(container, {
        scale: 1,
        transformOrigin: "center center",
        willChange: "transform",
        force3D: true,
      });

      gsap.set(divider, {
        borderRadius: "32px",
        overflow: "hidden",
        willChange: "transform,border-radius",
        force3D: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 45%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        topSpacer,
        {
          height: `${topSpacerValue}`,
          ease: "none",
        },
        0,
      );

      tl.to(
        bottomSpacer,
        {
          height: `${bottomSpacerValue}`,
          ease: "none",
        },
        0,
      );

      tl.to(
        container,
        {
          scale: getFinalScale,
          ease: "none",
        },
        0,
      );

      tl.to(
        divider,
        {
          borderRadius: "0px",
          ease: "none",
        },
        0,
      );
    }, section);

    return () => ctx.revert();
  },[topSpacerValue, bottomSpacerValue]);

  return (
    <section ref={sectionRef} className={` overflow-visible ${className}`}>
      <div ref={topSpacerRef} />

      <div
        ref={containerRef}
        className="container max-w-7xl mx-auto transform-gpu px-0!"
      >
        <div ref={dividerRef} className=" overflow-hidden rounded-[32px]">
          <video
            src="https://res.cloudinary.com/dgbdcdqd1/video/upload/Endpoint_Video_Compressed_jfvvui.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block w-full h-full max-h-dvh object-contain "
          />
        </div>
      </div>

      <div ref={bottomSpacerRef} />
    </section>
  );
}
