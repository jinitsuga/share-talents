import { useState } from "react";
import { ChoosePath } from "./Components/ChooseAction/ChoosePath";
import { CreateBuild } from "./Components/CreateBuild/CreateBuild";
import { ImportSet } from "./Components/Import/ImportSet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <ChoosePath /> },
  {
    path: "/create-build",
    element: <CreateBuild />,
  },
  {
    path: "/import",
    element: <ImportSet />,
  },
]);

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
