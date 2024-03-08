import { Component, inject } from '@angular/core';
import { SortingService } from '../../services/sorting.service';
import { SortTypes } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

  private readonly sortingService = inject(SortingService);
  private readonly router = inject(Router);
  private matSnackBar = inject(MatSnackBar);

  onStatus() {
    this.sortingService.setsortType(SortTypes.status);
  }

  onDeadline() {
    this.sortingService.setsortType(SortTypes.deadline);
  }

  onExecutor() {
    this.sortingService.setsortType(SortTypes.executor);
  }

  onDefault() {
    this.sortingService.setsortType(SortTypes.default);
  }

  addNewTask() {
    this.router.navigate(["new"]);
  }

  onLogout() {
    localStorage.clear();
    this.matSnackBar.open("logged out", "OK", {
      duration: 3000,
    });
    this.router.navigate(["login"]);
  }

}
