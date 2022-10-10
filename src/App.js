import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
