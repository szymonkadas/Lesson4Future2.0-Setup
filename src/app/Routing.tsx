import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import AdditionalPage from "./additional/AdditionalPage.tsx";
import Businessplan from "./businessplan/Businessplan.tsx";
import CreateBusinessplan from "./businessplan/create-businessplan/CreateBusinessplan";
import LoginPage from "./login/LoginPage.tsx";
import LoginFormPage from "./login/loginForm/LoginFormPage.tsx";
import MinigamesPage from "./minigames/MinigamesPage.tsx";
import NoMatch from "./no-match/NoMatch";
import ProfilePage from "./profil/ProfilePage.tsx";
import StartPage from "./start/StartPage.tsx";

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
      <Route
        path="/profile/student"
        element={
          <ProfilePage
            accountType={"student"}
            name={"Jan"}
            surname={"Kowalski"}
            birthDate={"2137"}
            email={"q@2wp.pl"}
          />
        }
      />
      {/* to przekazywanie danych będzie trzeba jakoś zmienić pewnie */}
      <Route path="/start" element={<StartPage />} />
      <Route path="/dodatkowe" element={<AdditionalPage />} />
    </Routes>
  );
};

export default Routing;
