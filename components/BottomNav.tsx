"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useIsTablet } from "@/hooks/useIsTablet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.2;
      setShowBottomNav(window.scrollY >= triggerPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 120;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "auto" });
    requestAnimationFrame(() => {
      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  const handleClick = (href: string) => {
    const [path, hash] = href.split("#");

    if (hash) {
      sessionStorage.setItem("pending-scroll-section", hash);

      if (pathname === path) {
        window.history.pushState(null, "", href);
        requestAnimationFrame(() => scrollToSection(hash));
        return;
      }

      router.push(href, { scroll: false });
      return;
    }

    router.push(href, { scroll: false });
  };
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  return (
    // <div className="fixed md:py-8! bottom-0  left-1/2 w-full flex items-center justify-center   -translate-x-1/2 z-[1000]">
    <div
      className={`fixed bottom-0 left-1/2 z-[1000] flex w-full -translate-x-1/2 items-center justify-center transition-all duration-500 xl:py-8! ${
        showBottomNav || isMobile || isTablet
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      {" "}
      <div className="lg:hidden grid grid-cols-5  bg-black gap-0 rounded-t-2xl w-full">
        <button
          onClick={() => handleClick("/")}
          className=" w-full flex text-xl! py-3 text-white p-2 items-center flex-col gap-2"
        >
          <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="white"
              d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z"
            />
          </svg>
          Home
        </button>
        <button
          onClick={() => handleClick("/about-us")}
          className=" w-full flex text-xl! py-3 text-white p-2 items-center flex-col gap-2"
        >
          <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="white"
              d="M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"
            />
          </svg>
          About
        </button>

        <div className="relative">
          <button
            onClick={() => handleClick("/contact")}
            className="absolute overflow-hidden  p-2 -top-10 w-full rounded-2xl flex text-2xl! text-white items-center flex-col gap-2"
          >
            <img
              src={"/img/illustrations/projectIcon.svg"}
              className="w-full h-[73px]! rounded-2xl"

            />
          </button>
        </div>
        <button
          onClick={() => handleClick("/services")}
          className=" w-full flex text-xl! py-3 text-white p-2 items-center flex-col gap-2"
        >
          <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="white"
              d="M233.1 81.3C247.8 70.3 267.2 64 288 64C308.8 64 328.2 70.3 342.9 81.3C357.6 92.3 368 108.6 368 128C368 147.5 357.4 163.9 342.7 174.8C337.5 178.6 336 182.5 336 184.8C336 188.8 339.2 192 343.2 192L400 192C426.5 192 448 213.5 448 240L448 296.8C448 300.8 451.2 304 455.2 304C457.5 304 461.3 302.4 465.2 297.3C476.2 282.6 492.6 272 512 272C531.4 272 547.8 282.5 558.7 297.1C569.6 311.7 576 331.2 576 352C576 372.8 569.7 392.2 558.7 406.9C547.7 421.6 531.4 432 512 432C492.5 432 476.1 421.4 465.2 406.7C461.4 401.5 457.5 400 455.2 400C451.2 400 448 403.2 448 407.2L448 528C448 554.5 426.5 576 400 576L343.2 576C321.5 576 304 558.5 304 536.8C304 520.6 313.9 508.4 323.6 501.2C332.2 494.8 336 487.1 336 480C336 472.9 332.2 465.3 323.7 458.9C315.2 452.5 302.5 448 288 448C273.5 448 260.9 452.4 252.3 458.9C243.7 465.4 240 472.9 240 480C240 487.1 243.8 494.8 252.4 501.2C262.1 508.4 272 520.6 272 536.8C272 558.5 254.5 576 232.8 576L112 576C85.5 576 64 554.5 64 528L64 407.2C64 385.5 81.5 368 103.2 368C119.4 368 131.6 377.9 138.8 387.6C145.2 396.2 152.9 400 160 400C167.1 400 174.7 396.2 181.1 387.7C187.5 379.2 192 366.5 192 352C192 337.5 187.6 324.9 181.1 316.3C174.6 307.7 167.1 304 160 304C152.9 304 145.2 307.8 138.8 316.4C131.6 326.1 119.4 336 103.2 336C81.6 336 64 318.5 64 296.8L64 240C64 213.5 85.5 192 112 192L232.8 192C236.8 192 240 188.8 240 184.8C240 182.5 238.4 178.7 233.3 174.8C218.6 163.8 208 147.4 208 128C208 108.6 218.5 92.2 233.1 81.3zM252.3 106.9C243.7 113.3 240 121 240 128C240 135.1 243.8 142.8 252.4 149.2C262.1 156.4 272 168.6 272 184.8C272 206.4 254.5 224 232.8 224L112 224C103.2 224 96 231.2 96 240L96 296.8C96 300.8 99.2 304 103.2 304C105.5 304 109.3 302.4 113.2 297.3C124.2 282.6 140.6 272 160 272C179.4 272 195.8 282.5 206.7 297.1C217.6 311.7 224 331.2 224 352C224 372.8 217.7 392.2 206.7 406.9C195.7 421.6 179.4 432 160 432C140.5 432 124.1 421.4 113.2 406.7C109.4 401.5 105.5 400 103.2 400C99.2 400 96 403.2 96 407.2L96 528C96 536.8 103.2 544 112 544L232.8 544C236.8 544 240 540.8 240 536.8C240 534.5 238.4 530.7 233.3 526.8C218.6 515.8 208 499.4 208 480C208 460.6 218.5 444.2 233.1 433.3C247.7 422.4 267.2 416 288 416C308.8 416 328.2 422.3 342.9 433.3C357.6 444.3 368 460.6 368 480C368 499.5 357.4 515.9 342.7 526.8C337.5 530.6 336 534.5 336 536.8C336 540.8 339.2 544 343.2 544L400 544C408.8 544 416 536.8 416 528L416 407.2C416 385.5 433.5 368 455.2 368C471.4 368 483.6 377.9 490.8 387.6C497.2 396.2 504.9 400 512 400C519.1 400 526.7 396.2 533.1 387.7C539.5 379.2 544 366.6 544 352C544 337.4 539.6 324.9 533.1 316.3C526.6 307.7 519 304 512 304C504.9 304 497.2 307.8 490.8 316.4C483.6 326.1 471.4 336 455.2 336C433.5 336 416 318.5 416 296.8L416 240C416 231.2 408.8 224 400 224L343.2 224C321.5 224 304 206.5 304 184.8C304 168.6 313.9 156.4 323.6 149.2C332.2 142.8 336 135.1 336 128C336 120.9 332.2 113.3 323.7 106.9C315.2 100.5 302.5 96 288 96C273.5 96 260.9 100.4 252.3 106.9z"
            />
          </svg>
          Services
        </button>
        <button
          onClick={() => handleClick("/contact")}
          className=" w-full flex text-xl! py-3 text-white p-2 items-center flex-col gap-2"
        >
          <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="white"
              d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"
            />
          </svg>
          Contact
        </button>
      </div>
      <div className="bg-white lg:flex hidden border w-fit border-[#E5E7EB] drop-shadow-2xl p-3 items-center gap-2.5 rounded-3xl">
        {/* Left Items */}
        {navItems.slice(0, 2).map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.href)}
            // href={item.href}
            // scroll={true}
            className="font-medium min-w-[124px] max-w-[124px] cursor-pointer  text-center inline-block text-3xl! text-black bg-white hover:bg-[#F3F4F6]! border border-[#E5E7EB] h-[60px] py-4 rounded-2xl"
          >
            {item.label}
          </button>
        ))}

        {/* Center CTA */}
        <button
          onClick={() => handleClick("/landing-page")}
          className="h-[60px] group  relative rounded-2xl flex items-center justify-center cursor-pointer text-center py-4 text-3xl! px-[32px]! overflow-hidden bg-[#4539D2]  text-white text-lg"
        >
          <span className="flex items-center gap-3 ">
            <svg
              width="19"
              height="28"
              viewBox="0 0 19 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7754 4.88379C13.2327 4.88389 15.2684 6.8635 15.2686 9.30762C15.2686 9.41383 15.2658 9.5166 15.2578 9.62207H6.46973C5.24993 9.62208 4.54785 10.5103 4.54785 11.7285C4.5481 12.9428 6.11 14.0254 7.33008 14.0254L13.1152 14.0752C15.222 14.1716 17.1357 16.4197 17.1357 18.833C17.1357 18.8442 17.1358 18.849 17.1357 18.8545H4.6416C3.44666 18.8545 2.6339 19.8109 2.63379 21.0137C2.63379 22.2166 4.46409 23.3113 5.65918 23.3115H14.3564C16.7352 23.6212 18.6679 25.483 18.668 27.9277C18.668 27.95 18.667 27.9779 18.667 28H0.000976562C0.00097455 27.9779 0 27.95 0 27.9277C3.62577e-05 26.4377 0.628295 25.1144 1.72461 24.332C2.65268 23.6661 2.82516 23.2612 2.8252 22.8281C2.8252 22.0905 2.4264 21.8751 2.10547 21.3311C1.68426 20.6183 1.43463 19.7603 1.43457 18.833C1.43457 17.1759 2.26274 15.7856 3.39941 14.957C4.01837 14.5088 4.0745 14.4394 4.35645 14.166C4.85187 13.683 4.74898 12.9821 4.49414 12.6904C3.78318 11.879 3.35156 10.7384 3.35156 9.30762C3.35173 6.86354 5.4856 4.88395 7.93945 4.88379H10.7754ZM9.33496 0C10.047 0.000247351 10.6269 0.579873 10.627 1.29297C10.627 2.00514 10.0471 2.58569 9.33496 2.58594C8.62189 2.58594 8.04102 2.00529 8.04102 1.29297C8.04109 0.579721 8.62194 0 9.33496 0Z"
                fill="white"
              />
            </svg>
            Start A Project
          </span>

          {/* <Image
            alt=""
            className="absolute -end-2 -top-2"
            src="/img/illustrations/byte-loop-background.svg"
            width={146}
            height={146}
          /> */}
          <div className="absolute -left-80 w-[65px] h-[200px] rounded-full bg-white blur-[70px] -rotate-30 group-hover:animate-[buttonShine_1.2s_linear_infinite]" />
        </button>

        {/* Right Items */}
        {navItems.slice(2).map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.href)}
            className="font-medium min-w-[124px] max-w-[124px] text-center cursor-pointer inline-block text-3xl! text-black bg-white hover:bg-[#F3F4F6]! border border-[#E5E7EB] h-[60px] py-4 rounded-2xl"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
