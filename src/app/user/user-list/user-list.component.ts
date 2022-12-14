import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { Person } from '../../models/person';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnChanges {

  @Input()
  public users : Person[] | null = [];

  @Output()
  public searchTextChanged = new EventEmitter<string>();

  public onFilterUsers(recherche: string) {
    this.searchTextChanged.emit(recherche);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('CHANGEMENTS', changes)

      // Exemple de gestion simultanée d'inputs
      if (changes.hasOwnProperty('messages') && changes.hasOwnProperty('userList')) {
        console.log("refresh")
      }
  }

}
