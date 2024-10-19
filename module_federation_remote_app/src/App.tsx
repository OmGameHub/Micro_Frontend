import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CounterPage, NotFoundPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CounterPage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
