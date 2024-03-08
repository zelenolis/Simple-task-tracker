import { createAction, props } from "@ngrx/store";
import { Tasks } from "../interfaces/interfaces";

export enum StoreActionsType {
    addTask = "[ADD] add task",
    removeTask = "[REMOVE] remove task",
    updTask = "[UPD] update task",
}

export const addTaskAction = createAction(
    StoreActionsType.addTask,
    props<{ newTask: Tasks }>()
);

export const removeTaskAction = createAction(
  StoreActionsType.removeTask,
  props<{ taskId: string }>()
);

export const updateTaskAction = createAction(
  StoreActionsType.updTask,
  props<{ taskId: string, updTask: Tasks }>()
);
