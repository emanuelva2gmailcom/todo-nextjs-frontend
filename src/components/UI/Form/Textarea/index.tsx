import { TextareaHTMLAttributes } from "react";
import classes from "./Textarea.module.css";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  labelText?: string;
  controlClassName?: string;
  errorMessage?: string
};

const Textarea = ({ labelText, className, errorMessage: error, controlClassName, ...defaultProperties }: Props) => {
  return (
    <div
      className={`${!controlClassName ? 'flex flex-col' : controlClassName} ${classes["form-control"]} ${error && classes["invalid"]}`}
    >
      {labelText && (
        <label className={classes["title"]} htmlFor={defaultProperties.id}>
          {labelText}
        </label>
      )}
      <textarea
        className={`${className} ${classes["input"]}`}
        {...defaultProperties}
      />
      {error && <span className={classes["helper"]}>{error}</span>}
    </div>
  );
};

export default Textarea;
