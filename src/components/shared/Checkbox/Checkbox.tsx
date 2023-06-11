import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";

interface Props {
  className?: string;
  checked?: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<Props> = ({
  onChange,
  checked,
}): React.ReactElement => {
  return (
    <label
      className={cn(styles.customCheckbox, {
        [styles.customCheckbox_checked]: checked,
      })}
    >
      <input
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
        type="checkbox"
      />
      <div className={styles.wrapper}></div>
    </label>
  );
};
