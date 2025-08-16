import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) taskName?: string;
  @Input({required: true}) time?: string;
  @Input({required: true}) summary?: string;

  
}
