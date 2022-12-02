import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from './core/user.service';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Person | undefined> {

  constructor(private _userService:UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person | undefined> {
    return this._userService.getUserById(route.params['uid']);
  }
}
