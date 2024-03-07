import { Component, Input } from '@angular/core';
import { Priorities, Statuses, Tasks } from '../../interfaces/interfaces';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
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
}
