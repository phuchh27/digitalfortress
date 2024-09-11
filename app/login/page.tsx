"use client";
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";

export default function page() {
  return (
    <div className="flex justify-around items-center h-[100vh] ">
      <div className="w-[50%]">
        <div className="py-[32px] max-w-[496px] mx-auto ">
          <div className="flex boder-2 border-white w-full">
            <h3 className="text-[36px]">Hello, </h3>{" "}
            <h2 className="text-[36px] font-bold bg-gradient-to-t from-blue-600 via-[#89deea]  to-[#89deea] inline-block text-transparent bg-clip-text">
              Digital Fortress
            </h2>
          </div>
          <p className="pt-6 text-lg font-medium text-gray-500">
            Log in to platform to start creating magic
          </p>
          <div className="flex flex-col gap-9 mt-16">
            <div className="relative h-9">
              <label htmlFor="email" className="absolute z-50 top-3 left-4 ">
                <TfiEmail size={24} />
              </label>
              <input
                id="email"
                type="text"
                className="text-lg pl-14 z-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:shadow-md focus:shadow-emerald-400 bg-gray-900 rounded-lg px-6 py-3 fixed w-[496px] "
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="absolute z-50 top-3 left-4 ">
                <CiLock size={24} />
              </label>
              <input
                id="password"
                type="password"
                className=" text-lg pl-14 focus:outline-none  focus:ring-2 focus:ring-emerald-400 focus:shadow-md focus:shadow-emerald-400 bg-gray-900 rounded-lg px-6 py-3 fixed w-[496px] "
                placeholder="Password"
              />
            </div>
            <div className=" mt-12 flex justify-between">
              <div className=" flex gap-3">
                <input
                  id="remember-me"
                  type="checkbox"
                  placeholder=""
                  className="w-6 h-6 bg-gray-500 outline-gray-500"
                />
                <label htmlFor="remember-me" className="text-lg">
                  Remember me
                </label>
              </div>
              <p  className="cursor-pointer text-lg bg-gradient-to-r from-[#85cfcd] via-[#89deea]  to-[#8bc9aa] inline-block text-transparent bg-clip-text ">
                Forgot Password
              </p>
            </div>
            <button className=" w-full bg-[#b6f09c] rounded-2xl py-2 px-6 h-12 text-lg text-black font-bold">
              Login
            </button>
            <p className="text-lg text-gray-300">
              Don&apos;t have an account?{" "}
              <a className=" cursor-pointer bg-gradient-to-r from-[#85cfcd] via-[#89deea]  to-[#8bc9aa] inline-block text-transparent bg-clip-text text-xl font-bold ">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="boder-2 border-white w-[50%] flex justify-start items-end ">
        <div className=" max-w-[608px] mx-auto absolute bottom-14 flex flex-col gap-14 pl-14">
          <h3 className=" text-[32px] font-medium">
            Digital Fortress has been a game-changer for our content creation
            process.
          </h3>
          <h3 className=" text-[32px] font-medium">
            The AI-powered tools are incredibly user-friendly and have saved us
            countless hours of work.
          </h3>
          <div className="">
            <p className=" font-bold text-xl">Lily Alisson</p>
            <p className=" font-medium text-sm text-[#B6F09C]">
              CMO at Digital Fortress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
