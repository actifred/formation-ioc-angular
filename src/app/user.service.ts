import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, interval, map, of, skip, Subject, take, tap } from 'rxjs';
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
        .subscribe({
          next: res => {
            this._users$.next(res.results);
          },
          error: err => console.log('ERREUR DE GET', err),
          complete: () => console.log('Complete') 
        });

    this._users$.subscribe({
      next: s => console.log('DEBUG NEXT', s),
      error: s => console.log('DEBUG ERROR', s),
      complete: () => console.log('DEBUG COMPLETE'),
    })
  }

  public getUsers() {
    return this.users$.pipe(take(1));
  }

  searchUsersName(recherche: string): Person[] {
    return this._users.filter(u => u.name.last.indexOf(recherche)!== -1);
  }
}
