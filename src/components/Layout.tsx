import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

//Layout component to wrap the entire app including the header, footer, and main content
const Layout: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
