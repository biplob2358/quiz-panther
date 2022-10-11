import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Option from "./Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ question, index }) => {
  console.log(question);
  const { correctAnswer, options } = question;
  const notify = () =>
    toast.info(`Answer: ${correctAnswer}`, {
      autoClose: 500,
    });

  const ques = question.question;
  const newQues = ques.replace(/(<([^>]+)>)/gi, "");
  return (
    <div>
      <div className="card  w-2/3 mx-auto mt-10 mb-5 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex">
            <h2 className="card-title">
              <span>{index}.</span>
              {newQues}
            </h2>
            <div className="ml-10">
              <button
                onClick={notify}
                className="hover:text-orange-600 ml-auto"
              >
                <EyeIcon className="w-6 h-6 ml-1" />
              </button>
              <ToastContainer />
            </div>
          </div>

          <div class="mt-4">
            <span class="text-gray-700">Select Answare:</span>
            <div class="mt-2">
              {options.map((option, index) => (
                <Option
                  key={index}
                  option={option}
                  correctAnswer={correctAnswer}
                ></Option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
