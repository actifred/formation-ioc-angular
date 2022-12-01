import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FullNamePipe } from './full-name.pipe';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { countryList } from './models/countries';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const countryListToken = new InjectionToken("countryList");

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    FullNamePipe,
    UserListComponent,
    AboutComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ 
    UserService,
    { 
      provide: countryListToken,
      useValue: countryList
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
