import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private _unsubscribe$ = new Subject<void>();

  public userId: string = '';
  
  constructor(private _route: ActivatedRoute) {
    this._route.params
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe(p => this.userId = p['uid']);
  }

  ngOnInit(): void {
    console.log('ON INIT')
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next()
    this._unsubscribe$.complete()
  }

}
