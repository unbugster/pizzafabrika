import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const selectRoleFilter = (state) => {
  return state.filters.roleFilter;
};

const RoleFilter = () => {
  const dispatch = useDispatch();
  const chosenRole = useSelector(selectRoleFilter);

  const onSelect = useCallback((event) => {
    const newRole = event.target.value;
    dispatch({ type: "FILTERS/CHANGE_ROLE", payload: newRole });
  }, []);

  return (
    <select className="RoleFilter" value={chosenRole} onChange={onSelect}>
      <option value="all">Должность не выбрана</option>
      <option value="driver">Водитель</option>
      <option value="waiter">Официант</option>
      <option value="cook">Повар</option>
    </select>
  );
};

export { RoleFilter };
