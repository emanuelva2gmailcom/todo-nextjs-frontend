import SortTaskButton from "../SortTaskButton";

type Props = {
  tasksCount: number;
  checkeds: number;
};

export default function TaskCounter(props: Props) {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:justify-between sm:items-center items-end p-[10px] sm:gap-0 gap-[10px]">
      <SortTaskButton />
      <div className="flex flex-row">
        <p className="text-blue-500 text-[0.6rem] sm:text-[0.5rem]">
          TAREFAS A FAZER{" "}
          <span className="p-[4px] rounded-md bg-blue-500 text-white">
            {props.tasksCount - props.checkeds}
          </span>
        </p>
        <p className="text-green-500 text-[0.6rem] sm:text-[0.5rem]">
          TAREFAS CONCLUIDAS{" "}
          <span className="p-[4px] rounded-md bg-green-500 text-white">
            {props.checkeds} DE {props.tasksCount}
          </span>
        </p>
      </div>
    </div>
  );
}
