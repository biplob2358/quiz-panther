import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  bg-sky-400">
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-white normal-case text-xl"
            to="./"
          >
            Quiz Panther 📚
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu text-white menu-horizontal p-0 md:col-3">
            <div className="sm:block  md:flex">
              <li>
                <Link to="./home">Home</Link>
              </li>
              <li>
                <Link to="./statistics">Statistics</Link>
              </li>
            </div>
            <div className="sm:block md:flex">
              <li>
                <Link to="./blogs">Blogs</Link>
              </li>

              <li>
                <Link to="./about">About Us</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
