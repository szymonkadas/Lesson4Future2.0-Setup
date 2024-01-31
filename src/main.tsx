import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
