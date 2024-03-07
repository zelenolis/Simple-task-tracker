import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Statuses, Priorities } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  private readonly router = inject(Router);

  public today = new Date().toISOString().split('T')[0]

  public priorityOptions = [Priorities.low, Priorities.neutral, Priorities.high];
  public statusOptions = [Statuses.new, Statuses.inProgress, Statuses.completed];

  newTask = new FormGroup({
    title: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    deadline: new FormControl("", [Validators.required]),
    priority: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required]),
    executor: new FormControl("", [Validators.required])
  });

  onSubmit() {
    console.log(this.newTask.value);
    console.log(this.today)
    //this.router.navigate([""]);
  }

}
