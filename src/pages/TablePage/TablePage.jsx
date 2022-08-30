import React from "react";
import { Table } from "../../components/Table";
import { TableControls } from "../../components/TableControls";
import "./TablePage.scss";

const TablePage = () => {
  return (
    <div className="TablePage">
      <TableControls />
      <Table />
    </div>
  );
};

export { TablePage };
