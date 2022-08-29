import React from "react";
import { Filters } from "./components/Filters";
import { Table } from "./components/Table";
import "./TablePage.scss";

const TablePage = () => {
  return (
    <div className="TablePage">
      <Filters />
      <Table />
    </div>
  );
};

export { TablePage };
