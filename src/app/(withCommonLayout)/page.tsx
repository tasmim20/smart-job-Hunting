import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Header from "../component/Header";
import JobCategoryCard from "../component/JobCategoryCard";
import RecentWork from "../component/RecentWork";
// import TestimonialSection from "../component/TestimonialSection";

import WeDeliver from "../component/WeDeliver";
import WhyUs from "../component/WhyUs";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <Categories />
        <JobCategoryCard />
        <WhyUs />
        <WeDeliver />
        <RecentWork />
      </div>

      {/* <TestimonialSection /> */}
    </div>
  );
}
