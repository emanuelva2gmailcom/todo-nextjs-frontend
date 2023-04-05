import { Task } from "../../../services/TaskService/index";
import TaskCard from "../TaskCard";
import TaskListEmpty from "../TaskListEmpty";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  if (tasks.length === 0) return <TaskListEmpty />;

  const taskCards = tasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      text={task.text}
      checked={task.checked}
    />
  ));
  return <div className="flex flex-col gap-1">{taskCards}</div>;
};

export default TaskList;
