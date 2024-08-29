import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
