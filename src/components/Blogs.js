import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <div className="card mt-10 mx-10 w-100 bg-gray-200 text-black ">
          <div className="card-body">
            <h2 className="card-title">What is purpose of react router?</h2>
            <p>
              React Router is a standard library system built on top of the
              React and used to create routing in the React application using
              React Router Package. It provides the synchronous URL on the
              browser with data that will be displayed on the web page. It
              maintains the standard structure and behavior of the application
              and mainly used for developing single page web applications.
            </p>
          </div>
        </div>
        <div className="card mt-10  mx-10 w-100 bg-gray-200 text-black ">
          <div className="card-body">
            <h2 className="card-title">How does context api work?</h2>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div className="card mt-10  mx-10 w-100 bg-gray-200 text-black ">
          <div className="card-body">
            <h2 className="card-title">What is useref hook?</h2>
            <p>
              In this tutorial, we will learn about the useRef hook in React JS
              and its uses, as well as take a look at a demo that will take user
              input and save it in a reference or ref. You will also learn how
              to use the useRef hook to create persisted mutable values (also
              known as references). The useRef hook is a built-in React hook
              that takes one argument or parameter as its initial value and
              returns a reference. The reference has an interesting and useful
              property called current.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
