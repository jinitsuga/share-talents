import { useState } from "react";
import { ChoosePath } from "./Components/ChooseAction/ChoosePath";
import { CreateBuild } from "./Components/CreateBuild/CreateBuild";
import { ImportSet } from "./Components/Import/ImportSet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ImportTest } from "./Components/Import/ImportTest";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
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
  {
    path: "/test",
    element: <ImportTest link="builds/c5863de9-89a2-4c30-8895-db7032cbe4e8" />,
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
