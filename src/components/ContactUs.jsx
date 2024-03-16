import React from "react";
import { useFormik } from "formik";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Title from "./Title";
import Fade from "./animation/Fade";
import ContactUsSchema from "../validation-schemas/ContactUsSchema";
import { toast } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactUsSchema,
    onSubmit: async (values, action) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/accounts/contact/",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          toast.success(response.data.message);
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        toast.error("Error!");
      } finally {
        action.resetForm();
        action.setSubmitting(false);
      }
    },
  });
  return (
    <div className="pb-24 px-14">
      <div className="container mx-auto">
        <div className="text-center">
          <Title title="Get In Touch" />
        </div>
        <div className="flex flex-row justify-between pt-16 px-16 text-white">
          <div>
            <Fade direction="right" delay={0.2}>
              <p className="text-xl pe-32">
                Please feel welcome to visit our space anytime and see what our
                community has built.
              </p>
            </Fade>
            <Fade direction="right" delay={0.2}>
              <div className="flex flex-row items-center text-lg mt-12">
                <MdOutlineEmail />
                <p className="ps-2 pe-2 md:pe-0">krishidhaan22@gmail.com</p>
              </div>
              <div className="flex flex-row items-center text-lg my-8">
                <FaPhoneAlt />
                <p className="ps-2">+ 081-520001</p>
              </div>
              <div className="flex flex-row items-center text-lg my-8">
                <MdLocationOn />
                <p className="ps-2">KTM, Nepal</p>
              </div>
            </Fade>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
            className="w-2/4 h-[360px]"
          >
            <div className="h-[64px]">
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your full name"
                className="w-full border-gray-300 rounded-md p-2 text-black"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </div>
            <div className="h-[64px]">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-md p-2 text-black"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="h-[64px]">
              <input
                type="string"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your phone number"
                className="w-full border-gray-300 rounded-md p-2 text-black"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              )}
            </div>
            <div className="h-[64px]">
              <textarea
                type="string"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Write your message here!!"
                className="w-full border-gray-300 rounded-md p-2 text-black"
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm">
                  {formik.errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="text-white border border-white hover:bg-white hover:text-[#05202A] py-2 px-8 rounded-md focus:outline-none focus:shadow-outline-blue mt-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
