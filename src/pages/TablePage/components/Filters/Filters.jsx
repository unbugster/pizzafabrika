import React from "react";
import { Link } from "react-router-dom";
import { ArchiveFilter } from "./ArchiveFilter";
import { RoleFilter } from "./RoleFilter";
import "./Filters.scss";

const Filters = () => {
  return (
    <div className="Filters">
      <ArchiveFilter />
      <RoleFilter />
      <Link to={`/new`}>
        <button type="button" classNames="Filters-AddBtn">
          Добавить сотрудника
        </button>
      </Link>
    </div>
  );
};

export { Filters };
