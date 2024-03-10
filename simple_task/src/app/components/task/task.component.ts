import {
    ChangeDetectionStrategy, Component, inject, Input
} from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router } from "@angular/router";

import { ColoredTitleDirective } from "../../directives/colored-title.directive";
import { Priorities, Statuses, Tasks } from "../../interfaces/interfaces";

@Component({
    selector: "app-task",
    standalone: true,
    imports: [MatTooltipModule, ColoredTitleDirective],
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
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
