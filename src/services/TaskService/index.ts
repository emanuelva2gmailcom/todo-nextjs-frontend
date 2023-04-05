import { AppThunk } from "./../../context/store";
import { AxiosError, isAxiosError } from "axios";
import { Api } from "../api";
import {
  setErrors,
  setLoading,
  setTasks,
  editTask,
  addTask,
  deleteTask,
} from "@/context/TaskSlice";
import { Dispatch } from "@reduxjs/toolkit";

export type Task = {
  id?: number;
  text: string;
  checked: boolean;
};

export type AppOnFinish = (status?: Error | undefined) => void

const axiosErrorCatchFn = (dispatch: Dispatch, error: any | unknown, onFinish?: AppOnFinish) => {
  if (isAxiosError(error)) {
    if (error.code === "ERR_NETWORK") {
      error.message = "Não foi possível se conectar ao servidor.";
    }
    dispatch(setErrors(error.message));
    dispatch(setLoading(false));
    onFinish && onFinish(error);
  }
}

export const listAllTasks =
  (onFinish?: AppOnFinish): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await Api.get("/tasks/");

      dispatch(setLoading(false));
      dispatch(setTasks(response.data));
      onFinish && onFinish();
    } catch (error) {
      axiosErrorCatchFn(dispatch, error, onFinish)
    }
  };

export const editTaskService =
  (task: Task, onFinish?: AppOnFinish): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { id, ...editableProperties } = task;

      await Api.put(`/tasks/${id}`, {
        ...editableProperties,
      });

      dispatch(setLoading(false));
      dispatch(editTask(task));
      onFinish && onFinish();
    } catch (error) {
      axiosErrorCatchFn(dispatch, error, onFinish)
    }
  };

export const createTaskService =
  (task: Task, onFinish?: AppOnFinish): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { id: _, ...editableProperties } = task;
      const response = await Api.post(`/tasks/`, {
        ...editableProperties,
        checked: false,
      });

      dispatch(setLoading(false));
      dispatch(addTask(response.data as Task));
      onFinish && onFinish();
    } catch (error) {
      axiosErrorCatchFn(dispatch, error, onFinish)
    }
  };

export const deleteTaskService =
  (id: number, onFinish?: AppOnFinish): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      await Api.delete(`/tasks/${id}`);

      dispatch(setLoading(false));
      dispatch(deleteTask(id));
      onFinish && onFinish();
    } catch (error) {
      axiosErrorCatchFn(dispatch, error, onFinish)
    }
  };
