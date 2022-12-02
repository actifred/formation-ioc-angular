import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FullNamePipe } from './core/full-name.pipe';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';
import { countryList } from './models/countries';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { SplashComponent } from './splash/splash.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { UserGuard } from './user.guard';
import { FakeFormComponent } from './user/fake-form/fake-form.component';
import { DirtyGuard } from './dirty.guard';

export const countryListToken = new InjectionToken("countryList");

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    FullNamePipe,
    UserListComponent,
    AboutComponent,
    UserDetailsComponent,
    SplashComponent,
    UserMainComponent,
    FakeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ 
    UserService,
    { 
      provide: countryListToken,
      useValue: countryList
    },
    UserGuard,
    DirtyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
