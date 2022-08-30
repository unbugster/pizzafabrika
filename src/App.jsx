import React from "react";
import { Routes, Route } from "react-router-dom";
import { TablePage } from "./pages/TablePage";
import { EditForm } from "./pages/EditForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TablePage />}></Route>
      <Route path="/edit/:id" element={<EditForm formType={"edit"} />}></Route>
      <Route path="/new" element={<EditForm formType={"add"} />}></Route>
    </Routes>
  );
};

export { App };
