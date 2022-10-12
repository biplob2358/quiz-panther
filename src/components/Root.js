import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
