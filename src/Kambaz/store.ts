import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignment/AssignmentReducer";
import coursesReduccer from "./Courses/reducer";
import enrollmentReducer from "./enrollmentReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    coursesReduccer,
    enrollmentReducer,
  },
});
export default store;