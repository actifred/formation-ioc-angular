import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input()
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
