import React from "react";
import { Search, FileText, UserPlus, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Cover-letter/Email",
    description: "The standard chunk of used below of those interested.",
  },
  {
    icon: FileText,
    title: "CV/Resume",
    description: "The standard chunk of used below of those interested.",
  },
  {
    icon: UserPlus,
    title: "Currency Converter",
    description: "The standard chunk of used below of those interested.",
  },
  {
    icon: CheckCircle,
    title: "Apply Them",
    description: "The standard chunk of used below of those interested.",
  },
];

const StepCard = ({ Icon, title, description }: any) => (
  <div className="group relative p-6 rounded-lg shadow-md flex flex-col items-center text-center bg-white transition-transform duration-300 hover:scale-105 overflow-hidden">
    <div
      style={{ backgroundColor: "#3e94e4" }}
      className=" p-3 rounded-full mb-4 transition-all duration-300 group-hover:bg-blue-800 z-10"
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-white z-10">
      {title}
    </h3>
    <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-white z-10">
      {description}
    </p>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

const Categories = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center my-4">
          Follow Easy 4 Steps
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              Icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
