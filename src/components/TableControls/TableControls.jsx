import React from "react";
import { Link } from "react-router-dom";
import { Filters } from "../Filters";
import "./TableControls.scss";

const TableControls = () => {
  return (
    <div className="TableControl">
      <Filters />
      <Link to={`/new`}>
        <button type="button" className="TableControl-AddBtn">
          Добавить сотрудника
        </button>
      </Link>
    </div>
  );
};

export { TableControls };
