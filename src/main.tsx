import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import "./index.css";
import Home from "./components/Home";

import Expense from "./components/Expense";
import Budget from "./components/Budget";
import SpendCategory from "./components/SpendCategory";
import ErrorPage from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Expense",
        element: <Expense />,
      },
      {
        path: "/Budget",
        element: <Budget />,
      },
      {
        path: "/SpendCategory",
        element: <SpendCategory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
