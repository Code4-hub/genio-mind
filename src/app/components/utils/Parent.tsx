import React, { ReactElement } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

type Prompts = {
  childern: ReactElement;
};

export const Parent: React.FC<Prompts> = ({ childern }) => {
  return (
    <div className="container">
      <Navbar />
      {childern}
      <Footer />
    </div>
  );
};
