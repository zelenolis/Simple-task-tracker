import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const loggedGuard: CanActivateFn = () => {
    const router: Router = inject(Router);

    return localStorage.getItem("isLogged") ? router.navigate([""]) : true;
};
