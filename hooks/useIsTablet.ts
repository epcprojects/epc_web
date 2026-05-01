"use client";
import { useEffect, useState } from "react";

export function useIsTablet(breakpoint: number = 1024) {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= breakpoint);

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isTablet;
}