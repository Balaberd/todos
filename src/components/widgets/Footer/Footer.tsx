import React, { useMemo } from "react";
import styles from "./Footer.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Button } from "../../shared";
import { changeFilter } from "../../../store/slices/filterSlice";
import { ITodo, TFilter } from "../../../store/types";
import { removeComlited } from "../../../store/slices/todosSlice";

export const Footer: React.FC = () => {
  const { todos, filter } = useAppSelector((state) => state);
  const { active: activeFilter } = filter;

  const activeTodosCount = useMemo(
    () => todos.filter((todo: ITodo) => !todo.isDone).length,
    [todos]
  );

  const dispatch = useAppDispatch();
  const createHandlerOnChangeFilter = (newFilter: TFilter) => () => {
    if (newFilter !== filter.active) {
      dispatch(changeFilter(newFilter));
    }
  };
  const onRemoveComplited = () => {
    dispatch(removeComlited());
  };

  return (
    <div className={styles.footer}>
      <span>{`${activeTodosCount} items left`}</span>

      <div className={styles.controlBlock}>
        <Button
          onClick={createHandlerOnChangeFilter("all")}
          isActive={activeFilter === "all"}
        >
          All
        </Button>
        <Button
          onClick={createHandlerOnChangeFilter("active")}
          isActive={activeFilter === "active"}
        >
          Active
        </Button>
        <Button
          onClick={createHandlerOnChangeFilter("complited")}
          isActive={activeFilter === "complited"}
        >
          Complited
        </Button>
      </div>

      <Button
        onClick={onRemoveComplited}
        isActive={activeFilter === "complited"}
      >
        Clear complited
      </Button>
    </div>
  );
};
