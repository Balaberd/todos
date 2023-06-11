import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useAppDispatch } from "../../../store/store";
import { addTodo } from "../../../store/slices/todosSlice";

const ENTER_KEY_CODE = 13;

export const Header: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();
  const onAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === ENTER_KEY_CODE && !!value.trim()) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <div className={styles.header}>
      <input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
        onKeyDown={onAddTodo}
        className={styles.header__input}
        type="text"
        placeholder="What needs to be done?"
      />
    </div>
  );
};
