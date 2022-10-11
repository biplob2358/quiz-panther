import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ option, correctAnswer }) => {
  const radioFunction = ({ option }) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer.", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      toast.error(" Wrong Answer.", {
        position: "top-center",
        theme: "colored",
      });
    }
  };
  return (
    <div>
      <label class="inline-flex items-center">
        <input
          onClick={() => radioFunction({ option })}
          type="radio"
          class="form-radio"
          name="accountType"
          value={option}
        />
        <span class="ml-2">{option}</span>
      </label>
      <ToastContainer />
    </div>
  );
};

export default Option;
