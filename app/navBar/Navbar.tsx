"use client";
import React, { useEffect, useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { AiOutlineSpotify } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
export default function Navbar() {
  const [activeBtn, setActiveBtn] = useState("dashboard");
  useEffect(() => {
    console.log("click");
  }, [activeBtn]);
  return (
    <div className="max-w-[312px] bg-[#0D0F10] h-[100vh]">
      <div className="h-16 flex justify-between p-3">
        <div className=" max-w-11">
          <h2 className="bg-gradient-to-r from-[#610c99] via-[#8f3a5d]  to-[#ee4c24] inline-block text-transparent bg-clip-text text-3xl font-bold uppercase">
            Digital Fortress
          </h2>
        </div>
        <button>
          <FaCircleChevronLeft color="red" size={20} />{" "}
        </button>
      </div>
      <hr className=" bg-gray-700 h-[1px] mt-[50px] border-0" />
      <div className=" py-5 px-2 border-t-1 border-gray-300 w-[312px] mt-10">
        <button
          onClick={() => setActiveBtn("dashboard")}
          className={`${
            activeBtn === "dashboard" && " bg-[#b6f09c] text-black"
          } w-full py-2 px-2 rounded-lg text-gray-500 flex gap-3`}
        >
          <GrDocumentPerformance size={24} />
          Dashboard
        </button>
        <button
          onClick={() => setActiveBtn("task")}
          className={`${
            activeBtn === "task" && " bg-[#b6f09c] text-black"
          } w-full py-2 px-2 rounded-lg text-gray-500 flex gap-3`}
        >
          <BiTask size={24} />
          Task
        </button>
        <button
          onClick={() => setActiveBtn("project")}
          className={`${
            activeBtn === "project" && " bg-[#b6f09c] text-black"
          } w-full py-2 px-2 rounded-lg text-gray-500 flex gap-3`}
        >
          <AiOutlineSpotify size={24} />
          Project
        </button>
        <button
          onClick={() => setActiveBtn("schedule")}
          className={`${
            activeBtn === "schedule" && " bg-[#b6f09c] text-black"
          } w-full py-2 px-2 rounded-lg text-gray-500 flex gap-3`}
        >
          <AiOutlineSchedule size={24} />
          Schedule
        </button>
      </div>
    </div>
  );
}
