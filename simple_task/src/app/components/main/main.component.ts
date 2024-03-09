import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllTasks } from "../../ngrx-store/task_selector";
import { TaskComponent } from "../task/task.component";
import { SortingPipe } from "../../pipes/sorting.pipe";
import { SortingService } from "../../services/sorting.service";
import { ControlPanelComponent } from "../control-panel/control-panel.component";
import { TaskManagementService } from "../../services/task-management.service";

@Component({
    selector: "app-main",
    standalone: true,
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
    imports: [CommonModule, NgFor, NgIf, TaskComponent, SortingPipe, ControlPanelComponent]
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
