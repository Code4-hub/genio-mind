import React from "react";
import { NavbarDashBoard } from "./components/utils/NavbarDashBoard";
import { TabsLinks } from "./components/utils/LinksTab";

export const Dashoard = () => {
  return (
    <div className="relative ">
      <NavbarDashBoard />
      <TabsLinks />
    </div>
  );
};
