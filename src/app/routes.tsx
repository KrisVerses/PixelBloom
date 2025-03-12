import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout";
import ImageDetail from "../pages/ImageDetail";
// import Gallery from "./components/Gallery";
// import About from "./components/About";

export const router = createBrowserRouter(
  //createBrowserRouter is a function that creates a router object from the routes used to render the app
  //createRoutesFromElements is a function that creates a route object from the elements
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/image/:slug" element={<ImageDetail />} />
    </Route>
  )
);
