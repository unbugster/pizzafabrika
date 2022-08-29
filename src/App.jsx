import React from "react";
import { Routes, Route } from "react-router-dom";
import { TablePage } from "./pages/TablePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TablePage />}></Route>
    </Routes>
  );
};

export { App };
