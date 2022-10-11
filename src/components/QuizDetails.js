import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizDetails = () => {
  const data = useLoaderData();
  const { questions } = data.data;
  //   console.log(questions);
  return (
    <div>
      <h1>Book Details</h1>
      <div>
        {questions.map((question) => (
          <Question key={questions.id} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
