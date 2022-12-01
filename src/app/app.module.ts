import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FullNamePipe } from './full-name.pipe';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { countryList } from './models/countries';

export const countryListToken = new InjectionToken("countryList");

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    FullNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
