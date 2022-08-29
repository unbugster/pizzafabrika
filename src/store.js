import { configureStore } from "@reduxjs/toolkit";
import employees from "./data/employees.json";

const initialState = {
  employees,
  filters: {
    showArchive: false,
    roleFilter: "all",
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
  }

  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
