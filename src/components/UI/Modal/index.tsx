import { Portal } from "@/hooks/Portal";
import { ReactNode } from "react";
import Button from "../Button";
import classes from "./style.module.css";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

function Modal({ children, isOpen, handleClose }: Props) {
  if (!isOpen) return null;

  return (
    <Portal wrapperId="portal">
      <div
        className={`flex justify-center items-center px-3 fixed w-screen h-screen top-0 right-0 ${classes['overlay']}`}
      >
        <div className="md:w-[60vw] sm:w-[80vw] w-full h-auto p-3 bg-white rounded-md">
          <div className={classes["header"]}>
            <Button
              onClick={handleClose}
              className="py-[5px] px-[5px] rounded-lg"
              transparent={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={14}
                width={14}
                className="fill-black hover:fill-gray-500"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </Button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
}
export default Modal;
