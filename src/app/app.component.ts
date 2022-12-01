import { Component } from '@angular/core';
import { Person } from './models/person';
import { profiles } from './resources/profiles';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iocean-angular';

  public users : Person[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.users = this._userService.getUsers();
  }
  
  public onFilterUsers(recherche: string) {
    this.users = this._userService.searchUsersName(recherche);
  }
}
