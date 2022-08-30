import React from "react";
import { Routes, Route } from "react-router-dom";
import { TablePage } from "./pages/TablePage";
import { AddPage } from "./pages/AddPage/";
import { EditPage } from "./pages/EditPage/";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TablePage />}></Route>
      <Route path="/edit/:id" element={<EditPage />}></Route>
      <Route path="/new" element={<AddPage />}></Route>
    </Routes>
  );
};

export { App };
