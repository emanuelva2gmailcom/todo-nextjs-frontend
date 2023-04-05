import { RootState } from "./store";
import { Task } from "@/services/TaskService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SortOptions = {
  element: "id" | "text";
  desc: boolean;
};

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  errors: string;
  sort_options: SortOptions;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  errors: "",
  sort_options: {
    element: "text",
    desc: false,
  },
};

const orderFnUtil = (tasks: Task[], sort_options: SortOptions) => {
  return tasks.sort((a, b) => {
    let first = `${a[sort_options.element]}`;
    let second = `${b[sort_options.element]}`;

    if (sort_options.desc) {
      let helper = first;
      first = second;
      second = helper;
    }

    return first.localeCompare(second);
  });
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    editTask: (state, { payload }: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[index] = payload;
      state.tasks = orderFnUtil(state.tasks, state.sort_options);
    },

    deleteTask: (state, { payload }: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },

    addTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks.push(payload);
      state.tasks = orderFnUtil(state.tasks, state.sort_options);
    },

    setTasks: (state, { payload }: PayloadAction<Task[]>) => {
      state.tasks = payload;
      state.tasks = orderFnUtil(state.tasks, state.sort_options);
    },
    setSortOptions: (state, { payload }: PayloadAction<SortOptions>) => {
      state.sort_options = payload;
      state.tasks = orderFnUtil(state.tasks, state.sort_options);
    },
  },
});

export const {
  setLoading,
  setErrors,
  setTasks,
  editTask,
  deleteTask,
  addTask,
  setSortOptions
} = taskSlice.actions;

export const taskSliceReducer = taskSlice.reducer;

export const taskSelector = (state: RootState) => state.tasksStore;
