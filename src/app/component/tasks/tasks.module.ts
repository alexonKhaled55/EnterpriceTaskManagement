import { NgModule } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { DatePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TasksComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, DatePipe, FormsModule],
})
export class TasksModule {}
