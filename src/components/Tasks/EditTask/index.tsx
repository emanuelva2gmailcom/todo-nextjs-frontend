import Button from "@/components/UI/Button";
import Input from "@/components/UI/Form/Input";
import Textarea from "@/components/UI/Form/Textarea";
import { useAppDispatch } from "@/context/store";
import { setErrors } from "@/context/TaskSlice";
import { editTaskService, Task } from "@/services/TaskService";
import { ChangeEvent, FC, FormEvent, useState } from "react";

type Props = {
  task: Task;
  submitHandler: () => void;
};

const EditTask: FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(props.task.checked);
  const [text, setText] = useState(props.task.text);
  const [error, setError] = useState("");

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!error) {
      dispatch(
        editTaskService({ ...props.task, text, checked }, (status) => {
          if (!status) {
            props.submitHandler();
          }
        })
      );
    } else {
      dispatch(setErrors("há valores invalidos nesse formulário"));
    }
  };

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim().length === 0) {
      setError("Preecha algum valor");
    } else setError("");
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="h-full">
      <div className="flex flex-col gap-[26px] w-full h-full">
        <div className="flex flex-col gap-2">
          <Textarea
            errorMessage={error}
            labelText="Texto da mensagem:"
            id="text"
            name="text"
            value={text}
            onChange={onChangeTextHandler}
          />
          <Input
            controlClassName="flex flex-row"
            labelText="Concluída?"
            id="checked"
            name="checked"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
        <div className="actions flex justify-end">
          <Button className="text-sm py-[7px]">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default EditTask;
