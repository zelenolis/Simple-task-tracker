import { createFeatureSelector, createSelector } from "@ngrx/store";

import { TaskList } from "../interfaces/interfaces";

export const storeFeatureSelector = createFeatureSelector<TaskList>("tasks");

export const selectAllTasks = createSelector(
    storeFeatureSelector,
    (state) => state.items
);

export const selectTaskById = (id: string) => createSelector(
    storeFeatureSelector,
    (state) => state.items.find((task) => task.id === id)
);
