import React from "react";
import { Link } from "react-router-dom";
import { Filters } from "../Filters";
import "./TableControls.scss";

const TableControls = () => {
  return (
    <div className="column is-one-quarter TableControls">
      <Filters />
      <Link to={`/new`}>
        <button
          type="button"
          className="button is-fullwidth is-warning is-responsive is-medium is-rounded"
        >
          Добавить сотрудника
        </button>
      </Link>
    </div>
  );
};

export { TableControls };
