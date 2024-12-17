import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
 private taskService:TasksService = inject(TasksService);
  isAddingTask: boolean = false;
  @Input() name!:string;
  @Input() userId: string = 'u1';
  @Output() add = new EventEmitter();
  get selectedUserTasks() {
   return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTasks() {
    this.isAddingTask = false;
  }
  onAddTask(Task: newTaskData) {
    this.taskService.addTask(Task,this.userId);
    this.isAddingTask = false;
  }
}
