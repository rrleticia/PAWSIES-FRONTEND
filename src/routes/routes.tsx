import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppProvider } from "../shared";
import {
  ErrorPage,
  HomeOutlet,
  HomePage,
  LoginOutlet,
  LoginPage,
} from "../views";
import { OwnerList, OwnerOperation } from "../views/owner";

export const router = createBrowserRouter([
  {
    element: <AppProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginOutlet />,
        children: [
          {
            index: true,
            element: <Navigate to="/login" replace />,
          },
          { path: "login", element: <LoginPage /> },
        ],
      },
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Navigate to="/" replace />,
          },
          {
            path: "/",
            element: <HomeOutlet />,
            children: [
              {
                index: true,
                element: <Navigate to="/home" replace />,
              },
              { path: "/home", element: <HomePage /> },
              { path: "/owner", element: <OwnerList /> },
              { path: "/owner/operation", element: <OwnerOperation /> },
            ],
          },
        ],
      },
    ],
  },
]);
