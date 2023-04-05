import { useAppDispatch, useAppSelector } from "@/context/store";
import { setErrors, taskSelector } from "@/context/TaskSlice";
import Toast, { ToastTypes } from "../UI/Toast";

const MessageGlobal = () => {
  const dispatch = useAppDispatch();

  const { errors } = useAppSelector(taskSelector);

  const closeHandler = () => {
    dispatch(setErrors(""));
  };
  console.log(errors);
  return (
    <Toast
      isOpen={errors !== ""}
      message={errors}
      type={ToastTypes.error}
      handleClose={closeHandler}
    />
  );
};

export default MessageGlobal;
