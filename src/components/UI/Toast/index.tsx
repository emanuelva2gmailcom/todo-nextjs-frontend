import { Portal } from "@/hooks/Portal";
import Button from "../Button";
import classes from "./style.module.css";

export enum ToastTypes {
  warnning = "Cuidado",
  success = "Sucesso",
  error = "Erro",
}

type Props = {
  type: ToastTypes;
  message: string;
  isOpen: boolean;
  handleClose: () => void;
};

function Toast({ type, message, isOpen, handleClose }: Props) {
  if (!isOpen) return null;

  let classType = "bg-white text-black"

  switch (type) {
    case ToastTypes.success:
        classType = "bg-green-800 text-white"
        break;
    
    case ToastTypes.warnning:
        classType = "bg-yellow-800 text-white"
        break;
    
    case ToastTypes.error:
        classType = "bg-red-800 text-white"
        break;
  }

  return (
    <Portal wrapperId="toast">
        <div className={`min-w-[30vw] h-auto p-3 rounded-md m-[10px] fixed bottom-0 right-0 ${classType}`}>
          <div className={classes["header"]}>
            <p className="text-center">{type}</p>
            <Button
              onClick={handleClose}
              className="py-[10px] px-[5px] rounded-lg"
              transparent={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={14}
                width={14}
                className="fill-white hover:fill-gray-500"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </Button>
          </div>
          <div className="text-[10pt] break-all">{message}</div>
        </div>
    </Portal>
  );
}
export default Toast;
