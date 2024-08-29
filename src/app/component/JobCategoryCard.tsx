import React from "react";

const CategoryCard = ({ title, jobCount, isHighlighted = false }: any) => (
  <div
    style={{ color: "#3e94e4" }}
    className={`p-6 rounded-lg text-center border shadow-sm py-10 transition-colors duration-300 ${
      isHighlighted
        ? "bg-indigo-600 text-white"
        : "bg-indigo-50 hover:bg-indigo-600 hover:text-white"
    }`}
  >
    <h3
      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
        isHighlighted ? "text-white" : "text-gray-800 hover:text-white"
      }`}
    >
      {title}
    </h3>
    <p
      className={`transition-colors duration-300 ${
        isHighlighted
          ? "text-indigo-100"
          : "text-indigo-600 hover:text-indigo-100"
      }`}
    >
      {jobCount} Posted New Jobs
    </p>
  </div>
);

const JobCategoryCard = () => {
  const categories = [
    { title: "UI/Ux Design", jobCount: "100+" },
    { title: "Illustration", jobCount: "200+" },
    { title: "Cool Art", jobCount: "150+" },
    { title: "Web Design", jobCount: "100+" },
    { title: "Produt Design", jobCount: "110+" },
    { title: "Developer", jobCount: "250+" },
    { title: "Animation", jobCount: "150+" },
    { title: "100+ More Category", jobCount: "", isHighlighted: true },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">
          Jobs Category
        </p>
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4">
          Choose Your Desire Category
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          There are many variations of passages of available, but the majority
          have suffered some form, by injected humour, or look even slightly
          believable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              jobCount={category.jobCount}
              isHighlighted={category.isHighlighted}
            />
          ))}
        </div>
      </div>

      {/* Floating buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <button className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
        <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default JobCategoryCard;
