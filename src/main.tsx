import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
