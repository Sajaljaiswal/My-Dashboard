import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/divyaUserSlice";
export const store = configureStore({
  reducer: {
    app: userDetails,
  },
});
