import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
// import Gallery from "./components/Gallery";
// import About from "./components/About";

export const router = createBrowserRouter(
  //createBrowserRouter is a function that creates a router object from the routes used to render the app
  //createRoutesFromElements is a function that creates a route object from the elements
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} /> */}
    </Route>
  )
);
