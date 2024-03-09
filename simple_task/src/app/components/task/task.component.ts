import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import {MatTooltipModule} from '@angular/material/tooltip';
import { Priorities, Statuses, Tasks } from "../../interfaces/interfaces";
import { ColoredTitleDirective } from '../../directives/colored-title.directive';

@Component({
    selector: "app-task",
    standalone: true,
    imports: [MatTooltipModule, ColoredTitleDirective],
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.scss"
})
export class TaskComponent {
    private readonly router = inject(Router);

    @Input()
        task: Tasks = {
            id: "",
            title: "",
            name: "",
            deadline: "",
            priority: Priorities.low,
            status: Statuses.new,
            executor: ""
        };

    onOpen(id: string) {
        this.router.navigate(["./task", id]);
    }
}
