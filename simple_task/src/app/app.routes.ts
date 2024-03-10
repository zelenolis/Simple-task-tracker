import { Routes } from "@angular/router";

import { authGuard } from "./guards/auth";
import { loggedGuard } from "./guards/logged";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./components/main/main.component").then((mod) => mod.MainComponent),
        canActivate: [authGuard]
    },
    {
        path: "login",
        loadComponent: () => import("./components/login/login.component").then((mod) => mod.LoginComponent),
        canActivate: [loggedGuard]
    },
    {
        path: "new",
        loadComponent: () => import("./components/form/form.component").then((mod) => mod.FormComponent),
        canActivate: [authGuard]
    },
    {
        path: "task/:id",
        loadComponent: () => import("./components/task-sheet/task-sheet.component")
            .then((mod) => mod.TaskSheetComponent),
        canActivate: [authGuard]
    },
    {
        path: "**",
        loadComponent: () => import("./components/not-found/not-found.component").then((mod) => mod.NotFoundComponent),
    },
];
