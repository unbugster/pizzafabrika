import React from "react";
import { Routes, Route } from "react-router-dom";
import { Table } from "./components/Table";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Table />}></Route>
    </Routes>
  );
};

export { App };
