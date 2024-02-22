import React from "react";
import CitiesNavbar from "./_components/cities-navbar";

const OnAirLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CitiesNavbar />
      <div className="ml-10 mr-10">{children}</div>
    </div>
  );
};

export default OnAirLayout;
