"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

export const contactSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  companyName: Yup.string().trim().required("Company name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  serviceRequired: Yup.string().required("Please select a service"),
  projectBudget: Yup.string().required("Please select a budget range"),
  projectDetails: Yup.string()
    .trim()
    .min(10, "Project details must be at least 10 characters")
    .required("Project details are required"),
});

export const initialValues = {
  fullName: "",
  companyName: "",
  email: "",
  serviceRequired: "",
  projectBudget: "",
  projectDetails: "",
};

export default function ContactForm() {
  const handleSubmit = async (
    values: typeof initialValues,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { resetForm, setSubmitting, setStatus }: any,
  ) => {
    try {
      setStatus(null);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      resetForm();
      setStatus({
        type: "success",
        message: "Your inquiry has been sent successfully.",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "We could not send your inquiry. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className=" h-full py-8 px-[16px]! md:px-18! md:py-36! relative flex! items-center w-full rounded-[20px]! lg:rounded-[56px]! overflow-hidden bg-neutral-900">
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
      <div className="container mx-auto lg:max-w-8xl py-[16px]! lg:py-0!   md:px-8 gap-10! grid grid-cols-1 md:grid-cols-2 relative">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            <h2 className=" text-white text-[36px]! lg:text-[50px]! font-semibold!">
              Let’s <span className="font-playfair">Design Products</span>{" "}
              <br /> user remembers.
            </h2>
            <p className="text-[20px]! leading-normal text-white md:text-[30px]!">
              Tell us about your idea. We’ll start with a call to understand
              your goals and define the right approach, then turn it into a
              clear, well-designed product.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-78!">
            <Image
              alt=""
              src={"/img/team/CEO-mohsin.jpg"}
              className="w-78! h-78! rounded-4xl"
              width={280}
              height={280}
            />
            <div>
              <h2 className="text-3xl! text-white">Mohsin Irshad</h2>
              <h3 className="text-xl! text-white">CEO Endpointclients</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-end items-end">
          <div className=" bg-[#f3f3f3] w-full rounded-4xl px-6! py-10! md:px-16! md:py-14!">
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
              validateOnBlur={false}
            >
              {({ isSubmitting, touched, errors, status }) => (
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

                  <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
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
                          touched.serviceRequired && errors.serviceRequired
                            ? "border-b-red-500!"
                            : "border-b-black!"
                        }`}
                      >
                        <option value="">Select Your Service</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="web-design">Web Design</option>
                        <option value="web-development">Web Development</option>
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

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-[#05080d] px-8 py-3.5 cursor-pointer text-[20px] font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send inquiry"}
                    </button>
                    {status?.message ? (
                      <p
                        className={`text-center text-[15px]! font-medium ${
                          status.type === "success"
                            ? "text-green-600!"
                            : "text-red-600!"
                        }`}
                      >
                        {status.message}
                      </p>
                    ) : null}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="w-full text-white mt-3 max-w-[580px] lg:min-w-[580px]">
            Not Interested to submit the form?{" "}
            <a
              target="_blank"
              href="https://calendly.com/endpointclients/30min"
              className="font-bold border-b! border-b-white"
            >
              Book A Call Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
