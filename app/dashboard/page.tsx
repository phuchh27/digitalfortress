import React from "react";
import Header from "../header/Header";
import Navbar from "../navBar/Navbar";
import Dashboard from "./Dashboard";

export default function page() {
  return (
    <div className="flex">
      <div className=" h-100vh">
        <Navbar />
      </div>
      <div className="w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
