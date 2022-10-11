import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizDetails = () => {
  const data = useLoaderData();
  const { questions } = data.data;
  let index = 1;

  return (
    <div>
      <div className="container grid justify-items-center ">
        <h1 className="text-5xl text-orange-600">Start Your Quiz</h1>
      </div>
      <div>
        {questions.map((question) => (
          <Question
            index={index++}
            key={question.id}
            question={question}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
