import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); //use this hook to get the error that was thrown
  console.log(error);
  //use isRouteErroeResponse to catch invalid route errors specifically (returns true if the user tries to access invalid route)
  return (
    <>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "Invalid page..."
          : "Sorry, an unexpected error has occurred..."}
      </p>
    </>
  );
};

export default ErrorPage;
