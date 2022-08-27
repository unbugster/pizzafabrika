import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Table.scss";

const selectEmployees = (state) => {
  return state.employees.filter(
    ({ isArchive }) => isArchive === state.filters.showArchive
  );
};

const selectShowArchive = (state) => {
  return state.filters.showArchive;
};

const ROLE_DICT = {
  cook: "Повар",
  driver: "Водитель",
  waiter: "Официант",
};

const Table = () => {
  const dispatch = useDispatch();

  const showArchive = useSelector(selectShowArchive);
  const employees = useSelector(selectEmployees);

  const onToggleCheckbox = useCallback(() => {
    dispatch({ type: "FILTERS/TOGGLE_ARCHIVE" });
  }, []);

  return (
    <>
      <main className="Main">
        <div className="Main-Menu">
          <label>
            <input
              type="checkbox"
              checked={showArchive}
              onChange={onToggleCheckbox}
            />
            В архиве
          </label>
        </div>

        <table className="Main-Table">
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
                  <td>{ROLE_DICT[employee.role]}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.birthday}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export { Table };
