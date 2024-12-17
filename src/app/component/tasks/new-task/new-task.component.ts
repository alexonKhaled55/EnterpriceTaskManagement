import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  private taskService: TasksService = inject(TasksService);
  title: string = '';
  summary: string = '';
  date!: string;
  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.date,
      },
      this.userId
    );
    this.onClose();
  }
}
