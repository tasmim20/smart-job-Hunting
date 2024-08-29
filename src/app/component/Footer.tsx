import React from "react";
import { Settings, ArrowUp, Headphones, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f4f6ff" }}
      className=" text-gray-600 relative"
    >
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 mb-4">
            <div className="flex items-center mb-4">
              <div
                style={{ backgroundColor: "#3e94e4" }}
                className=" rounded-full p-2 mr-2"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span style={{ color: "#3e94e4" }} className="text-xl font-bold ">
                JobHunting
              </span>
            </div>
            <p className="mb-4">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>
            <div className="flex items-center">
              <svg
                style={{ color: "#3e94e4" }}
                className="w-5 h-5  mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>JobHunting@job.com</span>
            </div>
          </div>

          {/* Useful Links */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {[
                "Find a Job",
                "Companies",
                "About Us",
                "Post a Job",
                "Testimonial",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-purple-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-4">Category</h3>
            <ul className="space-y-2">
              {[
                "UI Designer",
                "UX Designer",
                "Graphic Designer",
                "Web Developers",
                "More",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-purple-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="mb-4">
              Sign up to our archi. point to recent updates & office
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                style={{ backgroundColor: "#3e94e4" }}
                className=" text-white px-2 py-2 rounded-r-md hover:bg-purple-700 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 py-8 text-center">
        <p>Copyright © 2023 DexignZone. All Rights Reserved.</p>
      </div>

      {/* Fixed buttons */}
      <button
        className="fixed top-30 right-4 bg-white p-2 rounded-full shadow-md"
        aria-label="Settings"
      >
        <Settings className="w-6 h-6 text-gray-600" />
      </button>
      <button
        className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-gray-600" />
      </button>
    </footer>
  );
};

export default Footer;
