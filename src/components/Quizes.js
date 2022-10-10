import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const Quizes = () => {
  const quizData = useLoaderData();

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-9">
        {quizData.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizes;
