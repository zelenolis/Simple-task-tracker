import { createReducer, on } from "@ngrx/store";

import { TaskList } from "../interfaces/interfaces";
import { addTaskAction } from "./task_actions";

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

);
