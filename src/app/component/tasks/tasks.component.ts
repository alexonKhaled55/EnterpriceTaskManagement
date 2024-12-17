import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
