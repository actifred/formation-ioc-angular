import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { countryListToken } from '../app.module';
import { Person } from '../models/person';
import { UserService } from '../user.service';

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
          takeUntil(this._unsubscribe$)
        ).subscribe(p => {
          this.userId = p['uid'];
          this.nextId = this._userService.getRandomUserId();
          this._userService.getUserById(this.userId).subscribe({
            next: user => {
              this.user = user;
              if (user?.nat) {
                this._setCountryNameByShortCode(user.nat)
              }
            }
          })
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
