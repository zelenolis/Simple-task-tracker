import {
    ChangeDetectionStrategy, Component, inject, OnDestroy
} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

import { SortTypes } from "../../interfaces/interfaces";
import { SortingService } from "../../services/sorting.service";

@Component({
    selector: "app-control-panel",
    standalone: true,
    imports: [],
    templateUrl: "./control-panel.component.html",
    styleUrl: "./control-panel.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnDestroy {
    private readonly sortingService = inject(SortingService);
    private readonly router = inject(Router);
    private matSnackBar = inject(MatSnackBar);

    public menu: string = "Menu";

    menuOpen() {
        if (this.menu === "Menu") {
            this.menu = "Close";
        } else {
            this.menu = "Menu";
        }
    }

    onStatus() {
        this.sortingService.setsortType(SortTypes.status);
        this.menu = "Menu";
    }

    onDeadline() {
        this.sortingService.setsortType(SortTypes.deadline);
        this.menu = "Menu";
    }

    onExecutor() {
        this.sortingService.setsortType(SortTypes.executor);
        this.menu = "Menu";
    }

    onDefault() {
        this.sortingService.setsortType(SortTypes.default);
        this.menu = "Menu";
    }

    addNewTask() {
        this.menu = "Menu";
        this.router.navigate(["new"]);
    }

    onLogout() {
        this.menu = "Menu";
        localStorage.clear();
        this.matSnackBar.open("logged out", "OK", {
            duration: 3000,
        });
        this.router.navigate(["login"]);
    }

    ngOnDestroy(): void {
        this.menu = "Menu";
    }
}
