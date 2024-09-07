import Footer from "@/components/Shared/Footer";
import React from "react";

const DashboardLayout = ({ chlidren }) => {
  return (
    <div>
      <div className="min-h-screen">{chlidren}</div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
