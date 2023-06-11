import React from "react";
import "./App.scss";
import { Footer, Header, TodoItem } from "./components/widgets";
import { useAppDispatch, useAppSelector } from "./store/store";
import { toggleTodo } from "./store/slices/todosSlice";

export const App: React.FC = (): React.ReactElement => {
  const { todos, filter } = useAppSelector((state) => state);
  const { active: currentFilter } = filter;

  const dispatch = useAppDispatch();

  const createHandlerOnToggleTodo = (id: number) => () => {
    dispatch(toggleTodo(id));
  };

  let filteredTodos = todos;

  if (currentFilter === "active" || currentFilter === "complited") {
    filteredTodos = filteredTodos.filter((todo) =>
      currentFilter === "active" ? !todo.isDone : todo.isDone
    );
  }

  return (
    <div className="App">
      <div className="App__container">
        <h1 className="App__title">todos</h1>
        <Header />
        <ul>
          {filteredTodos.map(({ id, title, isDone }) => (
            <li key={id}>
              <TodoItem
                title={title}
                isDone={isDone}
                onToggleTodo={createHandlerOnToggleTodo(id)}
              />
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
};

export default App;
