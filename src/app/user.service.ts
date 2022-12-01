import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, of, skip, Subject, take, tap } from 'rxjs';
import { countryListToken } from './app.module';
import { Person } from './models/person';
import { profiles } from './resources/profiles';

interface RandomUserResponse {
  results: Person[]
}

@Injectable()
export class UserService {
  private _users: Person[] = [];

  private _users$ = new BehaviorSubject<Person[]>([]);
  public users$ = this._users$.pipe(skip(1));

  constructor(
    private _http: HttpClient,
    @Inject(countryListToken) public maListedePays: any[]
    ) {
    this._http.get<RandomUserResponse>('https://randomuser.me/api/?results=50')
        .pipe(delay(3000))
        .subscribe({
          next: res => {
            this._users$.next(res.results);
          },
          error: err => console.log('ERREUR DE GET', err),
          complete: () => console.log('Complete') 
        });
  }

  public getUsers() {
    return this.users$.pipe(take(1));
  }
  //   if (this._users.length > 0) {
  //     return of(this._users) 
  //   }
  //   return this._http
  //             .get<RandomUserResponse>('https://randomuser.me/api/?results=50')
  //             .pipe(
  //               map(res => {
  //                 return res.results;
  //               }),
  //               tap(users => {
  //                 this._users = users;
  //               })
  //             )
  // }

  searchUsersName(recherche: string): Person[] {
    return this._users.filter(u => u.name.last.indexOf(recherche)!== -1);
  }
}
