import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ content, dropdown, heading }) => {
  return (
    <>
      <div
        style={{ left: 132, top: 158 }}
        className={dropdown?.open ? "dropdown" : "d-none"}
      >
        <div className="dropdown-item">Joined Groups</div>
        <div className="dropdown-item">Other Groups</div>
      </div>

      <div className="sidebar">
        <Header />
        <SidebarContent
          content={content}
          dropdown={dropdown}
          heading={heading}
        />
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
