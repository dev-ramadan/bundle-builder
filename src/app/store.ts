import { configureStore } from "@reduxjs/toolkit";
import bundleReducer from "../features/bundle/bundleSlice";

let preloadedState;

try {
  const savedBundle = localStorage.getItem("bundle");

  if (savedBundle) {
    preloadedState = {
      bundle: JSON.parse(savedBundle),
    };
  }
} catch (error) {
  console.error("Failed to load bundle from localStorage", error);
}

export const store = configureStore({
  reducer: {
    bundle: bundleReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem(
    "bundle",
    JSON.stringify(store.getState().bundle)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;