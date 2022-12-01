import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { Person } from '../models/person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  title = 'iocean-angular';

  public users : Person[] = [];

  private _unsubscribeAll$ = new Subject<void>();

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe({
      next: resultat => {
              this.users = resultat;
            },
      complete: () => console.log('Le service a rendu la main')
    });
  }
  
  public onFilterUsers(recherche: string) {
    this._userService.getUsers().subscribe(resultat => {
      this.users = resultat;
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }
}
