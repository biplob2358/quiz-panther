import React from "react";
import background from "../images/bg.jpg";

const Header = () => {
  return (
    <div>
      <div className="card w-full rounded-none mb-5 shadow-xl image-full">
        <figure className="h-96">
          <img src={background} alt="Shoes" />
        </figure>
        <div className="card-body  text-center mt-10">
          <h2 className="text-6xl text-cyan-100"> Test Your Skills</h2>
          <p>
            This activity will take you approximately 10 minutes. Your skills
            are the things you've learned <br /> to do well arising from talent,
            training, or practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
