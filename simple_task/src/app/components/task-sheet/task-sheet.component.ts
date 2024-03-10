import { CommonModule, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { take } from "rxjs";

import { Statuses, Tasks } from "../../interfaces/interfaces";
import { removeTaskAction, updateTaskAction } from "../../ngrx-store/task_actions";
import { selectTaskById } from "../../ngrx-store/task_selector";
import { TaskManagementService } from "../../services/task-management.service";

@Component({
    selector: "app-task-sheet",
    standalone: true,
    imports: [CommonModule, NgIf, MatTooltipModule],
    templateUrl: "./task-sheet.component.html",
    styleUrl: "./task-sheet.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSheetComponent {
    private readonly taskId = inject(ActivatedRoute);
    private readonly store = inject(Store);
    private readonly router = inject(Router);
    private readonly taskManagementService = inject(TaskManagementService);
    private readonly matSnackBar = inject(MatSnackBar);

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
        };
        this.store.dispatch(updateTaskAction({ taskId: task.id, updTask }));
        this.taskManagementService.sendUpdateToServer(task.id, updTask);
        this.matSnackBar.open("Task changed", "OK", {
            duration: 2000,
        });
        this.changeOpen = true;
    }

    onDelete() {
        const mySnackBar = this.matSnackBar.open("Confirm : ", "Delete", { duration: 5000 });

        mySnackBar.onAction()
            .pipe(take(1))
            .subscribe(() => {
                const id = this.taskId.snapshot.paramMap.get("id") as string;
                this.store.dispatch(removeTaskAction({ taskId: id }));
                this.taskManagementService.deleteTaskFromServer(id);
                mySnackBar.dismiss();
                this.router.navigate([""]);
            });
    }
}
