import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input()
  public user!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
