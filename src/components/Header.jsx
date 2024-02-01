import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <p className="md:text-4xl text-2xl">
            <span className="md:text-8xl text-4xl">H</span> Reader
          </p>
          <nav className="hidden md:block">
            <ul className="flex gap-5 items-center">
              <li className="text-2xl cursor-pointer">Home</li>
              <li className="text-2xl cursor-pointer">About</li>
              <li className="text-2xl cursor-pointer">Store</li>
              <li className="text-2xl cursor-pointer">Contact Us</li>
            </ul>
          </nav>
          <div className="bg-gradient-to-t from-red-600 to-yellow-300 md:p-4 p-2 shadow-slate-500 button__1">
            <p className="md:text-2xl text-xl flex items-center gap-3">
              <FontAwesomeIcon icon={faBookmark} className="md:text-4xl text-2xl text-white" /> Buy Book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
