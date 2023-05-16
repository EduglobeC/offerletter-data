import { configureStore } from "@reduxjs/toolkit";
import {universityApiSlice} from "../features/university/universityApiSlice";

export const store = configureStore({
  reducer: {
    [universityApiSlice.reducerPath]: universityApiSlice.reducer
  },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(universityApiSlice.middleware) 
    }

})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>