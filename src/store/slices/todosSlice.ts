import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types";

const initialState: ITodo[] = [
  {
    id: 1,
    title: "Тестовое задание",
    isDone: false,
  },
  {
    id: 2,
    title: "Прекрасный код",
    isDone: true,
  },
  {
    id: 3,
    title: "Покрытый тестами",
    isDone: true,
  },
  {
    id: 4,
    title: "By Balaberd https://github.com/Balaberd",
    isDone: false,
  },
];

let todoIdCount = initialState.length;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTodo(state: ITodo[], action: PayloadAction<number>) {
      const index = state.findIndex(
        (todo: ITodo) => todo.id === action.payload
      );
      state[index] = { ...state[index], isDone: !state[index].isDone };
    },
    removeComlited(state: ITodo[]) {
      return state.filter((todo) => !todo.isDone);
    },
    addTodo(state: ITodo[], action: PayloadAction<string>) {
      todoIdCount++;
      const newTodo = { id: todoIdCount, title: action.payload, isDone: false };
      state.push(newTodo);
    },
  },
});

export const { toggleTodo, removeComlited, addTodo } = todosSlice.actions;

export default todosSlice.reducer;
