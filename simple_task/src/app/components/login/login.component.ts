import { NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
    FormControl, FormGroup, ReactiveFormsModule, Validators
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, RouterLink],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    private readonly router = inject(Router);
    private readonly matSnackBar = inject(MatSnackBar);

    loginForm = new FormGroup({
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    onSubmit() {
        const { email, password } = this.loginForm.value;

        if (
            email === null || email === undefined
      || password === null || password === undefined
        ) { return; }

        localStorage.setItem("isLogged", "logged");

        this.matSnackBar.open("logged succesfully", "OK", {
            duration: 3000,
        });

        this.router.navigate([""]);
    }
}
