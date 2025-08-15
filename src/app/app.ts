import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

// el decorador es la metadata de esta clase (la "class App" de abajo)
@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: String;
  
  get selectedUser(){
    return this.users.find((user) => user.id == this.selectedUserId);
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
