import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import NoMatch from "../NoMatch";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/404" element={<NoMatch />} />
    </Routes>
  );
};

export default Routing;
