import { createReducer, on } from "@ngrx/store";
import { Statuses } from "../interfaces/interfaces";
import { TaskList } from "../interfaces/interfaces";
import { addTaskAction, removeTaskAction, updateTaskAction } from "./task_actions";

export const STORE_REDUCER_NODE = "tasks";

const initialState: TaskList = {
    items: []
};

export const taskReducer = createReducer(
    initialState,
    on(addTaskAction, (state: TaskList, { newTask }) => ({
        ...state,
        items: [
            ...state.items,
            newTask
        ]
    })),
    on(removeTaskAction, (state: TaskList, { taskId }) => ({
        ...state,
        items: [
            ...state.items.filter((item) => item.id !== taskId)
        ]
    })),
    on(updateTaskAction, (state: TaskList, { taskId, updTask }) => ({
        ...state,
        items: [
            ...state.items.filter((item) => item.id !== taskId),
            updTask
        ]
    })),
);
