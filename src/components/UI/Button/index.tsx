import { ButtonHTMLAttributes } from "react";
import classes from "./style.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  transparent?: boolean;
};

export default function Button({ className, transparent, ...props }: Props) {
  return (
    <button
      className={`${!transparent && classes["button-primary"]} px-[20px] p-[10px] rounded-[4px] ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
