import { Component, Input, output, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  newUser = output<string>();
  onSelectUser() {
    this.newUser.emit(this.id);
  }
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}

/*
* randomIndex: number = 1;
selectedUser = DUMMY_USERS[this.randomIndex];
@Input() avatar!: string;
get imagePath() {
  return 'assets/users/' + this.selectedUser.avatar;
}
  onSelectUser() {
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }
 */
