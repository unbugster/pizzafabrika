import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArchiveFilter } from "./ArchiveFilter";
import "./Filter.scss";

const selectRoleFilter = (state) => {
  return state.filters.roleFilter;
};

const Filter = () => {
  const dispatch = useDispatch();
  const chosenRole = useSelector(selectRoleFilter);

  const onSelect = useCallback((event) => {
    const newRole = event.target.value;
    dispatch({ type: "FILTERS/CHANGE_ROLE", payload: newRole });
  }, []);

  return (
    <div className="Filter">
      <ArchiveFilter />
      <select className="Filter-Role" value={chosenRole} onChange={onSelect}>
        <option value="all">Должность не выбрана</option>
        <option value="driver">Водитель</option>
        <option value="waiter">Официант</option>
        <option value="cook">Повар</option>
      </select>
    </div>
  );
};

export { Filter };
