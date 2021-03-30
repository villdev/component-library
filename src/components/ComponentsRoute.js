import React from "react";
import Sidebar from "./Sidebar";
import Component from "./Component";
import RightSidebar from "./RightSidebar";

export default function ComponentsRoute() {
  return (
    <div className="main-content-wrapper">
      <Sidebar />
      <Component />
      <RightSidebar />
    </div>
  );
}
