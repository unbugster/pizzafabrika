import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Table.scss";

const ROLES = {
  cook: "Повар",
  driver: "Водитель",
  waiter: "Официант",
};

const selectEmployees = (state) => {
  const result = state.employees.filter(
    ({ isArchive }) => isArchive === state.filters.showArchive
  );
  const newRole = state.filters.roleFilter;

  if (newRole === "all") {
    return result;
  }

  return result.filter(({ role }) => role === newRole);
};

const Table = () => {
  const employees = useSelector(selectEmployees);

  return (
    <table className="Table">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Должность</th>
          <th scope="col">Телефон</th>
          <th scope="col">Дата рождения</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
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
  );
};

export { Table };
