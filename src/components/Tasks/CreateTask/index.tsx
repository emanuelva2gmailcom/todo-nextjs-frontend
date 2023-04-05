import Button from "@/components/UI/Button";
import Input from "@/components/UI/Form/Input";
import { useAppDispatch } from "@/context/store";
import { setErrors } from "@/context/TaskSlice";
import { createTaskService, Task } from "@/services/TaskService";
import { ChangeEvent, useEffect, useState } from "react";

export default function CreateTask() {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (task.length === 0) {
      setError("O campo de tarefa a ser criada não pode estar vazio.");
    } else {
      setError("");
    }
  }, [task]);

  const createTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error) {
      setTouched(true);
      dispatch(setErrors(error));
      return;
    }

    const taskInput: Task = {
      text: task,
      checked: false,
    };
    dispatch(
      createTaskService(taskInput, (status) => {
        if (!status) {
          setTask("");
          setTouched(false);
        }
      })
    );
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setTask(e.target.value);
  };

  return (
    <form
      className="flex flex-row w-full flex-nowrap gap-1"
      onSubmit={createTaskHandler}
    >
      <Input
        errorMessage={error && touched ? error : ""}
        showMessage={false}
        controlClassName="grow flex-initial"
        className="w-full h-full"
        id="task"
        name="task"
        placeholder="Insira uma tarefa"
        value={task}
        onChange={onChangeHandler}
      />
      <Button id="create-task" className="w-auto rounded-sm text-sm">
        Criar tarefa
      </Button>
    </form>
  );
}
