import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        loader: () => fetch("/news.json"),
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    loader: () => fetch("/news.json"),
    path: "/news-datails/:newsId",
    element: <NewsDetails></NewsDetails>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  },
]);

export default router;
