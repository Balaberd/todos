import React from "react";
import cn from "classnames";
import { Checkbox } from "../../shared";
import styles from "./TodoItem.module.scss";

interface Props {
  title: string;
  isDone: boolean;
  onToggleTodo: () => void;
}

export const TodoItem: React.FC<Props> = ({ title, isDone, onToggleTodo }) => {
  return (
    <div className={styles.todoItem} data-testid="todo-item">
      <Checkbox checked={isDone} onChange={onToggleTodo} />
      <span className={cn(styles.title, { [styles.title_isDone]: isDone })}>
        {title}
      </span>
    </div>
  );
};
