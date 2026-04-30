"use client";
import Link from "next/link";
import footerNav from "@/data/footer-nav.json";
import socials from "@/data/socials.json";
import AnimatedButton from "../animation/AnimatedButton";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";
import {
  ArrowUpIcon,
  BahrainFlagIcon,
  ButtonLines,
  CallIcon,
  FacebookFooterIcon,
  FiverIcon,
  InstagramFooterIcon,
  LinkedinFooterIcon,
  LocationIcon,
  LondonFlagIcon,
  PakFlagIcon,
  UpworkIcon,
  XFooterIcon,
  YoutubeFooterIcon,
} from "@/public/icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

export default function Footer2({ text = "rayosttudio" }: { text?: string }) {
  const router = useRouter();
  return (
    // <footer id="mxd-footer" className="mxd-footer mt-12! md:mt-32!">
    //   {/* Footer Block - Fullwidth Text Start */}
    //   {/* <div className="mxd-footer__text-wrap">
    //     <div className=" py-6! md:py-12! mb-12!">
    //       <Link href={`/`} className="">
    //         <Image
    //           alt="logo epc"
    //           src={"img/logoHorizontal.svg"}
    //           width={40}
    //           height={40}
    //           className="h-180! "
    //         />
    //       </Link>
    //     </div>
    //   </div> */}
    //   {/* Footer Block - Fullwidth Text End */}
    //   {/* Footer Block - Info Columns Start */}
    //   <div className="mxd-footer__footer-blocks">
    //     {/* single column */}
    //     <div className="footer-blocks__column animate-card-3">
    //       {/* inner card */}
    //       <div className="footer-blocks__card fullheight-card">
    //         {/* footer navigation */}
    //         <div className="flex! flex-col gap-4 md:gap-8">
    //           <Link href={`/`} className="">
    //             <Image
    //               alt="logo epc"
    //               src={"img/logoHorizontal.svg"}
    //               width={40}
    //               height={40}
    //               className=" w-100!"
    //             />
    //           </Link>
    //           <h2 className="text-2xl! md:text-4xl! font-normal! leading-normal">
    //             Are you ready to elevate your brand’s digital presence?I lead an
    //             exceptional team of UX/UI designers, researchers, 3D artists,
    //             and webmasters.
    //           </h2>

    //           <AnimatedButton
    //             text="Contact Us"
    //             target="_black"
    //             className="btn w-fit! mt-4! btn-anim btn-default btn-mobile-icon bg-black text-white slide-right"
    //             href=""
    //           >
    //             <i className="ph-bold ph-arrow-up-right" />
    //           </AnimatedButton>

    //           <div className="flex mt-16! gap-4">
    //             <div className="relative group">
    //               <a
    //                 href="https://www.upwork.com/agencies/1735503164466835456/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <img
    //                   alt="Upwork"
    //                   src={"/img/icons/upwork.svg"}
    //                   width={24}
    //                   height={24}
    //                   className="w-16! h-16!"
    //                 />
    //               </a>

    //               <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
    //                 <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
    //                   Top Rated Plus
    //                   <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="relative group">
    //               <a
    //                 href="https://pro.fiverr.com/freelancers/templateplanet"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <img
    //                   alt="Fiverr"
    //                   src={"/img/icons/fiverr.svg"}
    //                   width={24}
    //                   height={24}
    //                   className="w-16! h-16!"
    //                 />
    //               </a>

    //               <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
    //                 <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
    //                   Pro Seller Agency
    //                   <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="relative group">
    //               <a
    //                 href="https://clutch.co/profile/endpoint-clients"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <img
    //                   alt="Fiverr"
    //                   src={"/img/icons/clutch.svg"}
    //                   width={24}
    //                   height={24}
    //                   className="w-16! h-16! rounded-full"
    //                 />
    //               </a>

    //               <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
    //                 <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
    //                   Leading Design Agency
    //                   <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="relative group">
    //               <a
    //                 href="https://clutch.co/profile/endpoint-clients"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <img
    //                   alt="Fiverr"
    //                   src={"img/icons/techbehemothsSvg.svg"}
    //                   width={20}
    //                   height={20}
    //                   className=" w-16! h-16! rounded-full"
    //                 />
    //               </a>

    //               <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
    //                 <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
    //                   Leading Design Agency
    //                   <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         {/* links */}
    //         <div className="footer-blocks__links anim-uni-in-up">
    //           <AnimatedButton
    //             text="Privacy Policy"
    //             as={"a"}
    //             className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
    //             href="#"
    //           >
    //             <i className="ph ph-arrow-right" />
    //           </AnimatedButton>
    //           <AnimatedButton
    //             text="Terms &amp; conditions"
    //             as={"a"}
    //             className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
    //             href="#"
    //           >
    //             <i className="ph ph-arrow-right" />
    //           </AnimatedButton>
    //         </div>
    //       </div>
    //     </div>
    //     {/* single column */}
    //     <div className="footer-blocks__column animate-card-3">
    //       {/* inner card */}
    //       <div className="footer-blocks__card">
    //         <p className="mxd-point-subtitle anim-uni-in-up">
    //           <svg
    //             width="20"
    //             height="20"
    //             viewBox="0 0 64 64"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M64 32.0007C38.0951 35.3677 35.3662 38.0966 31.9993 64.0015C28.6338 38.0951 25.9049 35.3662 0 32.0007C25.9049 28.6338 28.6338 25.9049 32.0007 0C35.3677 25.9049 38.0966 28.6338 64.0015 32.0007H64Z"
    //               fill="black"
    //             />
    //           </svg>
    //           <a href="mailto:info@endpointclients.com?subject=Message%20from%20your%20site">
    //             info@endpointclients.com
    //           </a>
    //         </p>
    //       </div>
    //       {/* inner card */}
    //       <div className="footer-blocks__card">
    //         <p className="mxd-point-subtitle anim-uni-in-up">
    //           <svg
    //             width="20"
    //             height="20"
    //             viewBox="0 0 64 64"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M64 32.0007C38.0951 35.3677 35.3662 38.0966 31.9993 64.0015C28.6338 38.0951 25.9049 35.3662 0 32.0007C25.9049 28.6338 28.6338 25.9049 32.0007 0C35.3677 25.9049 38.0966 28.6338 64.0015 32.0007H64Z"
    //               fill="black"
    //             />
    //           </svg>
    //           <a href="tel:+447598981921">+447598981921</a>
    //         </p>
    //       </div>
    //       {/* inner card */}
    //       <div className="footer-blocks__card fill-card notify">
    //         {/* card title */}
    //         <div className="footer-blocks__title anim-uni-in-up">
    //           <p className="footer-blocks__title-m">
    //             Subscribe to our insights:
    //           </p>
    //         </div>
    //         {/* subscribe form container */}
    //         <div className="form-container anim-uni-in-up">
    //           {/* reply messages */}
    //           <div className="form__reply subscription-ok">
    //             <span className="reply__text">
    //               Done! Thanks for subscribing.
    //             </span>
    //           </div>
    //           <div className="form__reply subscription-error">
    //             <span className="reply__text">
    //               Ooops! Something went wrong. Please try again later.
    //             </span>
    //           </div>
    //           {/* subscribe form */}
    //           <SubscribeForm />
    //         </div>
    //       </div>
    //     </div>
    //     {/* single column */}
    //     <div className="footer-blocks__column animate-card-3">
    //       {/* inner card */}
    //       <div className="footer-blocks__card fullheight-card">
    //         {/* nav block */}
    //         <div className="footer-blocks__block">
    //           {/* card title */}
    //           <div className="footer-blocks__title anim-uni-in-up">
    //             <p className="footer-blocks__title-l">Review</p>
    //           </div>
    //           {/* footer socials */}
    //           <div className="footer-blocks__socials">
    //             <ul className="footer-socials">
    //               {socials.map((social, i) => (
    //                 <li key={i} className="footer-socials__item anim-uni-in-up">
    //                   <a
    //                     href={social.url}
    //                     className="footer-socials__link"
    //                     target="_blank"
    //                   >
    //                     {social.title}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //         {/* links */}
    //         <div className="footer-blocks__links anim-uni-in-up">
    //           <p className="t-xsmall t-muted">
    //             <i className="ph-bold ph-copyright" />
    //             {new Date().getFullYear()} Endpoint Clients | All Rights
    //             Reserved.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Footer Block - Info Columns End */}
    // </footer>
    <footer className="relative pt-[64px]! pb-[120px]! ">
      <Image
        alt="logo epc"
        src={"/img/footer/footer-gradient.png"}
        fill
        className="object-cover object-center -z-10 "
      />
      <div className="container max-w-7xl mx-auto px-[16px]! lg:px-[32px]! flex flex-col gap-[24px] lg:gap-[64px]">
        <div className="flex flex-col items-center md:items-start gap-[24px] lg:gap-[40px]">
          <Link href={`/`} className="">
            <Image
              alt="logo epc"
              src={"img/footer/footer-logo.svg"}
              width={40}
              height={40}
              className="md:h-180! h-30! "
            />
          </Link>
          <div className="flex flex-col md:flex-row items-center w-full justify-between lg:gap-0 gap-[12px]!">
            <div className="flex flex-col items-center! md:items-start! gap-3 max-w-[693px]!">
              <span className="text-[16px] md:text-[20px]! text-center md:text-start! font-normal! text-gray-50!">
                Are you ready to elevate your brand’s digital presence? I lead
                an exceptional team of UX/UI designers, researchers, 3D artists,
                and webmasters.
              </span>
              <div className="flex items-center  gap-4 ">
                <div className="relative group">
                  <a
                    href="https://www.upwork.com/agencies/1735503164466835456/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Upwork"
                      src={"/img/icons/upwork.svg"}
                      width={40}
                      height={40}
                      className="w-[40px]! h-[40px]!"
                    />
                  </a>

                  <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                    <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                      Top Rated Plus
                      <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a
                    href="https://pro.fiverr.com/freelancers/templateplanet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Fiverr"
                      src={"/img/icons/fiverr.svg"}
                      width={40}
                      height={40}
                      className="w-[40px]! h-[40px]!"
                    />
                  </a>

                  <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                    <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                      Pro Seller Agency
                      <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a
                    href="https://clutch.co/profile/endpoint-clients"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Fiverr"
                      src={"/img/icons/clutch.svg"}
                      width={40}
                      height={40}
                      className="w-[40px]! h-[40px]! rounded-full"
                    />
                  </a>

                  <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                    <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                      Leading Design Agency
                      <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <a
                    href="https://techbehemoths.com/company/endpoint-clients-ui-ux-design-agency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Fiverr"
                      src={"img/icons/techbehemothsSvg.svg"}
                      width={40}
                      height={40}
                      className="w-[40px]! h-[40px]! rounded-full"
                    />
                  </a>

                  <div className="pointer-events-none absolute left-1/2 bottom-[120%] z-20 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100!">
                    <div className="relative rounded-md bg-black px-3 py-2 text-lg! text-white shadow-lg whitespace-nowrap">
                      Leading Design Agency
                      <div className="absolute left-1/2 -bottom-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full! lg:w-auto! ">
              <PrimaryButton
              label="Contact Us"
              className="w-full"
              onClick={() => {
                router.push("/contact");
              }}
            />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-between">
          <div className="flex flex-col gap-6 2xl:min-w-[385px]!">
            <h4 className="text-[17px]! font-semibold! uppercase text-white">
              Quick Link
            </h4>

            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Services
              </Link>

              <Link
                href="/about-us"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 2xl:min-w-[385px]!">
            <h4 className="text-[17px]! font-semibold! uppercase text-white">
              SERVICES
            </h4>

            <div className="flex flex-col gap-4">
              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                UI/UX Design
              </Link>

              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Web & Mobile App
              </Link>

              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Ai & ML Development
              </Link>
              <Link
                href="/services"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Branding
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 2xl:min-w-[385px]!">
            <h4 className="text-[17px]! font-semibold! uppercase text-white">
              Review
            </h4>

            <div className="flex flex-col gap-4">
              <Link
                href="https://clutch.co/profile/endpoint-clients"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Clutch
              </Link>

              <Link
                href="https://techbehemoths.com/company/endpoint-clients-ui-ux-design-agency"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Techbehmoths
              </Link>

              <Link
                href="https://techreviewer.co/companies/endpoint-clients-ltd"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Techreviewer
              </Link>

              <Link
                href="https://www.designrush.com/"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Designrush
              </Link>
              <Link
                href="https://www.goodfirms.co/company/endpoint-clients-ltd"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Goodfirms
              </Link>
              <Link
                href="https://www.trustpilot.com/review/endpointclients.com"
                target="_blank"
                className="text-[16px]! font-normal! text-gray-300! hover:text-white transition-colors"
              >
                Trustpilot
              </Link>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[16px] md:gap-[24px]">
          <div className="bg-black/50 rounded-[32px]! p-[28px]! flex flex-col gap-[20px]">
            <div className="flex flex-row gap-6 items-center">
              <div className="shrink-0">
                <PakFlagIcon />
              </div>
              <p className="text-[24px]! font-semibold! text-white!">
                Pakistan
              </p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <LocationIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  New City Phase 2, Block F, Street 6B, Wah Cantt, Pakistan
                </p>
              </div>
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <CallIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  +92 333 5586757
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/50 rounded-[32px]! p-[28px]! flex flex-col gap-[20px]">
            <div className="flex flex-row gap-6 items-center">
              <div className="shrink-0">
                <BahrainFlagIcon />
              </div>
              <p className="text-[24px]! font-semibold! text-white!">Bahrain</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <LocationIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  Flat No. 11, Building 1694, Road 968, Block 909, East Riffa,
                  Southern Governorate, Bahrain
                </p>
              </div>
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <CallIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  +973 3557 9427
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/50 rounded-[32px]! p-[28px]! flex flex-col gap-[20px]">
            <div className="flex flex-row gap-6 items-center">
              <div className="shrink-0">
                <LondonFlagIcon />
              </div>
              <p className="text-[24px]! font-semibold! text-white!">
                United Kingdom
              </p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <LocationIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  71-75 Shelton Street, Covent Garden London WC2H 9JQ United
                  Kingdom
                </p>
              </div>
              <div className="flex flex-row gap-[10px] ">
                <div className="shrink-0">
                  <CallIcon />
                </div>
                <p className="text-[16px]! font-normal! text-gray-200!">
                  +44 7598 981921
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-0 gap-[16px]! px-[32px]!">
          <p className="text-[16px]! text-center md:text-start font-normal! text-white!">
            © {new Date().getFullYear()} Endpoint Clients | All Rights Reserved.
          </p>
          <div className="flex flex-row md:justify-start justify-center gap-[17px]!">
            <Link
              href={"https://www.facebook.com/endpointclients"}
              target="_blank"
              className="w-[32px]! h-[32px]! flex items-center justify-center "
            >
              <FacebookFooterIcon />
            </Link>
            <Link
              href={"https://www.instagram.com/endpointclients/"}
              target="_blank"
              className="w-[32px]! h-[32px]! flex items-center justify-center "
            >
              <InstagramFooterIcon />
            </Link>
            <Link
              href={"https://www.youtube.com/@EndPointClients."}
              target="_blank"
              className="w-[32px]! h-[32px]! flex items-center justify-center "
            >
              <YoutubeFooterIcon />
            </Link>
            <Link
              href={"https://x.com/Endpointclients"}
              target="_blank"
              className="w-[32px]! h-[32px]! flex items-center justify-center "
            >
              <XFooterIcon />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/endpoint-clients/"}
              target="_blank"
              className="w-[32px]! h-[32px]! flex items-center justify-center "
            >
              <LinkedinFooterIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
