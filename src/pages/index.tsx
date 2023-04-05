import Header from "@/components/Header/Header";
import MessageGlobal from "@/components/MessageGlobal";
import TaskCRUD from "@/components/Tasks/TaskCRUD";
import { store } from "@/context/store";
import { StrictMode } from "react";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <StrictMode>
      <Provider store={store}>
        <div className="flex flex-col h-screen w-screen">
          <Header />
          <div className="grow w-full xl:py-[3.125rem] md:py-[1.3rem] flex justify-center items-center ">
            <MessageGlobal />
            <TaskCRUD />
          </div>
        </div>
      </Provider>
    </StrictMode>
  );
}
