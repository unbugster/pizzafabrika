import { configureStore } from "@reduxjs/toolkit";
import employees from "./data/employees.json";

const initialState = {
  employees,
  filters: {
    showArchive: false,
    roleFilter: "all",
  },
  sorting: {
    byName: "ascending",
    byBirthday: "",
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTERS/TOGGLE_ARCHIVE":
      return {
        ...state,
        filters: {
          ...state.filters,
          showArchive: !state.filters.showArchive,
        },
      };

    case "FILTERS/CHANGE_ROLE":
      return {
        ...state,
        filters: {
          ...state.filters,
          roleFilter: payload.newRole,
        },
      };

    case "EMPLOYEES/EDIT":
      const newEmployees = state.employees.map((employee) => {
        if (employee.id === Number(payload.id)) {
          return { ...employee, ...payload.newData };
        }

        return employee;
      });

      return {
        ...state,
        employees: newEmployees,
      };

    case "EMPLOYEES/ADD":
      const newEmployess = [...state.employees, payload.newData];

      return {
        ...state,
        employees: newEmployess,
      };

    case "SORTING/BY_NAME":
      const sortByName =
        state.sorting.byName === "ascending" ? "descending" : "ascending";

      return {
        ...state,
        sorting: {
          ...state.sorting,
          byName: sortByName,
          byBirthday: "",
        },
      };

    case "SORTING/BY_BIRTHDAY":
      const sortByBirthday =
        state.sorting.byBirthday === "ascending" ? "descending" : "ascending";

      return {
        ...state,
        sorting: {
          ...state.sorting,
          byName: "",
          byBirthday: sortByBirthday,
        },
      };
  }

  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
