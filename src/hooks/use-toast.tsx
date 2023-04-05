import * as ReactDOM from "react-dom";
import * as Toast from "@radix-ui/react-toast";

export enum ToastTypes {
  error = 0,
  success = 1,
  warnning = 2,
}

type Props = {
  title: string;
  message: string;
  type: ToastTypes;
};

export function useToast(props: Props) {
    const newElement = document.createElement('span');
    newElement.innerText = 'portal element';
  let colorType = "";

  switch (props.type) {
    case ToastTypes.error:
      colorType = "bg-green-600 text-white";
      break;

    case ToastTypes.error:
      colorType = "bg-red-600 text-white";
      break;

    case ToastTypes.error:
      colorType = "bg-yellow-600 text-white";
      break;
  }

  const toast = (
    <div
      className={`fixed top-0 left-0 right-0 sm:w-full min-w-[100px] w-auto p-[20px] flex flex-column gap-[2px] ${colorType}`}
    >
      <p className="font-bold">{props.title}</p>
      <p>{props.message}</p>
    </div>
  );

  const toast2 = (
    <Toast.Provider>
      <Toast.Root>
        <Toast.Title>{props.title}</Toast.Title>
        <Toast.Description>{props.message}</Toast.Description>
        <Toast.Close />
      </Toast.Root>

      <Toast.Viewport />
    </Toast.Provider>
  );

  return ReactDOM.createPortal(toast, document.getElementById("toast")!);
}
