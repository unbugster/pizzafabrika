import React from "react";
import { useSelector } from "react-redux";
import { Filter } from "./components/Filter/Filter";
import "./Directory.scss";

const ROLES = {
  cook: "Повар",
  driver: "Водитель",
  waiter: "Официант",
};

const selectEmployees = (state, newRole) => {
  return state.employees
    .filter(({ isArchive }) => isArchive === state.filters.showArchive)
    .filter(({ role }) => (newRole === "all" ? true : role === newRole));
};

const selectRoleFilter = (state) => {
  return state.filters.roleFilter;
};

const Directory = () => {
  const chosenRole = useSelector(selectRoleFilter);
  const employees = useSelector((state) => selectEmployees(state, chosenRole));

  return (
    <div className="Directory">
      <Filter />
      <table className="Directory-Table">
        <thead>
          <tr>
            <th scope="col">ФИО</th>
            <th scope="col">Должность</th>
            <th scope="col">Телефон</th>
            <th scope="col">Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, id) => {
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{ROLES[employee.role]}</td>
                <td>{employee.phone}</td>
                <td>{employee.birthday}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Directory };
