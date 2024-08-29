import React from "react";
import { Settings, Headphones, ShoppingCart } from "lucide-react";
import amazon from "../../../public/assets/amazon.png";
import google from "../../../public/assets/google.png";
import microsoft from "../../../public/assets/microsoft.png";
import man from "../../../public/assets/man.png";
import Image from "next/image";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "#f4f6ff" }}
      className="min-h-screen bg-gradient-to-br flex flex-col relative overflow-hidden pt-5"
    >
      {/* Net background */}
      <div className="absolute inset-0 bg-net opacity-10"></div>

      <header className="w-full h-6 p-4 flex justify-end z-10">
        {/* <Settings className="h-6 w-6" /> */}
      </header>

      <main className="flex-grow flex flex-col lg:flex-row items-center px-8 lg:px-16 z-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p style={{ color: "#3e94e4" }} className="font-semibold mb-2">
            We Have 208,000+ Live Jobs
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Your <span style={{ color: "#3e94e4" }}>Dream Job</span> Is <br />{" "}
            Waiting For You
          </h1>
          <p style={{ color: "#3e94e4" }} className="mb-6">
            Type your keyword, then click search to find your perfect job.
          </p>

          <div className="bg-white shadow-md flex flex-col lg:flex-row items-center mb-4 max-w-xl py-1">
            <input
              type="text"
              placeholder="Job Title, Keywords"
              className="px-4 py-2 focus:outline-none w-full lg:w-1/2 mb-2 lg:mb-0"
            />
            <input
              type="text"
              placeholder="City Or Postcode"
              className="px-4 py-2 focus:outline-none w-full lg:w-1/3 mb-2 lg:mb-0"
            />
            <button
              style={{ backgroundColor: "#3e94e4" }}
              className="text-white px-6 py-2 mx-2 rounded-sm text-sm hover:bg-purple-700 transition-colors w-full lg:w-auto"
            >
              Find Job
            </button>
          </div>

          <p className="text-sm text-gray-600">
            <span className="text-black font-medium">Popular Searches :</span>{" "}
            Designer, Senior, Architecture, iOS, Etc.
          </p>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Man image centered within the container */}
          <Image
            src={man}
            width={250} // Smaller width for smaller devices
            height={350} // Smaller height for smaller devices
            alt="Professional man"
            className="relative z-20 lg:w-[400px] lg:h-[650px]" // Larger size on larger screens
          />
          {/* Rotating circles, hidden on smaller screens */}
          <div className="hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[650px] h-[650px] border-2 border-dashed border-purple-300 rounded-full animate-spin-slow relative">
                <Image
                  src={amazon}
                  width={50}
                  height={50}
                  alt="Amazon logo"
                  className="absolute left-[75%] translate-x-[-75%] p-2"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[550px] h-[550px] border-2 border-dashed border-purple-400 rounded-full animate-spin-reverse relative">
                <Image
                  src={google}
                  width={50}
                  height={50}
                  alt="Google logo"
                  className="absolute left-0 top-[75%] translate-y-[-75%] p-2"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] border-2 border-dashed border-purple-500 rounded-full animate-spin-slow">
                <Image
                  src={microsoft}
                  width={50}
                  height={50}
                  alt="Microsoft logo"
                  className="absolute top-0 left-[75%] translate-x-[-75%] p-2 animate-spin-reverse"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed left-4 bottom-4 flex flex-col space-y-4 z-10">
        <div className="bg-teal-500 p-2 rounded-full shadow-md">
          <Headphones className="text-white bg-teal-500 h-6 w-6" />
        </div>
        <div className="bg-green-500 p-2 rounded-full shadow-md">
          <ShoppingCart className="text-white bg-green-500 h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Home;
