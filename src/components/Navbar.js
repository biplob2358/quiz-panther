import React from "react";
import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-sky-700">
        <div className="flex-1">
          <a className="btn btn-ghost text-white normal-case text-xl" href="./">
            Quiz Panther 📚
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu text-white menu-horizontal p-0 md:col-3">
            <div className="sm:block  md:flex">
              <li>
                <a href="./home">Home</a>
              </li>
              <li>
                <a href="./statistics">Statistics</a>
              </li>
            </div>
            <div className="sm:block md:flex">
              <li>
                <a href="./blogs">Blogs</a>
              </li>

              <li>
                <a href="./about">About Us</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
