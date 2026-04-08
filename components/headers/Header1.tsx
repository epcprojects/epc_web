"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";
import Image from "next/image";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed! top-10 left-24 z-100 ">
        <Link href={`/`} className="">
          <Image
            alt="logo epc"
            src={"img/logoHorizontal.svg"}
            width={40}
            height={40}
            className="h-20! "
          />
        </Link>
      </div>
      <header
        id="header"
        className={`mxd-header justify-end! ${isHidden ? "is-hidden" : ""}`}
      >
        {/* header logo */}

        {/* header controls */}
        {pathname !== "/" && (
          <div className="mxd-header__controls loading__fade">
            {/* <ThemeSwitcherButton /> */}

            {pathname == "/" || pathname == "/preview" ? (
              <AnimatedButton
                text="Purchase"
                className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
                href="https://themeforest.net/user/ib-themes/portfolio"
                target="_blank"
              >
                <i className="ph-bold ph-shopping-cart-simple" />
              </AnimatedButton>
            ) : (
              <AnimatedButton
                text="Let’s Talk"
                target="_black"
                className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
                href="https://www.google.com/url?q=https://calendly.com/endpointclients/30min&sa=D&source=docs&ust=1775469268982218&usg=AOvVaw2gBsAmr3POhR5M801bKim7"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
            )}
          </div>
        )}
      </header>
    </>
  );
}
