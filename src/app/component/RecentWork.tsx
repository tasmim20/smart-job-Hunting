import React from "react";
import { Settings, ArrowUp } from "lucide-react";
import recentwork from "../../../public/assets/download.svg";
import man1 from "../../../public/assets/man1.png";
import Image from "next/image";

const RecentWork = () => {
  return (
    <div className="relative w-full min-h-screen container max-w-7xl mx-auto bg-white overflow-hidden">
      {/* Purple background shape */}
      <div className="absolute top-0 right-0 w-1/24 h-full bg-purple-600 transform skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-purple-600 font-semibold mb-2 block">
              Recent Job
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Over all 10,00+ Talented People Registered in Our Website
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
              Join Now
            </button>
          </div>

          {/* Image placeholder */}
          <div className="relative flex-1">
            <div className="absolute inset-0 hidden md:flex justify-center items-end z-10">
              <Image
                src={recentwork}
                alt="Download Background"
                className="opacity-30 "
              />
            </div>
            <div className="relative z-20 ">
              <Image
                src={man1}
                width={500}
                height={500}
                alt="Talented person"
                className="mb-24"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Settings icon */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
        <Settings className="w-6 h-6 text-gray-600" />
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
        <ArrowUp className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default RecentWork;
