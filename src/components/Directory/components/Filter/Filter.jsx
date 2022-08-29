import React from "react";
import { ArchiveFilter } from "./ArchiveFilter";
import "./Filter.scss";
import { RoleFilter } from "./RoleFilter";

const Filter = () => {
  return (
    <div className="Filter">
      <ArchiveFilter />
      <RoleFilter />
    </div>
  );
};

export { Filter };
