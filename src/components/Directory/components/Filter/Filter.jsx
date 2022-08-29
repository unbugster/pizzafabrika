import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.scss";

const selectShowArchive = (state) => {
  return state.filters.showArchive;
};

const selectRoleFilter = (state) => {
  return state.filters.roleFilter;
};

const Filter = () => {
  const dispatch = useDispatch();
  const chosenRole = useSelector(selectRoleFilter);
  const showArchive = useSelector(selectShowArchive);

  const onToggleCheckbox = useCallback(() => {
    dispatch({ type: "FILTERS/TOGGLE_ARCHIVE" });
  }, []);

  const onSelect = useCallback((event) => {
    const newRole = event.target.value;
    dispatch({ type: "FILTERS/CHANGE_ROLE", payload: newRole });
  }, []);

  return (
    <div className="Filter">
      <label>
        <input
          type="checkbox"
          checked={showArchive}
          onChange={onToggleCheckbox}
        />
        В архиве
      </label>
      <select className="Filter-Select" value={chosenRole} onChange={onSelect}>
        <option value="all">Должность не выбрана</option>
        <option value="driver">Водитель</option>
        <option value="waiter">Официант</option>
        <option value="cook">Повар</option>
      </select>
    </div>
  );
};

export { Filter };
