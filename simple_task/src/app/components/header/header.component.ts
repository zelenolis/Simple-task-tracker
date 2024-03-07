import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {
    private readonly router = inject(Router);

    addNewTask() {
        this.router.navigate(["new"]);
    }
}
