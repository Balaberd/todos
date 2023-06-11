import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  isActive?: boolean;
  children: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  isActive = false,
  className,
  children,
  onClick,
}) => (
  <button
    className={cn(styles.button, className, {
      [styles.button_active]: isActive,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
