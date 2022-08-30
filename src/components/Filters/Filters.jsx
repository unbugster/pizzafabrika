import React from "react";
import { ArchiveFilter } from "./ArchiveFilter";
import { RoleFilter } from "./RoleFilter";
import "./Filters.scss";

const Filters = () => {
  return (
    <div className="Filters">
      <ArchiveFilter />
      <RoleFilter />
    </div>
  );
};

export { Filters };
