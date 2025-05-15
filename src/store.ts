import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // default export

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ correct
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
