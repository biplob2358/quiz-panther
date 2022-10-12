import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer }) => {
  const radioFunction = ({ option }) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer", {
        position: "top-center",
        theme: "colored",
        autoClose: 500,
      });
    } else {
      return toast.error(" Wrong Answer", {
        position: "top-center",
        theme: "colored",
        autoClose: 500,
      });
    }
  };
  return (
    <div>
      <label className="inline-flex items-center border lg:w-1/2 w-full shadow-md px-4 py-2 mt-4 rounded-xl border-indigo-500 ">
        <input
          onClick={() => radioFunction({ option })}
          type="radio"
          class="form-radio"
          name={correctAnswer}
          value={option}
        />
        <span class="ml-2">{option}</span>
      </label>
      <ToastContainer />
    </div>
  );
};

export default Option;
