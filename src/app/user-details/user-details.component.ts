import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, mergeMap, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { countryListToken } from '../app.module';
import { Person } from '../models/person';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private _unsubscribe$ = new Subject<void>();

  public userId = '';
  public nextId = '';
  public user: Person | undefined;
  public country = '';
  
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    @Inject(countryListToken) public countries: any
    ) {
    this._route.params
        .pipe(
          takeUntil(this._unsubscribe$),
          tap(param => this.userId = param['uid']),
          tap(param => this.nextId = this._userService.getRandomNextUserId(param['uid'])),
          mergeMap(p => {
            console.log('Parametre', p);
            return this._userService.getUserById(this.userId)
          }),
          tap(u => console.log('le user a été chargé dans le pipe', u))
        )
        .subscribe({
          next: user => {
            this.user = user;
            if (user?.nat) {
              this._setCountryNameByShortCode(user.nat)
            }
          }
        });
  }

  ngOnInit(): void {
  }

  _setCountryNameByShortCode(countryCode: string) {
    this.country = this.countries[countryCode];
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }

}
