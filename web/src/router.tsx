import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routes);
