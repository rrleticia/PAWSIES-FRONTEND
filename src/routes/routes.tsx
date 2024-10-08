import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppProvider } from "../shared";
import {
  AppointmentList,
  AppointmentOperation,
  ErrorPage,
  HomeOutlet,
  HomePage,
  LoginOutlet,
  LoginPage,
  PetList,
  PetOperation,
  UserProfile,
  VetList,
  VetOperation,
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
              { path: "/home", element: <HomePage /> },
              { path: "/appointment", element: <AppointmentList /> },
              {
                path: "/appointment/operation",
                element: <AppointmentOperation />,
              },
              { path: "/vet", element: <VetList /> },
              { path: "/vet/operation", element: <VetOperation /> },
              { path: "/pet", element: <PetList /> },
              { path: "/pet/operation", element: <PetOperation /> },
              { path: "/owner", element: <OwnerList /> },
              { path: "/owner/operation", element: <OwnerOperation /> },
              { path: "/profile", element: <UserProfile /> },
            ],
          },
        ],
      },
    ],
  },
]);
