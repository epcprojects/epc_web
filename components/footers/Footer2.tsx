import Link from "next/link";
import footerNav from "@/data/footer-nav.json";
import socials from "@/data/socials.json";
import AnimatedButton from "../animation/AnimatedButton";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";

export default function Footer2({ text = "rayosttudio" }: { text?: string }) {
  return (
    <footer id="mxd-footer" className="mxd-footer mt-12! md:mt-32!">
      {/* Footer Block - Fullwidth Text Start */}
      {/* <div className="mxd-footer__text-wrap">
        <div className=" py-6! md:py-12! mb-12!">
          <Link href={`/`} className="">
            <Image
              alt="logo epc"
              src={"img/logoHorizontal.svg"}
              width={40}
              height={40}
              className="h-180! "
            />
          </Link>
        </div>
      </div> */}
      {/* Footer Block - Fullwidth Text End */}
      {/* Footer Block - Info Columns Start */}
      <div className="mxd-footer__footer-blocks">
        {/* single column */}
        <div className="footer-blocks__column animate-card-3">
          {/* inner card */}
          <div className="footer-blocks__card fullheight-card">
            {/* footer navigation */}
            <div className="flex! flex-col gap-4 md:gap-8">
              <Link href={`/`} className="">
                <Image
                  alt="logo epc"
                  src={"img/logoHorizontal.svg"}
                  width={40}
                  height={40}
                  className=" w-100!"
                />
              </Link>
              <h2 className="text-2xl! md:text-4xl! font-normal! leading-normal">
                Are you ready to elevate your brand’s digital presence?I lead an
                exceptional team of UX/UI designers, researchers, 3D artists,
                and webmasters.
              </h2>

              <AnimatedButton
                text="Contact Us"
                target="_black"
                className="btn w-fit! mt-4! btn-anim btn-default btn-mobile-icon bg-black text-white slide-right"
                href=""
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>

              <div className="flex mt-16! gap-4">
                <div className="relative group">
                  <a
                    href="https://www.upwork.com/agencies/1735503164466835456/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Upwork"
                      src={"/img/icons/upwork.svg"}
                      width={24}
                      height={24}
                      className="w-16! h-16!"
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
                      width={24}
                      height={24}
                      className="w-16! h-16!"
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
                      width={24}
                      height={24}
                      className="w-16! h-16! rounded-full"
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
                    href="https://clutch.co/profile/endpoint-clients"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Fiverr"
                      src={"img/icons/techbehemothsSvg.svg"}
                      width={20}
                      height={20}
                      className=" w-16! h-16! rounded-full"
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
            {/* links */}
            <div className="footer-blocks__links anim-uni-in-up">
              <AnimatedButton
                text="Privacy Policy"
                as={"a"}
                className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                href="#"
              >
                <i className="ph ph-arrow-right" />
              </AnimatedButton>
              <AnimatedButton
                text="Terms &amp; conditions"
                as={"a"}
                className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                href="#"
              >
                <i className="ph ph-arrow-right" />
              </AnimatedButton>
            </div>
          </div>
        </div>
        {/* single column */}
        <div className="footer-blocks__column animate-card-3">
          {/* inner card */}
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg
                width="20"
                height="20"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32.0007C38.0951 35.3677 35.3662 38.0966 31.9993 64.0015C28.6338 38.0951 25.9049 35.3662 0 32.0007C25.9049 28.6338 28.6338 25.9049 32.0007 0C35.3677 25.9049 38.0966 28.6338 64.0015 32.0007H64Z"
                  fill="black"
                />
              </svg>
              <a href="mailto:info@endpointclients.com?subject=Message%20from%20your%20site">
                info@endpointclients.com
              </a>
            </p>
          </div>
          {/* inner card */}
          <div className="footer-blocks__card">
            <p className="mxd-point-subtitle anim-uni-in-up">
              <svg
                width="20"
                height="20"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32.0007C38.0951 35.3677 35.3662 38.0966 31.9993 64.0015C28.6338 38.0951 25.9049 35.3662 0 32.0007C25.9049 28.6338 28.6338 25.9049 32.0007 0C35.3677 25.9049 38.0966 28.6338 64.0015 32.0007H64Z"
                  fill="black"
                />
              </svg>
              <a href="tel:+447598981921">+447598981921</a>
            </p>
          </div>
          {/* inner card */}
          <div className="footer-blocks__card fill-card notify">
            {/* card title */}
            <div className="footer-blocks__title anim-uni-in-up">
              <p className="footer-blocks__title-m">
                Subscribe to our insights:
              </p>
            </div>
            {/* subscribe form container */}
            <div className="form-container anim-uni-in-up">
              {/* reply messages */}
              <div className="form__reply subscription-ok">
                <span className="reply__text">
                  Done! Thanks for subscribing.
                </span>
              </div>
              <div className="form__reply subscription-error">
                <span className="reply__text">
                  Ooops! Something went wrong. Please try again later.
                </span>
              </div>
              {/* subscribe form */}
              <SubscribeForm />
            </div>
          </div>
        </div>
        {/* single column */}
        <div className="footer-blocks__column animate-card-3">
          {/* inner card */}
          <div className="footer-blocks__card fullheight-card">
            {/* nav block */}
            <div className="footer-blocks__block">
              {/* card title */}
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-l">Review</p>
              </div>
              {/* footer socials */}
              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {socials.map((social, i) => (
                    <li key={i} className="footer-socials__item anim-uni-in-up">
                      <a
                        href={social.url}
                        className="footer-socials__link"
                        target="_blank"
                      >
                        {social.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* links */}
            <div className="footer-blocks__links anim-uni-in-up">
              <p className="t-xsmall t-muted">
                <i className="ph-bold ph-copyright" />
                {new Date().getFullYear()} Endpoint Clients | All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Block - Info Columns End */}
    </footer>
  );
}
