"use client";
import BottomNav from "@/components/BottomNav";
import ContactForm, { initialValues } from "@/components/ContactForm";
import Footer2 from "@/components/footers/Footer2";
import MobileMenu from "@/components/headers/MobileMenu";
import Hero from "@/components/other-pages/contact/Hero";
import Facts from "@/components/homes/home-software-development-company/Facts";
import ParallaxBanner from "@/components/homes/home-web-agency/ParallaxBanner";
import About from "@/components/homes/home-software-development-company/About";
import { PolygonIcon } from "@/public/icons";
import OfficeContactCard from "@/components/OfficeContactCard.tsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "@/schemas/contact";
const Page = () => {
  const handleSubmit = async (
    values: typeof initialValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { resetForm, setSubmitting }: any,
  ) => {
    try {
      console.log("Submitted values:", values);

      // API call here
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // });

      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* <MobileMenu /> */}
      <Hero />

      <div className="bg-[#160A2B]">
        <div className="rounded-t-[50px] overflow-hidden  bg-[white]">
          <div className="bg-[#FAF7F6]">
            <div className="container mx-auto max-w-7xl py-[64px]! md:py-[96px]!">
              <div className="grid grid-cols-2 gap-[24px]!">
                <div className="w-full relative h-full min-h-120 p-[40px]! rounded-4xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute left-0 top-0  w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1776247016/BG_21_ec7n75.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <div className="relative flex flex-col justify-between h-full">
                    <div className="space-y-[24px]!">
                      <h2 className="text-white font-semibold! text-[60px]!">
                        Share Your Vision With US
                      </h2>
                      <p className="text-white! text-[20px]!">
                        Tell us about your idea. We’ll start with a call to
                        understand your goals and define the right approach,
                        then turn it into a clear, well-designed product.
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        className="w-24! h-24!"
                        src="/img/backgrounds/ceo-contact.png"
                        alt=""
                      />

                      <div>
                        <h2 className="font-semibold text-white text-[20px]!">
                          Mohsin Irshad
                        </h2>
                        <span className="text-white font-normal text-[14px]!">
                          CEO Endpointclients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" bg-white shadow-2xl w-full rounded-4xl px-6! py-10! md:px-16! md:py-14!">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={contactSchema}
                      onSubmit={handleSubmit}
                      validateOnBlur={false}
                    >
                      {({ isSubmitting, touched, errors }) => (
                        <Form className="space-y-16!">
                          <div>
                            <label
                              htmlFor="fullName"
                              className="mb-3 block text-[18px]! font-semibold! text-black"
                            >
                              Full Name
                            </label>
                            <Field
                              id="fullName"
                              name="fullName"
                              type="text"
                              placeholder="Jane Cooper"
                              className={`w-full  border-b-2! py-2! h-16!  bg-transparent text-[16px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                touched.fullName && errors.fullName
                                  ? "border-b-red-500!"
                                  : "border-b-black!"
                              }`}
                            />
                            <ErrorMessage
                              name="fullName"
                              component="p"
                              className="mt-1 text-[14px]! text-red-500"
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="companyName"
                                className="mb-3 block text-[18px]! font-semibold! text-black"
                              >
                                Company name
                              </label>
                              <Field
                                id="companyName"
                                name="companyName"
                                type="text"
                                placeholder="Ex. Tesla Inc"
                                className={`w-full  border-b-2! py-2! h-16! bg-transparent text-[16px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                  touched.companyName && errors.companyName
                                    ? "border-b-red-500!"
                                    : "border-b-black!"
                                }`}
                              />
                              <ErrorMessage
                                name="companyName"
                                component="p"
                                className="mt-2 text-[14px]! text-red-500"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="mb-3 block text-[18px]! font-semibold! text-black"
                              >
                                Email*
                              </label>
                              <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="You@Example.Com"
                                className={`w-full  border-b-2! py-2! h-16! bg-transparent text-[16px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                  touched.email && errors.email
                                    ? "border-b-red-500!"
                                    : "border-b-black!"
                                }`}
                              />
                              <ErrorMessage
                                name="email"
                                component="p"
                                className="mt-2 text-[14px]! text-red-500"
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor="serviceRequired"
                                className="mb-3 block text-[18px]! font-semibold! text-black"
                              >
                                Service required*
                              </label>
                              <Field
                                as="select"
                                id="serviceRequired"
                                name="serviceRequired"
                                className={`w-full  border-b-2! py-2! h-16! bg-transparent text-[16px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                  touched.serviceRequired &&
                                  errors.serviceRequired
                                    ? "border-b-red-500!"
                                    : "border-b-black!"
                                }`}
                              >
                                <option value="">Select Your Service</option>
                                <option value="ui-ux-design">
                                  UI/UX Design
                                </option>
                                <option value="web-design">Web Design</option>
                                <option value="web-development">
                                  Web Development
                                </option>
                                <option value="branding">Branding</option>
                              </Field>
                              <ErrorMessage
                                name="serviceRequired"
                                component="p"
                                className="mt-2 text-[14px]! text-red-500"
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor="projectBudget"
                                className="mb-3 block text-[18px]! font-semibold! text-black"
                              >
                                Project budget*
                              </label>
                              <Field
                                as="select"
                                id="projectBudget"
                                name="projectBudget"
                                className={`w-full  border-b-2! py-2! h-16! bg-transparent text-[16px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                  touched.projectBudget && errors.projectBudget
                                    ? "border-b-red-500!"
                                    : "border-b-black!"
                                }`}
                              >
                                <option value="">Select Your Range</option>
                                <option value="1k-5k">$1k - $5k</option>
                                <option value="5k-10k">$5k - $10k</option>
                                <option value="10k-25k">$10k - $25k</option>
                                <option value="25k+">$25k+</option>
                              </Field>
                              <ErrorMessage
                                name="projectBudget"
                                component="p"
                                className="mt-2 text-[14px]! text-red-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="projectDetails"
                              className="block text-[18px]! font-semibold! text-black"
                            >
                              Project details*
                            </label>
                            <Field
                              as="textarea"
                              id="projectDetails"
                              name="projectDetails"
                              rows={2}
                              placeholder="Tell us more about your idea"
                              className={`w-full resize-none border-b-2! h-48! overflow-y-scroll border-b-black!  bg-transparent pb-3 text-[18px]! font-normal text-black outline-none placeholder:text-[#6e6e6e] focus:ring-0 ${
                                touched.projectDetails && errors.projectDetails
                                  ? "border-b-red-500!"
                                  : "border-b-black!"
                              }`}
                            />
                            <ErrorMessage
                              name="projectDetails"
                              component="p"
                              className="mt-2 text-[14px]! text-red-500"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-full bg-[#05080d] px-8 py-3.5 cursor-pointer text-[20px] font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSubmitting ? "Sending..." : "Send inquiry"}
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF7F6]">
<About />
      </div>
      
      <ParallaxBanner
        bottomSpacerValue={0}
        topSpacerValue={0}
        videoUrl="https://res.cloudinary.com/dgbdcdqd1/video/upload/q_auto/f_auto/v1775646599/d_dcnt5q.mp4"
      />
      <div className="bg-[#FAF7F6] relative flex items-start justify-center flex-col py-[64px]! md:py-[96px]!">
        <img
          src="/img/services/services-cube.png"
          className="w-auto! -left-1/12 absolute"
          alt=""
        />

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10!">
          <div className="flex flex-col items-start gap-[20px]! pb-[48px]!">
            <div className="py-[8px]! px-[20px]! border! border-[#4939D2]! rounded-full flex flex-row items-center gap-[8px]!">
              <PolygonIcon />
              <p className="text-[#4939D2]! text-[18px]! font-medium!">
               Location
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
              flagSrc="/img/icons/pakistanFlag.svg"
              flagAlt="Pakistan Flag"
              title="Pakistan"
              address="H8, S6, Block F, New City Phase 2 Islamabad 47040 Pakistan"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
            <OfficeContactCard
              flagSrc="/img/icons/bahrainFlag.svg"
              flagAlt="Bahrain Flag"
              title="Bahrain"
              address="Flat No. 11, Building 1694, Road 968, Block 909, East Riffa, Southern Governorate, Bahrain"
              email="info@endpointclients.com"
              phone="+97335579427"
            />
            <OfficeContactCard
              flagSrc="/img/icons/ukFlag.svg"
              flagAlt="United Kingdom flag"
              title="United Kingdom"
              address="71-75 Shelton Street, Covent Garden London WC2H 9JQ United Kingdom"
              email="info@endpointclients.com"
              phone="+44 7598 981921"
            />
          </div>
        </div>
      </div>
      <div className="pt-[32px]!">
  <Facts />
      </div>
    
      {/* <ParallaxBanner /> */}
      {/* <>
        <div className="mxd-section loading-wrap relative flex flex-col justify-center items-center h-fit! mxd-hero-section min-h-dvh mxd-hero-fullheight">
          <div className="mxd-container max-w-8xl! mx-auto mxd-hero-01">
            <ContactForm />
          </div>
        </div>
      </> */}
      <BottomNav />

      <Footer2 />
    </>
  );
};

export default Page;
