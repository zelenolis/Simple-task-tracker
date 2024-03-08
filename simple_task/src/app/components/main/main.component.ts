import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectAllTasks } from "../../ngrx-store/task_selector";
import { TaskComponent } from "../task/task.component";
import { SortingPipe } from "../../pipes/sorting.pipe";
import { SortingService } from "../../services/sorting.service";
import { ControlPanelComponent } from "../control-panel/control-panel.component";

@Component({
    selector: "app-main",
    standalone: true,
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
    imports: [CommonModule, NgFor, NgIf, TaskComponent, SortingPipe, ControlPanelComponent]
})
export class MainComponent implements OnInit {
    private readonly store = inject(Store);
    private readonly router = inject(Router);

    protected sortingService = inject(SortingService);

    public taskName = "";
    public userId = "";
    public allTasks$ = this.store.select(selectAllTasks);

    ngOnInit(): void {
        this.userId = localStorage.getItem("userId") as string;
    }
}
