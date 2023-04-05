import { InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
  controlClassName?: string;
  errorMessage?: string
  showMessage?: boolean
};

const Input = ({ labelText, className, errorMessage: error, showMessage, controlClassName, ...defaultProperties }: Props) => {
  return (
    <div
      className={`${classes["form-control"]} ${!controlClassName ? 'flex flex-col' : controlClassName} ${error && classes["invalid"]}`}
    >
      {labelText && (
        <label className={`${classes["title"]} `} htmlFor={defaultProperties.id}>
          {labelText}
        </label>
      )}
      <input
        className={`${className} ${classes["input"]}`}
        {...defaultProperties}
      />
      {error && showMessage && <span className={classes["helper"]}>{error}</span>}
    </div>
  );
};

export default Input;
