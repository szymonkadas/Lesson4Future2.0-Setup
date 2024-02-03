import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Routing from "./app/Routing.tsx";
import Footer from "./components/Footer/Footer.tsx";
// import NavBar from "./components/NavBar/NavBar.tsx";
import AuthorisedNavBar from "./components/NavBar/AuthorisedNavBar/AuthorisedNavBar.tsx";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <AuthorisedNavBar />
      <main>
        <Routing />
      </main>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
