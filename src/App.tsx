import { useState } from "react";
import { ChoosePath } from "./Components/ChooseAction/ChoosePath";
import { CreateBuild } from "./Components/CreateBuild/CreateBuild";
import { ImportSet } from "./Components/Import/ImportSet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ImportTest } from "./Components/Import/ImportTest";
import { QueryClient, QueryClientProvider } from "react-query";
import { getSet, db } from "./firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { collection, query, where } from "firebase/firestore";

import "./App.css";

const queryClient = new QueryClient();

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

  // Sends the ":build" param to ImportTest component before it loads, so it can use it to get the data.
  {
    path: "/imported/:build",
    loader: async ({ params }) => {
      return params.build;
    },
    element: <ImportTest />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col justify-center items-center">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
