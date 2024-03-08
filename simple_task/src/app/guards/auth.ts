import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
    const router: Router = inject(Router);

    return localStorage.getItem("isLogged") ? true : router.navigate(["/login"]);
};
