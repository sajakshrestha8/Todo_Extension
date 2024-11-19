import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import AddTaskPage from "./Pages/AddTaskPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addtask" element={<AddTaskPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
