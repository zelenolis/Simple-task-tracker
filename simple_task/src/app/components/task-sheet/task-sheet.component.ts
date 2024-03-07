import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectTaskById } from "../../ngrx-store/task_selector";
import { CommonModule, NgIf } from "@angular/common";

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

    public taskSheet$ = this.store.select(selectTaskById(this.taskId.snapshot.paramMap.get("id") as string));

    onBack() {
      this.router.navigate([""]);
    }

    onChange() {}

    onDelete() {}
}
