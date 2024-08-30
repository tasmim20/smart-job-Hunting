import Image from "next/image";
import banner2 from "../../../public/assets/banner2.png";
const CvResumeTemplate = () => {
  return (
    <div className=" bg-white">
      <main>
        <div className="max-w-7xl mx-auto py-20 mb-16 sm:px-6 lg:px-8">
          {/* Main content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-5xl font-bold text-blue-900 mb-4 mt-5">
                  Online CV Builder With Creative Templates.
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Our Perfect resume builder takes the hassle out of resume
                  writing. Choose from several templates and follow easy prompts
                  to create the perfect job-ready resume.
                </p>
                <div className="space-x-4">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded">
                    Choose Template
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className=" h-64 w-full rounded-lg mb-5">
                  <Image src={banner2} width={550} height={550} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CvResumeTemplate;
