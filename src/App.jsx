import React from "react";
import { Routes, Route } from "react-router-dom";
import { Directory } from "./components/Directory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Directory />}></Route>
    </Routes>
  );
};

export { App };
