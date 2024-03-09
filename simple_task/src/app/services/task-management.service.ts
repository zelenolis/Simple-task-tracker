import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tasks } from '../interfaces/interfaces';
import { addTaskAction } from '../ngrx-store/task_actions';
import { selectTaskById } from '../ngrx-store/task_selector';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  private readonly store = inject(Store);

  sendTaskToServer(task: Tasks) {
    const id = task.id;
    const val = JSON.stringify(task);
    localStorage.setItem(id, val);
    return
  }

  sendUpdateToServer(id: string, task: Tasks) {
    localStorage.removeItem(id);
    localStorage.setItem(id, JSON.stringify(task));
    return
  }

  deleteTaskFromServer(id: string) {
    localStorage.removeItem(id);
    return
  }

  getAllFromServer() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.slice(0,3) === 'id-') {
        const val = JSON.parse(localStorage.getItem(key) as string);
        const storedTask$ = this.store.select(selectTaskById(key));
        storedTask$
        .pipe(take(1))
        .subscribe({
          next: (res) => {
            if (res === undefined) {
              this.store.dispatch(addTaskAction({ newTask: val }))
            }
          },
          error: () => {}
        })
      }
    }
    return
  }
}
