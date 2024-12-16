import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() CancelAddTasks = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskData>();
  title: string = '';
  summary: string = '';
  date!: string;
  onCancelAddTasks() {
    this.CancelAddTasks.emit();
  }
  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date,
    });
  }
}
