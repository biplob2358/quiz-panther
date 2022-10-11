import React from "react";
import Option from "./Option";

const Question = ({ question }) => {
  console.log(question);
  const { correctAnswer, id, options } = question;
  return (
    <div>
      <div className="card w-1/2 mx-10 mt-10 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{question.question}</h2>

          <div class="mt-4">
            <span class="text-gray-700">Select Answare:</span>
            <div class="mt-2">
              {options.map((option) => (
                <Option option={option}></Option>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
