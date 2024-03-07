import { Component, inject } from '@angular/core';
import { SortingService } from '../../services/sorting.service';
import { SortTypes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-sort-panel',
  standalone: true,
  imports: [],
  templateUrl: './sort-panel.component.html',
  styleUrl: './sort-panel.component.scss'
})
export class SortPanelComponent {

  private readonly sortingService = inject(SortingService);

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

}
