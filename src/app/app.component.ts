import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './component/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  onSelectUser(id:string) {
    this.selectedUserId = id
  }
  get SelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}
