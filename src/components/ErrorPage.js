import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col min-h-[700px] justify-center items-center">
      <h1 className="text-red-500 text-6xl">Opps! An Error Ocurred!</h1>

      {error && (
        <div className="flex">
          <p className="text-red-500 mr-4">
            {error.statusText || error.message}
          </p>
          <p> {error.status}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
