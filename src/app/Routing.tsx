import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Businessplan from "./businessplan/Businessplan.tsx";
import CreateBusinessplan from "./businessplan/create-businessplan/CreateBusinessplan";
import LoginPage from "./login/LoginPage.tsx";
import LoginFormPage from "./login/loginForm/LoginFormPage.tsx";
import MinigamesPage from "./minigames/MinigamesPage.tsx";
import NoMatch from "./no-match/NoMatch";

const Routing: React.FC = () => {
  return (
    <Routes>
      {/* TODO this should prolly be a layout path, with nested in App as index route, but we'll handle this when we'll begin doing minigames */}
      <Route path="/" element={<App />} />
      {/* TODO create layout for these 2 pages */}
      <Route path="/businessplan" element={<Businessplan />}>
        {/* TODO: create loader when api will be available */}
      </Route>
      <Route path="/businessplan/create" element={<CreateBusinessplan />} />
      {/* TODO: implement AUTH, then complete login/register page (it may be redesigned if it would be possible to simplify this schema) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<LoginPage />} />
      <Route path="/register/form" element={<LoginFormPage />} />

      <Route path="/minigames" element={<MinigamesPage />}></Route>
      <Route path="/404" element={<NoMatch />} />
    </Routes>
  );
};

export default Routing;
