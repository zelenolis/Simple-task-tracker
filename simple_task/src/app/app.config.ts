import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { taskReducer } from "./ngrx-store/task_reducer";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(routes),
      provideAnimations(),
      provideStore({tasks: taskReducer}),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode()
        })
    ]
};
