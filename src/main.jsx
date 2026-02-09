import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StudentProvider } from "./student/studentContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StudentProvider>
    <App />
  </StudentProvider>
);
