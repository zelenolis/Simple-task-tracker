import { Component, Input, inject } from '@angular/core';
import { Priorities, Statuses, Tasks } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  private readonly router = inject(Router);

  @Input()
    task: Tasks = {
      id: '',
      title: '',
      name: '',
      deadline: '',
      priority: Priorities.low,
      status: Statuses.new,
      executor: ''
    }

    onOpen(id: string) {
      this.router.navigate(["./task", id]);
    }
}
