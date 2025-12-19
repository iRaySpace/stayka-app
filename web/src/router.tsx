import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "./home/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export const router = createBrowserRouter(routes);
