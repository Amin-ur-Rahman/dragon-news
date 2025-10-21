import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Contexts/PrivateRoute";
import LoadingFallback from "../Contexts/LoadingFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    HydrateFallback: LoadingFallback,
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
    HydrateFallback: LoadingFallback,
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
    HydrateFallback: LoadingFallback,
    path: "/news-datails/:newsId",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default router;
