import { createAction, props } from "@ngrx/store";
import { Tasks } from "../interfaces/interfaces";

export enum StoreActionsType {
  addTask = "[TASK] add task",
}

export const addTaskAction = createAction(
  StoreActionsType.addTask,
  props<{ newTask: Tasks }>()
)
