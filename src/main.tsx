import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Routing from "./lib/Routing.tsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      <main>
        <Routing />
      </main>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
