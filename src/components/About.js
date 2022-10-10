import React from "react";
import images from "../images/bg.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={images} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Quiz Panther!</h1>
            <p className="py-6">
              Quiz Panther is the leading trivia and quiz entertainment provider
              on the web, mobile devices, and in-person and virtual events. Quiz
              Panther.com has over one million user-created quizzes on every
              topic imaginable that have been played over four billion times.
              Quiz Panther also has a suite of trivia apps for iOS and Android
              devices. We've hosted over 150,000 live trivia events since 2009.
              These include games at local pubs nationwide, virtual games on
              Zoom, and unique private events. Our live events have awarded over
              one million dollars in cash and prizes since 2009. Quiz Panther
              also owns and operates Haymaker Public House in Ann Arbor, MI.
              Quiz Panther is a privately held company headquartered in Seattle,
              WA, with several remote offices around the country. For inquiries
              and questions, drop us a line.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
