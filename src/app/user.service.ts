import { Injectable } from '@angular/core';
import { Person } from './models/person';
import { profiles } from './resources/profiles';

@Injectable()
export class UserService {
  private _users: Person[] = [];

  constructor() {
    this._users = profiles;
  }

  public getUsers() {
    return [...this._users];
  }

  searchUsersName(recherche: string): Person[] {
    return this._users.filter(u => u.name.last.indexOf(recherche)!== -1);
  }
}
