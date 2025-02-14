import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      dir={useSelector((state) => state.lang.lang) === "ar" ? "rtl" : "ltr"}
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
