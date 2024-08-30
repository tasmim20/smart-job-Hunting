import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Header from "../component/Header";
import JobCategoryCard from "../component/JobCategoryCard";

import TestimonialSection from "../component/TestimonialSection";
import WeDeliver from "../component/WeDeliver";
import WhyUs from "../component/WhyUs";
import CvResumeTemplate from "../component/cvResumeTemplate";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <Categories />
        <JobCategoryCard />
        <CvResumeTemplate />
        <WhyUs />
        <WeDeliver />
        <TestimonialSection />
      </div>
    </div>
  );
}
