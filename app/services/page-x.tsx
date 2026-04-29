/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BottomNav from "@/components/BottomNav";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Testimonials from "@/components/homes/home-1/Testimonials";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import Services from "@/components/other-pages/services/Services";
import ServiceCard from "@/components/ServiceCard";
import StackCards from "@/components/animation/StackCards";
import { PolygonIcon } from "@/public/icons";
import OfficeContactCard from "@/components/OfficeContactCard.tsx";
import ProcessStepCard from "@/components/ProcessStepCard";

const steps = [
  {
    step: "Step 1",
    title: "Discover",
    description:
      "We begin by understanding your business, audience, competitors, and current product challenges. Through discovery calls, audits, stakeholder workshops, and user research, we uncover the real problems behind the brief so every design decision starts with clarity, not assumptions.",
    image: "/img/icons/discover.png",
  },
  {
    step: "Step 2",
    title: "Define",
    description:
      "Once the insights are clear, we shape them into a focused product direction. We define user flows, priorities, feature scope, success metrics, and a clear execution roadmap so your team knows exactly what we are building, why it matters, and how it will move forward.",
    image: "/img/icons/define.png",
  },
  {
    step: "Step 3",
    title: "Design",
    description:
      "Our senior designers translate strategy into clean, conversion-focused interfaces. From low-fidelity wireframes to high-fidelity UI, interactive prototypes, and design systems, every screen is crafted to feel intuitive, visually strong, and ready for real users.",
    image: "/img/icons/design.png",
  },
  {
    step: "Step 4",
    title: "Test",
    description:
      "Before launch, we validate the experience through usability reviews, accessibility checks, responsive testing, stakeholder feedback, and real-world interaction scenarios. This helps us catch friction early and refine the product until it feels smooth, clear, and reliable.",
    image: "/img/icons/test.png",
  },
];

