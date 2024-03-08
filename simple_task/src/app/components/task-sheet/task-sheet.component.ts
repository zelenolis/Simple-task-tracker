import { Component, DestroyRef, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import { selectTaskById } from "../../ngrx-store/task_selector";
import { CommonModule, NgIf } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { removeTaskAction, updateTaskAction } from "../../ngrx-store/task_actions";
import { Statuses, Tasks } from "../../interfaces/interfaces";

@Component({
    selector: "app-task-sheet",
    standalone: true,
    imports: [CommonModule, NgIf],
    templateUrl: "./task-sheet.component.html",
    styleUrl: "./task-sheet.component.scss"
})
export class TaskSheetComponent {
    private readonly taskId = inject(ActivatedRoute);
    private readonly store = inject(Store);
    private readonly router = inject(Router);
    private readonly matSnackBar = inject(MatSnackBar);
    private readonly destroyRef = inject(DestroyRef);

    public taskSheet$ = this.store.select(selectTaskById(this.taskId.snapshot.paramMap.get("id") as string));
    public statusOptions = [Statuses.new, Statuses.inProgress, Statuses.completed];
    public changeOpen = true;



    onBack() {
      this.router.navigate([""]);
    }

    onChange() {
      this.changeOpen = false;
    }

    onCancel() {
      this.changeOpen = true;
    }

    onChangeConfirm(executors: string, stat: string, task: Tasks) {
      const updTask = {
        id: task.id,
        title: task.title,
        name: task.name,
        deadline: task.deadline,
        priority: task.priority,
        status: stat as Statuses,
        executor: executors
      }
      this.store.dispatch(updateTaskAction({taskId: task.id, updTask: updTask}))
      this.matSnackBar.open("Task changed", "OK", {
        duration: 2000,
      });
      this.changeOpen = true
    }

    onDelete() {
      let mySnackBar = this.matSnackBar.open('Confirm : ', 'Delete', {duration: 5000});

      mySnackBar.onAction()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.store.dispatch(removeTaskAction({ taskId: this.taskId.snapshot.paramMap.get("id") as string }));
          mySnackBar.dismiss();
          this.router.navigate([""]);
        });

    }

}
