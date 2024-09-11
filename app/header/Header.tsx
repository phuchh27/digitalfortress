import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { GoBell } from "react-icons/go";
export default function Header() {
  return (
    <div className="w-ful p-6 h-24 rounded-2xl border-1 border-[#131619] bg-[#0D0F10] flex justify-between items-center">
      <div className="rounded-xl bg-[#1A1D21] w-[360px] h-12 flex justify-start items-center gap-3 p-3">
        <label htmlFor="search" className="">
          <CiSearch size={30} />
        </label>
        <input
          id="search"
          type="text"
          className="focus:outline-none 
        border-transparent 
        focus:border-transparent
        focus:ring-0 
        h-full w-[80%] bg-[#1A1D21]"
          placeholder="search anything "
        />
      </div>
      <div className="flex gap-8">
        <BiMessageDetail size={30} />
        <GoBell size={30} />
        <div className=" rounded-full w-10 h-10 bg-orange-400 "></div>
      </div>
    </div>
  );
}
