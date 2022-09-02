import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const selectShowArchive = (state) => {
  return state.filters.showArchive;
};

const ArchiveFilter = () => {
  const dispatch = useDispatch();
  const showArchive = useSelector(selectShowArchive);

  const onToggleCheckbox = useCallback(() => {
    dispatch({ type: "FILTERS/TOGGLE_ARCHIVE" });
  }, []);

  return (
    <label className="ArchiveFilter checkbox">
      <input
        type="checkbox"
        checked={showArchive}
        onChange={onToggleCheckbox}
      />
      В архиве
    </label>
  );
};

export { ArchiveFilter };
