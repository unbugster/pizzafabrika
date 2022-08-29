import React from "react";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
import "./Directory.scss";

const Directory = () => {
  return (
    <div className="Directory">
      <Filter />
      <Table />
    </div>
  );
};

export { Directory };
