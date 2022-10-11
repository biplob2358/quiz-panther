import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizDetails = () => {
  const data = useLoaderData();
  const { questions } = data.data;
  let index = 1;

  return (
    <div>
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
