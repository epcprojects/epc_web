import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function About() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <div className="px-4 py-3  font-semibold text-black border-2! text-3xl! border-black w-fit rounded-full">
                    What Makes Us Different
                  </div>
                  <RevealText as="h2" className="reveal-type anim-uni-in-up">
                    Design That Solves Real Problems
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      Great products don’t need explanation. We design
                      experiences that feel natural, reduce friction, and guide
                      users effortlessly from first interaction to conversion.
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                                  Research-Driven Decisions
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                                  Strategic UX Thinking
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                            </ul>
                          </div>
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                                  Scalable Systems
                                </p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                                <p className="anim-uni-in-up flex items-center gap-4">
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
                      <AnimatedButton
                        text="Start a Project"
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href={`/`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
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
