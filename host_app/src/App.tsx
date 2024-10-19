import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import BaseLayout from "@/components/BaseLayout";

import Loading from "@/Loading";
import Home from "@/pages/Home";
import CounterPage from "@/pages/Counter";
import RandomColorPage from "@/pages/RandomColor";
import RandomNumberPage from "@/pages/RandomNumber";
import NotFoundPage from "@/pages/NotFound";

import "@/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/counter",
        element: (
          <Suspense fallback={<Loading />}>
            <CounterPage />
          </Suspense>
        ),
      },
      {
        path: "/random-color",
        element: (
          <Suspense fallback={<Loading />}>
            <RandomColorPage />
          </Suspense>
        ),
      },
      {
        path: "/random-number",
        element: (
          <Suspense fallback={<Loading />}>
            <RandomNumberPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
