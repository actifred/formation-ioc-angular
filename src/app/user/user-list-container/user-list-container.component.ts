import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {

  // public users : Person[] = [];
  private _filteredUsers$ = new Subject<Person[]>();

  public users$ = merge(this._userService.getUsers(), this._filteredUsers$);

  // private _unsubscribeAll$ = new Subject<void>();

  constructor(private _userService: UserService) {}

  ngOnInit() {
    // this._userService.getUsers().subscribe({
    //   next: resultat => {
    //           this.users = resultat;
    //         },
    //   complete: () => console.log('Le service a rendu la main')
    // });
  }
  
  public onFilterUsers(recherche: string) {
    this._userService.searchInUsersName(recherche).subscribe(resultat => {
      this._filteredUsers$.next(resultat);
    });
  }

  ngOnDestroy() {
    // this._unsubscribeAll$.next();
    // this._unsubscribeAll$.complete();
  }
}
