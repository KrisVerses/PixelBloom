import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes.tsx";
import "./index.css";
import StateProvider from "./state/StateProvider.tsx";

createRoot(document.getElementById("root")!).render(
  //provides the state to the entire app
  <StateProvider>
    <RouterProvider router={router} />
  </StateProvider>
);
