import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Table.scss";

const ROLES = {
  cook: "Повар",
  driver: "Водитель",
  waiter: "Официант",
};

const getBirthdayTimestamp = (str) => {
  const arr = str.birthday.split(".");
  const [dd, mm, yyyy] = arr;
  const ts = new Date(yyyy, mm - 1, dd).getTime();

  return ts;
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

const selectSorting = (state) => {
  return state.sorting;
};

const Table = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);
  const { byName, byBirthday } = useSelector(selectSorting);

  const sortEmployees = useCallback(() => {
    if (byName === "ascending") {
      return employees.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }

        return a.name < b.name ? -1 : 1;
      });
    }

    if (byName === "descending") {
      return employees.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }

        return a.name < b.name ? 1 : -1;
      });
    }

    if (byBirthday === "ascending") {
      return employees.sort((a, b) => {
        return getBirthdayTimestamp(a) - getBirthdayTimestamp(b);
      });
    }

    if (byBirthday === "descending") {
      return employees.sort((a, b) => {
        return getBirthdayTimestamp(b) - getBirthdayTimestamp(a);
      });
    }
  });

  const sortedEmployees = useMemo(sortEmployees, [
    employees,
    byName,
    byBirthday,
  ]);

  const sortByName = useCallback(() => {
    dispatch({ type: "SORTING/BY_NAME" });
  }, []);

  const sortByBirthday = useCallback(() => {
    dispatch({ type: "SORTING/BY_BIRTHDAY" });
  }, []);

  return (
    <table className="Table">
      <thead>
        <tr>
          <th scope="col" onClick={sortByName}>
            ФИО
          </th>
          <th scope="col">Должность</th>
          <th scope="col">Телефон</th>
          <th scope="col" onClick={sortByBirthday}>
            Дата рождения
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>
                <Link to={`/edit/${employee.id}`}>{employee.name}</Link>
              </td>
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
