import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../context/tasks/TaskSlice";

const store = configureStore({
  reducer: { 
    tasks: taskReducer, 
},
});

export default store;