const Page = () => {
  return (
    <div>
      <MobileMenu />

      <div className="container mx-auto max-w-7xl py-[64px]! md:py-[96px]!">
        <div className="w-full! relative  flex items-center justify-between bg-linear-to-b from-[#0568BF] to-[#070928]   rounded-[50px]! py-[72px]! px-[60px]!">
          <div className="space-y-[28px]!">
            <p className="  text-[48px]! leading-[120%]! font-semibold! text-white">
              Got a product idea? <br />
              <span className=" font-playfair ! text-white">
                {" "}
                Let&apos;s design it..
              </span>
            </p>

            <button className="bg-red-500">btn</button>
          </div>

          <img
            src={"/img/backgrounds/ceo-mohsin.png"}
            className="absolute w-auto! end-32 bottom-0"
          />
        </div>
      </div>

      <div className="bg-[#FAF7F6] py-16! md:py-24!">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-10!">
          <div className="flex flex-col items-center justify-center w-full gap-[20px]! pb-[48px]!">
            <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[18px]! font-medium!">
                Discover · Design · Deliver
              </p>
            </div>
            <p className="  text-[48px]! leading-[120%]! font-semibold! text-gray-950">
              How we
              <span className=" font-playfair ! "> work.</span>
            </p>

            <p className="text-center text-gray-800! text-[20px] w-10/12">
              From discovery to delivery, we follow a focused process that keeps
              your product clear, user-friendly, and built for measurable
              growth.
            </p>
          </div>

          <div className="max-w-[1120px] w-full space-y-[32px]!">
            {steps.map((item: any, index: number) => (
              <ProcessStepCard
                key={index}
                step={item.step}
                title={item.title}
                description={item.description}
                image={item.image}
                imageAlt={item.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black py-24! bg-[url(/img/illustrations/industry.png)]  bg-no-repeat bg-center w-full">
        <div className="container mx-auto max-w-7xl relative overflow-hidden ">
          <div className="mb-[48px]!">
            <div className="flex flex-col items-center gap-4! md:gap-6! px-12!">
              <div className="py-[8px]! px-[20px]! border-b! bg-white/20 border-white! rounded-full flex flex-row items-center gap-[8px]!">
                <PolygonIcon fill="white" />
                <p className="text-white! text-[18px]! font-medium!">
                  Who we are
                </p>
              </div>

              <h2 className="text-[48px]! leading-[120%]! font-semibold! text-white">
                Design trusted across{" "}
                <span className=" font-playfair ! ">every industry.</span>
              </h2>

              <p className="text-gray-300! text-center font-normal text-[20px]!">
                Hire a design team that already understands your space.
                We&apos;ve 15 years of designing products across healthcare,
                fintech, SaaS, e-commerce, enterprise and 10+ more industries so
                you skip the ramp-up and start building faster, smarter, better.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4! md:gap-8! mb-[52px]!">
            <div className="md:col-span-2 ">
              <div className="flex gap-4 mb-4">
                <img
                  src="/img/services/SaaS1.jpg"
                  className="h-[256px]! object-cover rounded-3xl!"
                  alt=""
                />
                <img
                  src="/img/services/HealthcareApp.jpg"
                  className="h-[256px]! object-cover rounded-3xl!"
                  alt=""
                />
              </div>

              <img
                src="/img/services/EnterpriseWeb2.jpg"
                className="h-[408px]! object-cover rounded-3xl!"
                alt=""
              />
            </div>

            <img
              src="/img/services/FintechApp.jpg"
              className="h-full! object-cover rounded-3xl!"
              alt=""
            />
          </div>

          <h2 className="text-center">Add Primary butn label Book a Call</h2>
        </div>
      </div>

      <div className="bg-white py-24! ">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6! md:gap-12! items-center">
            <div>
              <div className="flex flex-col items-start gap-[20px]! ">
                <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
                  <PolygonIcon />
                  <p className="text-[#4939D2]! text-[18px]! font-medium!">
                    Who we are
                  </p>
                </div>
                <p className="  text-[48px]! leading-[120%]! font-normal! text-gray-950">
                  Global design and development studio for
                  <br />
                  <span className=" font-playfair ! ">products that grow.</span>
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-[20px]!">
                  We&apos;re a global design and development studio crafting
                  products that turn ideas into measurable business growth,
                  shipping high-performing digital products across 15+
                  industries.
                </p>

                <h2>Add Primary butn label Book a Call</h2>
              </div>
            </div>

            <div className="">
              <img
                src="img/illustrations/who_we_are.png"
                className="object-cover rounded-4xl!"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF7F6] py-16! md:py-24!">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10!">
          <div className="flex flex-col items-start gap-[20px]! pb-[48px]!">
            <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[18px]! font-medium!">
                Industry Expertise
              </p>
            </div>
            <p className="  text-[48px]! leading-[120%]! font-normal! text-gray-950">
              One Office
              <br />
              <span className=" font-playfair ! ">Global Reach</span>
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-4! md:gap-8!">
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="London Office"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
          </div>
        </div>
      </div>

      <StackCards>
        <ServiceCard
          title="UI/UX & Product Design."
          description="We design intuitive, user-centered digital experiences that keep people engaged. From research and wireframes to high-fidelity prototypes, every interaction is crafted with purpose to solve real user problems and drive business results."
          image="/img/illustrations/uiux_bg.jpg"
          imageAlt="UI UX product design"
          features={[
            { label: "Research-Driven Decisions" },
            { label: "Scalable Systems" },
            { label: "Strategic UX Thinking" },
            { label: "Data-Informed Design" },
            { label: "UI/UX Design" },
            { label: "Usability Design" },
          ]}
          avatars={[
            {
              src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "Client 1",
            },
            {
              src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "Client 2",
            },
            {
              src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
              alt: "Client 3",
            },
            {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              alt: "Client 4",
            },
          ]}
          buttonIcon="/img/illustrations/actBtn.png"
          onClick={() => console.log("Clicked")}
        />
      </StackCards>

      <Services />
      <ParallaxBanner />
      <Testimonials />

      <BottomNav />

      <div className="mxd-section overflow-hidden! scroll-mt-32" id="contactus">
        <div className="mxd-container max-w-8xl! mx-auto ">
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Page;
