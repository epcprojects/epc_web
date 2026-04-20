"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/landing-page" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

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
  return (
    <div className="fixed md:py-8! bottom-0  left-1/2 w-full flex items-center justify-center bg-linear-to-b from-white/0 to-white   -translate-x-1/2 z-[1000]">
      <div className="grid grid-cols-5 hidden bg-red-500 overflow-hidden gap-0 rounded-t-2xl w-full">
        {navItems.slice(0, 2).map((item, index) => (
          <button
            className="bg-green-500 w-full flex text-2xl! text-white p-2 items-center flex-col gap-2"
            key={index}
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
        ))}
        {navItems.slice(0, 2).map((item, index) => (
          <button
            className="bg-green-500 w-full flex text-2xl! text-white p-2 items-center flex-col gap-2"
            key={index}
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
        ))}
      </div>

      <div className="bg-white md:flex hidden border w-fit border-[#E5E7EB] drop-shadow-2xl p-3 items-center gap-2.5 rounded-3xl">
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
          className="h-[60px] flex items-center gap-3 relative rounded-2xl cursor-pointer text-center py-4 text-3xl! px-[32px]! overflow-hidden bg-[#4539D2] hover:bg-[#2c1dd1] text-white text-lg"
        >
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
          <Image
            alt=""
            className="absolute -end-2 -top-2"
            src="/img/illustrations/byte-loop-background.svg"
            width={146}
            height={146}
          />
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
