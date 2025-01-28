import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReadEmployee from "./component/ReadEmployee";
import EditEmployee from "./component/EditEmployee";
import ErrorPage from "./component/ErrorPage";
import CreateEmployee from "./component/CreateEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ReadEmployee />,
      },
      {
        path: "edit/:id",
        element: <EditEmployee />,
      },
      {
        path: "new",
        element: <CreateEmployee />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
