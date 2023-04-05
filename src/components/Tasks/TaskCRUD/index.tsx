import { useAppDispatch, useAppSelector } from "@/context/store";
import { taskSelector } from "@/context/TaskSlice";
import { listAllTasks, Task } from "@/services/TaskService";
import { useEffect } from "react";
import CreateTask from "../CreateTask";
import TaskCounter from "../TaskCounter";
import TaskList from "../TaskList";

const TaskCRUD = () => {
  const dispatch = useAppDispatch();

  const { tasks } = useAppSelector(taskSelector);

  useEffect(() => {
    dispatch(listAllTasks());
  }, []);

  const tasksCountCheckeds = tasks.filter((task: Task) => task.checked);

  return (
    <div className="py-[30px] px-[20px] flex flex-col lg:w-[900px] md:w-[80%] w-full h-full">
      <CreateTask />  
      <TaskCounter
        checkeds={tasksCountCheckeds.length}
        tasksCount={tasks.length}
      />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskCRUD;
