import { NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
    FormControl, FormGroup, ReactiveFormsModule, Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Priorities, Statuses, Tasks } from "../../interfaces/interfaces";
import { addTaskAction } from "../../ngrx-store/task_actions";
import { MatSnackBar } from "@angular/material/snack-bar";

// generate ID for new task
function genRanHex(val: number) {
    return [...Array(val)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
}

@Component({
    selector: "app-form",
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgFor],
    templateUrl: "./form.component.html",
    styleUrl: "./form.component.scss"
})
export class FormComponent {
    private readonly store = inject(Store);
    private readonly router = inject(Router);
    private readonly matSnackBar = inject(MatSnackBar);
    private readonly size = 8; // digits in task's ID

    public today = new Date().toISOString().split("T")[0];

    public priorityOptions = [Priorities.low, Priorities.neutral, Priorities.high];
    public statusOptions = [Statuses.new, Statuses.inProgress, Statuses.completed];

    newTask = new FormGroup({
        title: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required]),
        deadline: new FormControl("", [Validators.required]),
        priority: new FormControl("", [Validators.required]),
        status: new FormControl("", [Validators.required]),
        executor: new FormControl("", [Validators.required])
    });

    onSubmit() {
        const taskSubmit: Tasks = {
            id: genRanHex(this.size) as string,
            title: this.newTask.value.title as string,
            name: this.newTask.value.name as string,
            deadline: this.newTask.value.deadline as string,
            priority: this.newTask.value.priority as Priorities,
            status: this.newTask.value.status as Statuses,
            executor: this.newTask.value.executor as string,
        };

        this.store.dispatch(addTaskAction({ newTask: taskSubmit }));

        this.matSnackBar.open("task created", "OK", {
          duration: 3000,
        });

        this.router.navigate([""]);
    }
}
