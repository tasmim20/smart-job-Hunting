import React from "react";
import { Check } from "lucide-react";
import cv from "../../../public/assets/cv.png";
import Image from "next/image";

const WeDeliver = () => {
  const features = [
    "Proven CV Templates to increase Hiring Chance",
    "Creative and Clean Templates Design",
    "Easy and Intuitive Online CV Builder",
    "Free to use. Developed by hiring professionals.",
    "Fast Easy CV and Resume Formatting",
    "Recruiter Approved Phrases.",
  ];

  return (
    <div className="container max-w-6xl  mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-2 mb-2">
            {[
              "bg-blue-500",
              "bg-red-500",
              "bg-yellow-500",
              "bg-green-500",
              "bg-indigo-500",
              "bg-purple-500",
              "bg-pink-500",
            ].map((color, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${color}`}
              ></div>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-navy-blue mb-4">
            We Deliver The Best
          </h1>

          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start space-x-4"
              >
                <Check className="w-5 h-5 text-white rounded-full p-1 bg-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 lg:left-72">
          <Image src={cv} alt="CV template" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default WeDeliver;
