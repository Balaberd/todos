import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todosSlice from "./slices/todosSlice";
import filterSlice from "./slices/filterSlice";

const rootReducer = combineReducers({
  todos: todosSlice,
  filter: filterSlice,
});

export const setupStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export const store: AppStore = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
