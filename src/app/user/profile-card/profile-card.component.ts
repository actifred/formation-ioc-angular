import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input()
  public user!: Person;

  public onClick() {
    console.log('NAVIGUER VERS USER ', this.user.login.uuid);
    this._router.navigateByUrl('/user/' + this.user.login.uuid);
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
