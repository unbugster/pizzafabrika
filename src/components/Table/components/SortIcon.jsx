import React from "react";
import { Icon } from "@mdi/react";
import { mdiSort } from "@mdi/js";
import { mdiSortVariant } from "@mdi/js";
import { mdiSortReverseVariant } from "@mdi/js";

const SortIcon = ({ sorting }) => {
  return (
    <div className="is-inline-flex ml-auto is-align-items-center">
      {sorting === "" && <Icon path={mdiSort} size={0.8} horizontal vertical />}
      {sorting === "descending" && (
        <Icon path={mdiSortReverseVariant} size={0.8} horizontal vertical />
      )}
      {sorting === "ascending" && (
        <Icon path={mdiSortVariant} size={0.8} horizontal vertical />
      )}
    </div>
  );
};

export { SortIcon };
