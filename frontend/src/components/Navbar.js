import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/CompositeLayer.png";
import { useLocation } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

function Navbar() {
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between  text-white bg-transparent p-6">
      <div className="relative">
        <img src={logo} alt="" className="" />
        {open && (
          <div className="flex-col flex justify-evenly w-2/5 md:items-center md:hidden transition-all">
            <Link
              to="/"
              className={
                path === "/"
                  ? "hover:scale-125 transition-all p-3 active:bg-indigo-900 border-l-2"
                  : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
              }
            >
              Home
            </Link>
            <Link
              to={"/assigned"}
              className={
                path === "/assigned"
                  ? "hover:scale-125 transition-all p-3 active:bg-indigo-900 border-l-2"
                  : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
              }
            >
              Assigned
            </Link>
            <Link
              to={"/classes"}
              className={
                path === "/classes"
                  ? "hover:scale-125 transition-all p-3 active:bg-indigo-900 border-l-2"
                  : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
              }
            >
              Classes
            </Link>
            <Link
              to={"/dashboard"}
              className={
                path === "/dashboard"
                  ? "hover:scale-125 transition-all p-3 active:bg-indigo-900 border-l-2"
                  : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
              }
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
      <div className=" ">
        <MenuIcon
          onClick={() => setOpen(!open)}
          className={
            open
              ? "md:hidden mb-48 p-1 rounded-full hover:bg-slate-500 transition-colors duration-200"
              : "md:hidden p-1 rounded-full hover:bg-slate-500 transition-colors duration-200"
          }
          height={30}
        />
      </div>

      <div className="md:flex hidden justify-evenly w-2/5 items-center">
        <Link
          to="/"
          className={
            path === "/"
              ? "hover:scale-125 transition-all p-3 active:bg-indigo-900  drop-shadow-md scale-150"
              : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
          }
        >
          Home
        </Link>
        <Link
          to={"/assigned"}
          className={
            path === "/assigned"
              ? "hover:scale-125 transition-all p-3 active:bg-indigo-900  drop-shadow-md scale-150"
              : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
          }
        >
          Assigned
        </Link>
        <Link
          to={"/classes"}
          className={
            path === "/classes"
              ? "hover:scale-125 transition-all p-3 active:bg-indigo-900  drop-shadow-md scale-150"
              : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
          }
        >
          Classes
        </Link>
        <Link
          to={"/dashboard"}
          className={
            path === "/dashboard"
              ? "hover:scale-125 transition-all p-3 active:bg-indigo-900  drop-shadow-md scale-150"
              : "hover:scale-125 transition-all p-3 active:bg-indigo-900"
          }
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
