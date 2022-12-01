import { Component } from '@angular/core';
import { Person } from './models/person';
import { profiles } from './resources/profiles';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iocean-angular';

  public users : Person[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    let abonnement = this._userService.getUsers().subscribe({
      next: resultat => {
              console.log('Le service a répondu', resultat)
              this.users = resultat;
            },
      complete: () => console.log('Le service a rendu la main')
    });
    console.log('LISTE APPELEE AU DEMARRAGE')
  }
  
  public onFilterUsers(recherche: string) {
    this._userService.getUsers().subscribe(resultat => {
      console.log('Le service a répondu')
      this.users = resultat;
    });
    console.log('LISTE RAPPELEE')
  }
}
