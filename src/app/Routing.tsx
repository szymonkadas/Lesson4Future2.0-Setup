import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Businessplan from "./businessplan/Businessplan.tsx";
import CreateBusinessplan from "./businessplan/create-businessplan/CreateBusinessplan";
import NoMatch from "./no-match/NoMatch";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/businessplan" element={<Businessplan />}>
        {/* TODO: create loader when api will be available */}
      </Route>
      <Route path="/businessplan/create" element={<CreateBusinessplan />} />

      <Route path="/404" element={<NoMatch />} />
    </Routes>
  );
};

export default Routing;
