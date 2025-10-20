import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
    element: <h1>auth</h1>,
  },
  {
    path: "news",
    element: <h1>news</h1>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  },
]);

export default router;
