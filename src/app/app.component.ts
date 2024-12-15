import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { UserComponent } from "./component/user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
