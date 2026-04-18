"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const OFFSET = 120;
const STORAGE_KEY = "pending-scroll-section";
const RETRY_DELAYS = [0, 150, 350, 700, 1200];

export default function AnchorScrollController() {
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;

    const getSectionId = () => {
      const storedSection = sessionStorage.getItem(STORAGE_KEY);

      if (storedSection) return storedSection;
      if (window.location.hash) return decodeURIComponent(window.location.hash.slice(1));

      return "";
    };

    const scrollToSection = () => {
      const sectionId = getSectionId();

      if (!sectionId) {
        RETRY_DELAYS.forEach((delay) => {
          setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), delay);
        });

        return true;
      }

      const element = document.getElementById(sectionId);

      if (!element) return false;

      const scroll = (behavior: ScrollBehavior = "auto") => {
        const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;

        window.scrollTo({ top, behavior });
      };

      RETRY_DELAYS.forEach((delay, index) => {
        setTimeout(() => scroll(index === RETRY_DELAYS.length - 1 ? "smooth" : "auto"), delay);
      });

      sessionStorage.removeItem(STORAGE_KEY);

      return true;
    };

    const tryScroll = () => {
      if (scrollToSection() || attempts >= 20) return;

      attempts += 1;
      timeoutId = setTimeout(tryScroll, 100);
    };

    const handleHashChange = () => {
      attempts = 0;
      tryScroll();
    };

    const frameId = requestAnimationFrame(tryScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}
