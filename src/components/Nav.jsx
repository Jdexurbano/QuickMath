/** @format */

import React from "react";

function Nav() {
  return (
    <>
      <nav className="px-[100px] flex justify-between items-center py-[25px] bg-primary">
        <div>
          <h1 className="font-bold text-[25px] text-slate-200">QuickMath</h1>
        </div>
        <div className=" w-[700px]">
          <ul className="flex justify-evenly">
            <li className="font-bold text-[25px] text-slate-200">Addition</li>
            <li className="font-bold text-[25px] text-slate-200">
              Subtraction
            </li>
            <li className="font-bold text-[25px] text-slate-200">
              Multiplication
            </li>
            <li className="font-bold text-[25px] text-slate-200">Division</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
