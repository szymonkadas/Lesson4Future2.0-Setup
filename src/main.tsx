import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Footer from "./components/Footer/Footer.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);
