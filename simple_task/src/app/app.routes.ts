import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "", loadComponent: () =>
    import("./components/main/main.component").then(mod => mod.MainComponent),
  },
  {
    path: "login", loadComponent: () =>
    import("./components/login/login.component").then(mod => mod.LoginComponent),
  },
  {
    path: "new", loadComponent: () =>
    import("./components/form/form.component").then(mod => mod.FormComponent),
  },
  {
    path: "task/:id", loadComponent: () =>
    import("./components/task-sheet/task-sheet.component").then(mod => mod.TaskSheetComponent),
  },
  {
    path: "**", loadComponent: () =>
    import("./components/not-found/not-found.component").then(mod => mod.NotFoundComponent),
  },
];
