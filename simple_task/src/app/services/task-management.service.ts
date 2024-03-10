import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { take } from "rxjs";

import { Tasks } from "../interfaces/interfaces";
import { addTaskAction } from "../ngrx-store/task_actions";
import { selectTaskById } from "../ngrx-store/task_selector";

@Injectable({
    providedIn: "root"
})
export class TaskManagementService {
    private readonly store = inject(Store);

    sendTaskToServer(task: Tasks) {
        const { id } = task;
        const val = JSON.stringify(task);
        localStorage.setItem(id, val);
    }

    sendUpdateToServer(id: string, task: Tasks) {
        localStorage.removeItem(id);
        localStorage.setItem(id, JSON.stringify(task));
    }

    deleteTaskFromServer(id: string) {
        localStorage.removeItem(id);
    }

    getAllFromServer() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.slice(0, 3) === "id-") {
                const val = JSON.parse(localStorage.getItem(key) as string);
                const storedTask$ = this.store.select(selectTaskById(key));
                storedTask$
                    .pipe(take(1))
                    .subscribe({
                        next: (res) => {
                            if (res === undefined) {
                                this.store.dispatch(addTaskAction({ newTask: val }));
                            }
                        },
                        error: () => {}
                    });
            }
        }
    }
}
