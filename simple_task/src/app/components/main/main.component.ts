import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectAllTasks } from '../../ngrx-store/task_selector';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Tasks } from '../../interfaces/interfaces';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NgFor, NgIf, TaskComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  private readonly store = inject(Store);
  private readonly router = inject(Router);

  public taskName = '';
  public userId = '';
  public allTasks$ = this.store.select(selectAllTasks);

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId") as string;
  }

}
