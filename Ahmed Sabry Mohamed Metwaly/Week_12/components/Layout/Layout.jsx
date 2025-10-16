import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
