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
          roleFilter: payload,
        },
      };
  }

  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
