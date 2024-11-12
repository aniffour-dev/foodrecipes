import React from "react";
import RecentPosts from "@/app/components/Dynamic/Sidebar/RecentPosts";
import About from "@/app/components/Dynamic/Sidebar/About";
import SideNewsletter from "@/app/components/Dynamic/Sidebar/Newsletter";
import { Archivo } from "next/font/google";
import Link from "next/link";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

const Contact = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto mb-16">
      <div className="lg:flex gap-16">
        <div className="lg:w-9/12 lg:border-r-[1px] lg:border-slate-200 lg:pr-10">
          <article>
            <h1
              className={`${archivo.className} text-2xl md:text-4xl text-gray-950 mb-10 text-center decoration-amber-500 font-bold underline`}
            >
              Contact Us
            </h1>
          </article>
          <section>
            <p className="text-slate-800 font-normal text-md mb-2.5">
              We&#39;d love to hear from you! Whether you have a question about
              tire maintenance, feedback on our content, or just want to share
              your automotive experiences, feel free to get in touch.
            </p>
            <p className="text-slate-800 font-normal text-md mb-2.5">
              You can reach us at{" "}
              <Link
                href="mailto:hello@foudrecipes.com"
                className="font-semibold transition-all hover:text-amber-600"
              >
                hello@foudrecipes.com,
              </Link>{" "}
              and we&#39;ll respond as soon as possible.
            </p>
            <p className="text-slate-800 font-normal text-md">
              Stay connected with us for updates, new tire guides, and vehicle
              maintenance tips. We&#39;ll here to help make your driving
              experience both safe and smooth!
            </p>
            <form action="" className="mt-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-950"
                  >
                    First Name{" "}
                    <span className="text-red-500 relative top-[2px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full mt-1 border border-slate-200 bg-white font-semibold text-amber-950 rounded-md py-4 px-4 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-900"
                  >
                    Last Name{" "}
                    <span className="text-red-500 relative top-[2px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full mt-1 border border-slate-200 bg-white font-semibold text-amber-950 rounded-md py-4 px-4 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-900"
                  >
                    Address Email{" "}
                    <span className="text-red-500 relative top-[2px]">*</span>
                  </label>
                  <input
                    type="email"
                    name="address_email"
                    placeholder="Address Email"
                    className="w-full mt-1 border border-slate-200 bg-white font-semibold text-gray-900 rounded-md py-4 px-4 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-sm font-semibold text-gray-900"
                  >
                    Subject
                    <span className="text-red-500 relative top-[2px]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full mt-1 border border-slate-200 bg-white font-semibold text-gray-900 rounded-md py-4 px-4 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-6 mb-6">
                <label
                  htmlFor=""
                  className="text-sm font-semibold text-gray-900"
                >
                  Comment or Message{" "}
                  <span className="text-red-500 relative top-[2px]">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write anything..."
                  className="w-full mt-1 border border-slate-200 bg-white h-48 max-h-48 max-w-full font-semibold text-gray-900 rounded-md py-4 px-4 outline-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="px-6 py-3 bg-orange-600 transition-all hover:bg-amber-700 text-white font-bold rounded-md"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
        <div className="lg:w-3/12">
          <About />
          <SideNewsletter />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default Contact;
