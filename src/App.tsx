import { useState } from "react";
import { ChoosePath } from "./Components/ChooseAction/ChoosePath";
import { ChooseClass } from "./Components/ChooseClass/ChooseClass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <ChoosePath /> },
  {
    path: "/create-build",
    element: <ChooseClass />,
    children: [{ path: "/create-build/new", element: <ChooseClass /> }],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
