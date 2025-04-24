import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import AppReactQuery from "./AppReactQuery";
import AppStateMgt from "./AppStateMgt";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AppReactQuery/> */}
      {/* <AppStateMgt/> */}
      <RouterProvider router={router} /> 
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
