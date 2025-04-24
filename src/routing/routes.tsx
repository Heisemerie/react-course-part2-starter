import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";

//createBrowserRouter is a function that takes route objects
//route objects contain two properties; a path and an element to render at the path location
const router = createBrowserRouter([
  //create a nested route to work with outlet
  // {
  //   path: "/",
  //   element: <Layout />,
  //   errorElement: <ErrorPage />,
  //   //renders children inside outlet component
  //   children: [
  //     { path: "", element: <HomePage /> },
  //     { path: "login", element: <LoginPage /> },
  //     { path: "contact", element: <ContactPage /> },
  //   ],
  // },

  // {
  //   element: <PrivateRoutes />,
  //   //renders children inside outlet component
  //   children: [
  //     {
  //       path: "users",
  //       element: <UsersPage />,
  //       children: [
          { path: ":id", element: <UserDetail /> }, //passing data with route parameters
  //       ],
  //     },
  //   ],
  // },
]);

export default router;
