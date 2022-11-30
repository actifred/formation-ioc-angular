import { Component } from '@angular/core';
import { profiles } from './resources/profiles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iocean-angular';

  public users = profiles;
  
}
