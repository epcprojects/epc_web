"use client";
import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { PolygonIcon } from "@/public/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    // mxd-section padding-default
    // mxd-container grid-container
    <div className="container max-w-7xl mx-auto px-[16px]! lg:px-[32px]! pb-[30px]! lg:pb-[96px]!">
      <div className=" space-y-[20px]!">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="py-[8px]! px-[16px]! lg:px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!  w-fit ">
          <PolygonIcon />
          <p className="text-[#4939D2]! text-[16px]! lg:text-[18px]! font-medium!">
            What Makes Us Different
          </p>
        </div>
        <div className="mxd-block ">
          <div className="container-fluid px-0">
            <div className="row gx-0 ">
              <div className="col-12 col-xl-6 mxd-grid-item no-margin px-[0px]!">
                <div className="mxd-block__name">
                  <RevealText
                    as="h2"
                    className="reveal-type anim-uni-in-up text-[36px]! lg:text-[48px]! font-semibold!"
                  >
                    Design That
                    <br />
                    Solves{" "}
                    <span className="font-playfair !">Real Problems</span>
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin px-[0px]!">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up text-[18px]! lg:text-[24px]!">
                      Great products don’t need explanation. We design
                      experiences that feel natural, reduce friction, and guide
                      users effortlessly from first interaction to conversion.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0 ">
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-[12px]!">
                          <div className=" ">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-[12px]! text-[18px]! ">
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
                                  15+ Years of Experience
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4 text-[18px]!">
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
                                  1,200+ Projects Shipped
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4 text-[18px]!">
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
                                  </svg>{" "}
                                  Top-Rated on Upwork & Fiverr
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4 text-[18px]!">
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
                                  </svg>{" "}
                                  Data-Informed Design
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4 text-[18px]!">
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
                                  </svg>{" "}
                                  Clean Interfaces
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4 text-[18px]!">
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
                                  </svg>{" "}
                                  Continuous Optimization
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <PrimaryButton
                        label="Start a Project"
                        onClick={() => {
                          router.push("/contact");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
