import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";
import Blogs from "./Blogs";
import Statistics from "./Statistics";
import About from "./About";
import QuizDetails from "./QuizDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "quiz/:id",
        element: <QuizDetails></QuizDetails>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);
export default router;
