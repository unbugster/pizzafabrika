import React from "react";
import { ArchiveFilter } from "./ArchiveFilter";
import { RoleFilter } from "./RoleFilter";
import "./Filters.scss";

const Filters = () => {
  return (
    <div className="is-flex is-flex-direction-column">
      <ArchiveFilter />
      <RoleFilter />
    </div>
  );
};

export { Filters };
