import { configureStore } from "@reduxjs/toolkit";
import employees from "./data/employees.json";

const initialState = {
  employees,
  filters: {
    showArchive: false,
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTERS/TOGGLE_ARCHIVE":
      return {
        ...state,
        filters: {
          showArchive: !state.filters.showArchive,
        },
      };
  }

  return state;
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
