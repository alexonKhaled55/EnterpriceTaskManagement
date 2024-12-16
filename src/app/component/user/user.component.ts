import { Component, Input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  select = output<string>();
  @Input({required:true}) selected!:boolean;

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
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
