import { CommonModule, NgFor, NgIf } from "@angular/common";
import {
    ChangeDetectionStrategy, Component, inject, OnInit
} from "@angular/core";
import { Store } from "@ngrx/store";

import { selectAllTasks } from "../../ngrx-store/task_selector";
import { SortingPipe } from "../../pipes/sorting.pipe";
import { SortingService } from "../../services/sorting.service";
import { TaskManagementService } from "../../services/task-management.service";
import { ControlPanelComponent } from "../control-panel/control-panel.component";
import { TaskComponent } from "../task/task.component";

@Component({
    selector: "app-main",
    standalone: true,
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
    imports: [CommonModule, NgFor, NgIf, TaskComponent, SortingPipe, ControlPanelComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
    private readonly store = inject(Store);
    private readonly taskManagementService = inject(TaskManagementService);

    protected sortingService = inject(SortingService);

    public allTasks$ = this.store.select(selectAllTasks);

    ngOnInit(): void {
        this.taskManagementService.getAllFromServer();
    }
}
