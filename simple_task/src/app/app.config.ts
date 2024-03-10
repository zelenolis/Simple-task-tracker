import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { routes } from "./app.routes";
import { taskReducer } from "./ngrx-store/task_reducer";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideStore({ tasks: taskReducer }),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode()
        })
    ]
};
