import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  isAddingTask: boolean = false;
  @Input() name: string = 'Tasks Of The User';
  tasks = dummyTasks;
  @Input() userId: string = 'u1';
  @Output() add = new EventEmitter();
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId == this.userId);
  }
  onCompleteTask(id: String) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  addTask() {
    this.isAddingTask = true;
  }
  onCancelAddTasks() {
    this.isAddingTask = false;
  }
  onAddTask(Task: newTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: Task.title,
      dueDate: Task.date,
      summary: Task.summary,
    });
    this.isAddingTask = false;
  }
}
