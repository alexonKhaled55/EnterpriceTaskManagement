import { Component, Input, output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  select = output<string>();
  @Input({ required: true }) selected!: boolean;

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}