/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="px-[100px] flex justify-between items-center py-[25px] bg-primary">
        <div>
          <h1 className="font-bold text-[25px] text-slate-200">QuickMath</h1>
        </div>
        <div className=" w-[700px]">
          <ul className="flex justify-evenly">
            <Link className="font-bold text-[25px] text-slate-200" to="/">
              Addition
            </Link>
            <Link
              className="font-bold text-[25px] text-slate-200"
              to="/subtraction"
            >
              Subtraction
            </Link>
            <Link
              className="font-bold text-[25px] text-slate-200"
              to="/multiplication"
            >
              Multiplication
            </Link>
            <Link
              className="font-bold text-[25px] text-slate-200"
              to="/division"
            >
              Division
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
