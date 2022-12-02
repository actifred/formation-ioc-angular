import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, take } from 'rxjs';
import { countryListToken } from '../app.module';
import { Person } from '../models/person';

interface RandomUserResponse {
  results: Person[];
}

@Injectable()
export class UserService {

  private _users$ = new BehaviorSubject<Person[]>([]);
  public users$ = this._users$.asObservable();

  constructor(
    private _http: HttpClient,
    @Inject(countryListToken) public maListedePays: any[]
  ) {
    this._http
      .get<RandomUserResponse>('https://randomuser.me/api/?results=100')
      .subscribe({
        next: (res) => {
          this._users$.next(res.results);
        },
        error: (err) => console.warn('ERREUR DE GET', err),
        complete: () => console.log('Fetch complete'),
      });
  }

  // public getUsers() {
  //   return this.users$;
  // }

  public getUserById(userId: string) {
    return this._users$.pipe(
      delay(500),
      map((ulist) => ulist.find((u) => u.login.uuid === userId)),
      take(1)
    );
  }

  public getRandomNextUserId(userId: string): string {
    const users = this._users$.getValue();
    let randomInt;
    do {
      randomInt = Math.floor(Math.random() * users.length);
    } while (randomInt === users.length || users[randomInt].login.uuid === userId);
    return users[randomInt].login.uuid;
  }

  public searchInUsersName(recherche: string) {
    const minSearch = recherche.toLowerCase();
    return this._users$.pipe(
      map((ulist) =>
        ulist.filter((u) => {
          return (
            u.name.last.toLowerCase().indexOf(minSearch) !== -1 ||
            u.name.first.toLowerCase().indexOf(minSearch) !== -1
          );
        })
      ),
      take(1)
    );
  }
}
