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

function getTest(link: any) {
  const ref = query(collection(db, "sets"), where("link", "==", link));

  const queryBuilds = useFirestoreQuery("get-builds", ref);

  return queryBuilds;
}
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
